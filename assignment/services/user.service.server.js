module.exports = function (app) {

  var userModel = require("../model/user/user.model.server");

  app.get("/api/user/:userId", findUserById);
  app.get("/api/user", findUsers);
  app.get("/api/user?username=username", findUserByUsername);
  app.get("/api/user?username=username&password=password", findUserByCredentials);
  app.post("/api/user", createUser);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);

  var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
  ];

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    userModel.deleteUser(userId).then(function (status) {
      res.send(status);
    });
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var user = req.body;
    userModel.updateUser(userId, user).then(function (status) {
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
    if (username) {
      var user = users.find(function (user) {
        return user.username === username;
      });

      if (user) {
        res.json(user);
      }
      return;
    }
  }

  function findUserByCredentials(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      var user = users.find(function (user) {
        return user.username === username && user.password === password;
      });

      if (user) {
        res.json(user);
      }
      return;
    }
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId).then(function (user) {
      res.json(user);
    });
  }

  function findUsers(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function (user) {
        res.json(user);
      });
      return;
    } else if (username) {
      userModel.findUserByUsername(username).then(function (user) {
        res.json(user);
      });
      return;
    }
    res.json(users);
  }
}
