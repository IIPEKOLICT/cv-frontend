import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormModel } from '../shared/enums';
import { TOKEN_KEY } from '../shared/constants';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  isAuth = false;

  private subscription: Subscription | undefined;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    if (localStorage.getItem(TOKEN_KEY)) {
      this.authService.auth();
    }

    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
    });

    this.subscription = this.authService
      .getIsAuthStream()
      .subscribe((isAuth: boolean) => {
        this.isAuth = isAuth;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  get loginControl(): AbstractControl | null {
    return this.form.get(FormModel.Login);
  }

  get passwordControl(): AbstractControl | null {
    return this.form.get(FormModel.Password);
  }

  submitHandler() {
    this.authService.login(this.loginControl?.value, this.passwordControl?.value);
    this.form.reset();
  }
}
