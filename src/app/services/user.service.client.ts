import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
    new User('123', 'alice', 'alice'),
    new User('234', 'bob', 'bob'),
    new User('345', 'charly', 'charly'),
    new User('456', 'jannunzi', 'jannunzi')
  ];

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  createUser(user: any) {
    user._id = Math.random();
    this.users.push(user);
    return user;
  }

  findUserById(userId: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        return this.users[i];
      }
    }
  }

  findUserByUsername(username: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === username) {
        return this.users[i];
      }
    }
  }

  findUserByCredentials(username: String, password: String) {
    return this.users.find(function (user) {
      return user.username === username && user.password === password;
    });
  }

  updateUser(userId: String, user: any) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        this.users[i] = user;
      }
    }
  }

  deleteUser(userId: String) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id === userId) {
        return this.users.splice(i, 1);
      }
    }
  }

}
