import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Response} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class UserService {

  users: User[] = [
    new User('123', 'alice', 'alice', 'Alice', 'Wonder'),
    new User('234', 'bob', 'bob', 'Bob', 'Marley'),
    new User('345', 'charly', 'charly', 'Charly', 'Garcia'),
    new User('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
  ];

  constructor(private http: Http) {
  }

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  createUser(user: User) {
    const url = 'http://localhost:3100/api/user';
    var randomId = Math.floor(Math.random() * 1000000);
    user._id = randomId.toString();
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: String) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });

  }

  findUserByUsername(username: String) {
    const url = 'http://localhost:3100/api/user?username=' + username;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findUserByCredentials(username: String, password: String) {
    const url = 'http://localhost:3100/api/user?username=' + username + '&password=' + password;
    return this.http.get(url).map(
      (response: Response) => {
        return response.json();
      });
  }

  updateUser(user: User) {
    const url = 'http://localhost:3100/api/user/' + user._id;
    return this.http.put(url, user)
      .map(
        (response: Response) => {
          return response.json();
        });
  }

  deleteUser(userId: String) {
    const url = 'http://localhost:3100/api/user/' + userId;
    return this.http.delete(url)
      .map((response: Response) => {
        return response.json();
      });
  }

}
