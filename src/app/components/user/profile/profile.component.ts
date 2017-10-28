import {Component, OnInit} from '@angular/core';
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
  user: User;

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
        });
    });
  }

  update(user) {
    this.userService.updateUser(user).subscribe((newUser) => {
      this.user = newUser;
    });
  }

  delete() {
    this.userService.deleteUser(this.userId);
  }
}
