import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @ViewChild('form', { static: true })
  form: NgForm;
  user: User = new User();
  userAlreadyExists = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit() {
    if (this.form.valid) {
      if (await this.authService.createUser(this.user)) {
        this.router.navigate(['/login']);
      }
    }
  }

  async checkEmailIfExists(event) {
    const exists = await this.authService.checkExistingUsername(
      this.user.email
    );
    if (exists) {
      this.form.form.controls['email'].setErrors({ incorrect: exists });
    } else {
      this.form.form.controls['email'].setErrors(null);
    }
  }
}
