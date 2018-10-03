const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

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
users = [
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
    id: '10',
    date: new Date()
  },
  {
    id: '11',
    date: new Date()
  },
  {
    id: '12',
    date: new Date()
  }
];

resorts = [
  {
    id: 'vorstand',
    leaderId: '1',
    password: 'vorstand'
  },
  {
    id: 'marketing',
    leaderId: '2',
    password: 'marketing'
  },
  {
    id: 'cr',
    leaderId: '3',
    password: 'cr'
  },
  {
    id: 'admin',
    leaderId: '1',
    password: 'admin'
  }
];



/** USER ENDPOINTS */

app.get('/api/users', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const user = authData.user;
      if (user.id === 'admin') {
        res.json({ users });
      } else {
        const filteredUsers = users.filter(u => u.resortId === user.id);
        res.json({ users: filteredUsers });
        // return all users belonging to the resort of the authenticated user
      }
    }
  });
});

app.post('/api/user', verifyToken, (req, res) => {
  let newUser = req.body.user;
  if (!newUser) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const user = authData.user;
      if (user.id !== 'admin') {
        // set resort of new user to resort of user sending request
        newUser.resortId = user.resortId;
      } 
      // will be set by admin in frontend modal
      users.push(newUser);
      res.json({user: newUser});
    }
  });
});

app.put('/api/user', verifyToken, (req, res) => {
  const editUser = req.body.user;
  if (!editUser) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const user = authData.user;
      if (user.id === 'admin') {
        // replace user by edited user
        // only allowed for admin user
        const userIndex = users.findIndex(u => u.id = editUser.id);
        users[userIndex] = editUser;
        res.json({user: editUser});
      } else {
        res.sendStatus(403);
      }
    }
  });
});

app.delete('/api/user/userId', verifyToken, (req, res) => {
  const deleteUserId = req.params.userId;
  if (!deleteUserId) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const user = authData.user;
      if (user.id === 'admin') {
        // remove selected user from list of all users
        // only allowed for admin user
        users = users.filter(u => u.id !== deleteUserId);
        res.json({userId: deleteUserId});
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
  })
});



/** RESORT ENDPOINTS */

app.get('/api/resorts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const formattedResorts = resorts.map(r => {
        return {
          id: r.id,
          leaderId: r.leaderId
        };
      });
      res.json({resorts: formattedResorts});
    }
  });
});

app.post('/api/resort', verifyToken, (req, res) => {
  const newResort = req.body.resort;
  if (!newResort) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const user = authData.user;
      if (user.id === 'admin') {
        resorts.push(newResort);
        res.json({resort: newResort});
      } else {
        res.sendStatus(403);
      }
    }
  });
});

app.put('/api/resort', verifyToken, (req, res) => {
  const editResort = req.body.resort;
  if (!editResort) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const user = authData.user;
      if (user.id === 'admin') {
        const resortId = resorts.findIndex(r => r.id === editResort.id);
        resorts[resortId] = editResort;
        res.json({resort: editResort})
      } else {
        res.sendStatus(403);
      }
    }
  });
});

app.delete('/api/resort/:resortId', verifyToken, (req, res) => {
  const deleteResortId = req.params.resortId;
  if (!deleteResortId) {
    return res.sendStatus(400);
  }
  jwt.verify(req.token, 'secretkex', (err, authData) => {
    if (err) {
      res.sendStatus(401);
    } else {
      const user = authData.user;
      if (user.id === 'admin') {
        resorts = resorts.filter(r => r.id !== deleteResortId);
        res.json({resortId: deleteResortId});
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
  const user = resorts.find(r => r.id === userName && r.password === password);
  if (!user) {
    return res.sendStatus(404);
  } else {
    jwt.sign({ user }, 'secretkex', { expiresIn: '10m' }, (err, token) => {
      res.json({ token });
    });
  }
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
  res.sendFile(path.resolve('public/index.html'));
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log('listening on port ' + port);
});
