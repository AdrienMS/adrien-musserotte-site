import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { AuthService } from '../../../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public menu: Array<string> = ['parcours', 'compétences', 'projets', 'à propos', 'contact'];
  public isDark = true;
  public isLoading = false;

  // form variables
  public hide = true;
  public errorMessage = '';
  public isLock = true;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.router.navigate(['/admin']);
        }
      }
    );
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    });
  }


  public getErrorMessage() {
    if (this.loginForm.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginForm.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  public onSubmit() {
    if (this.loginForm.get('email').hasError('required')) {
      return;
    }
    this.isLoading = true;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/admin']);
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = error;
      }
    );
  }

}
