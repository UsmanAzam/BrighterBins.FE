import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('form', { static: true })
  form: NgForm;
  user: User = new User();
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit() {
    if (this.form.valid) {
      if (await this.authService.signIn(this.user)) {
        this.form.form.controls['email'].setErrors(null);
        this.router.navigate(['/home']);
      } else {
        this.form.form.controls['email'].setErrors({ incorrect: true });
      }
    }
  }
}
