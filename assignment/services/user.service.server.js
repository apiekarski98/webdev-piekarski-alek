module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");

  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUsers);
  app.get("/api/user?username=username", findUserByUsername);
  app.get("/api/user?username=username&password=password", findUserByCredentials);
  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post('/api/register', register);
  app.post('/api/loggedIn', loggedIn);
  app.post('/api/logout', logout);

  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  app.post('/api/login', passport.authenticate('local'), login);


  var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
  ];

  function register(req, res) {
    var newUser = req.body;
    userModel.createUser(newUser)
      .then(function (user) {
        req.login(user, function (err) {
          res.json(user);
        });
      });
  }

  function login(req, res) {
    res.json(req.user);
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    userModel.deleteUser(userId)
      .then(function (status) {
        res.send(status);
      });
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var user = req.body;
    userModel.updateUser(userId, user)
      .then(function (status) {
        res.send(status);
      });
  }

  function createUser(req, res) {
    var newUser = req.body;
    userModel.createUser(newUser)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUserByUsername(req, res) {
    var username = req.query["username"];
    userModel.findUserByUsername(username)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUserByCredentials(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    userModel.findUserByCredentials(username, password)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId)
      .then(function (user) {
        res.json(user);
      });
  }

  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      userModel.findUserByCredentials(username, password)
        .then(function (user) {
          res.json(user);
        });
      return;
    } else if (username) {
      userModel.findUserByUsername(username)
        .then(function (user) {
          res.json(user);
        });
      return;
    }
    res.json(users);
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id)
      .then(
        function (user) {
          done(null, user);
        },
        function (err) {
          done(err, null);
        }
      );
  }

  function localStrategy(usr, pass, done) {
    userModel
      .findUserByCredentials(usr, pass)
      .then(function (user) {
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
  }
}
