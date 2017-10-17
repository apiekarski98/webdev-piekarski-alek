import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: String;
  user = {};
  username: String;
  firstName: String;
  lastName: String;
  password: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];
    });

    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.password = this.user['password'];
  }

  update(username: String, firstName: String, lastName: String) {
    this.userService.updateUser(this.userId, new User(this.userId, username, this.password, firstName, lastName));
  }

  delete(userId: String) {
    this.userService.deleteUser(userId);
  }
}
