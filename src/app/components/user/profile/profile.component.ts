import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;

  userId: String;
  user: User;
  username: String;
  firstName: String;
  lastName: String;
  users= [{}];

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params['userId'];

      this.userService
        .findUserById(this.userId)
        .subscribe((user: User) => {
          this.userId = user._id;
          this.user = user;
          this.username = user.username;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
        });
    });
  }

  update() {
    if (this.profileForm.value.username.length > 0) {
      this.username = this.profileForm.value.username;
    }
    if (this.profileForm.value.firstName.length > 0) {
      this.firstName = this.profileForm.value.firstName;
    }
    if (this.profileForm.value.lastName.length > 0) {
      this.lastName = this.profileForm.value.lastName;
    }
    const tempUser = new User(this.userId, this.username, this.user.password, this.firstName, this.lastName);
    this.userService.updateUser(tempUser).subscribe((tempUser) => {
      this.user = tempUser;
    });
  }

  delete() {
    this.userService.deleteUser(this.userId).subscribe((users) => {
      this.users = this.userService.users;
    });
  }
}
