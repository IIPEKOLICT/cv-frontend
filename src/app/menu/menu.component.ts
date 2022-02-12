import { Component, OnDestroy, OnInit } from '@angular/core';
import { IRoute } from '../shared/interfaces';
import { authRoutes } from '../shared/routes';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  routes: IRoute[] = [];
  subscription: Subscription | undefined;

  constructor(public readonly authService: AuthService) {}

  ngOnInit(): void {
    this.subscription = this.authService
      .getIsAuthStream()
      .subscribe((isAuth: boolean) => {
        this.routes = isAuth ? this.routes.concat(authRoutes) : [];
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
