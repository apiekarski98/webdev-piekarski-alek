import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;

  username: String;
  password: String;
  verifyPassword: String;
  errorFlag: boolean;
  errorMsg = 'Passwords do not match!';

  constructor(private userService: UserService,
              private router: Router) {

  }

  ngOnInit() {
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;
    if (this.password === this.verifyPassword) {
      this.userService.findUserByUsername(this.username).subscribe((user) => {
        if (user === null) {
          const newUser = new User('0', this.username, this.password, '', '');
          this.userService.createUser(newUser).subscribe((userFromServer) => {
            this.router.navigate(['/profile', userFromServer._id]);
          });
        }
      });
    } else {
      this.errorFlag = true;
    }
  }

}
