const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');
const bcrypt = require('bcrypt');

const memberSchema = joi.object().keys({
  cardId: joi.string(),
  firstName: joi.string(),
  lastName: joi.string(),
  resortId: joi.string(),
  lastLogin: joi.string(),
  deactivated: joi.boolean()
});

const accountSchema = joi.object().keys({
  resortId: joi.string(),
  leaderId: joi.string(),
  password: joi.string()
});

const attemptSchema = joi.object().keys({
  cardId: joi.string(),
  date: joi.string()
})

const app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend/dist/doorwatch')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

// MOCK DATA
members = [
  {
    cardId: '1',
    firstName: 'Christoph',
    lastName: 'Stein',
    resortId: 'wim',
    lastLogin: new Date(),
    deactivated: false
  },
  {
    cardId: '2',
    firstName: 'Gustav',
    lastName: 'Gans',
    resortId: 'beschde',
    lastLogin: new Date(),
    deactivated: true
  },
  {
    cardId: '3',
    firstName: 'Dagobert',
    lastName: 'Duck',
    resortId: 'vorstand',
    lastLogin: new Date(),
    deactivated: false
  },
  {
    cardId: '4',
    firstName: 'Peter',
    lastName: 'Waffel',
    resortId: 'wim',
    lastLogin: new Date(),
    deactivated: false
  },
  {
    cardId: '5',
    firstName: 'Sean',
    lastName: 'Pelotte',
    resortId: 'beschde',
    lastLogin: new Date(),
    deactivated: true
  },
  {
    cardId: '6',
    firstName: 'Herbert',
    lastName: 'Winters',
    resortId: 'vorstand',
    lastLogin: new Date(),
    deactivated: false
  }
];

attempts = [
  {
    cardId: '10',
    date: new Date()
  },
  {
    cardId: '11',
    date: new Date()
  },
  {
    cardId: '12',
    date: new Date()
  }
];

accounts = [
  {
    resortId: 'vorstand',
    leaderId: '1',
    password: 'vorstand'
  },
  {
    resortId: 'wim',
    leaderId: '2',
    password: 'wim'
  },
  {
    resortId: 'cr',
    leaderId: '3',
    password: 'cr'
  },
  {
    resortId: 'admin',
    leaderId: '1',
    password: 'admin'
  }
];

/** USER ENDPOINTS */

app.get('/api/members', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const account = authData.account;
      if (account.resortId === 'admin') {
        res.json({ members });
      } else {
        const filteredMembers = members.filter(
          m => m.resortId === account.resortId
        );
        res.json({ members: filteredMembers });
      }
    }
  });
});

app.post('/api/member', verifyToken, (req, res) => {
  const newMember = req.body.member;
  const validation = joi.validate(newMember, memberSchema);
  if (validation.error) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const account = authData.account;
      if (account.resortId !== 'admin') {
        // set resort of new user to resort of user sending request
        newMember.resortId = account.resortId;
      }
      members.push(newMember);
      // remove the corresponding login attempt
      attempts = attempts.filter(a => a.cardId !== newMember.cardId);
      res.json({ member: newMember });
    }
  });
});

app.put('/api/member', verifyToken, (req, res) => {
  const editMember = req.body.member;
  const validation = joi.validate(editMember, memberSchema);
  if (validation.error) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const memberIndex = members.findIndex(m => m.cardId === editMember.cardId);
      members[memberIndex] = editMember;
      res.json({ member: editMember });
    }
  });
});

app.delete('/api/member/:memberId', verifyToken, (req, res) => {
  const deleteMemberId = req.params.memberId;
  if (!deleteMemberId) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const account = authData.account;
      if (account.resortId === 'admin') {
        // remove selected user from list of all users
        // only allowed for admin user
        member = members.filter(m => m.id !== deleteMemberId);
        res.json({ memberId: deleteMemberId });
      } else {
        res.sendStatus(403);
      }
    }
  });
});

/** LOGIN ATTEMPTS ENDPOINTS */
app.get('/api/attempts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      res.json({ attempts });
    }
  });
});

/** RESORT ENDPOINTS */

app.get('/api/accounts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const formattedAccounts = accounts.filter(a => a.resortId !== 'admin').map(a => {
        return {
          resortId: a.resortId,
          leaderId: a.leaderId
        };
      });
      res.json({ accounts: formattedAccounts });
    }
  });
});

app.post('/api/account', verifyToken, (req, res) => {
  const resort = req.body.resort;
  const password = req.body.password;

  if(!resort || !password) {
    return res.sendStatus(400);
  }

  const newAccount = {
    resortId: resort.resortId,
    leaderId: resort.leaderId,
    password: password
  };

  const validation = joi.validate(newAccount, accountSchema);
  if (validation.error) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const account = authData.account;
      if (account.resortId === 'admin' && newAccount.resortId !== 'admin') {
        accounts.push(newAccount);
        res.json({ account: newAccount });
      } else {
        res.sendStatus(403);
      }
    }
  });
});

app.put('/api/account', verifyToken, (req, res) => {
  const resort = req.body.resort;
  const password = req.body.password;

  if(!resort || !password) {
    return res.sendStatus(400);
  }

  const editAccount = {
    resortId: resort.resortId,
    leaderId: resort.leaderId,
    password: password
  };
  
  const validation = joi.validate(editAccount, accountSchema);
  if (validation.error) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const account = authData.account;
      if (account.resortId === 'admin' && editAccount.resortId !== 'admin') {
        const accountId = accounts.findIndex(
          a => a.resortId === editAccount.resortId
        );
        accounts[accountId] = editAccount;
        res.json({ account: editAccount });
      } else {
        res.sendStatus(403);
      }
    }
  });
});

app.delete('/api/account/:accountId', verifyToken, (req, res) => {
  const deleteAccountId = req.params.accountId;
  if (!deleteAccountId) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const account = authData.account;
      if (account.resortId === 'admin') {
        accounts = accounts.filter(a => a.resortId !== deleteAccountId);
        res.json({ accountId: deleteAccountId });
      } else {
        res.sendStatus(403);
      }
    }
  });
});

/** LOGIN ENDPOINT */
app.post('/api/login', (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  if (!userName || !password) {
    return res.sendStatus(400);
  }

  // get user from db
  const account = accounts.find(
    a => a.resortId === userName && a.password === password
  );
  if (!account) {
    return res.sendStatus(404);
  } else {
    jwt.sign({ account }, 'secretkex', { expiresIn: '10m' }, (err, token) => {
      res.json({ token });
    });
  }
});

/** OPEN DOOR MANUALLY ENDPOINT */
app.post('/api/open', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      res.sendStatus(200);
    }
  });
});

// format of token
// authorization: bearer <access_token>

function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('/frontend/dist/doorwatch/index.html'));
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log('listening on port ' + port);
});
