import { Component, OnDestroy, OnInit } from '@angular/core';
import { IRoute } from '../../shared/interfaces';
import { authRoutes, publicRoutes } from '../../shared/routes';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { TOKEN_KEY } from '../../shared/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  routes: IRoute[] = publicRoutes;
  private subscription: Subscription | undefined;

  constructor(public readonly authService: AuthService) {}

  ngOnInit(): void {
    this.authService.onInit();
    this.subscription = this.authService
      .getIsAuthStream()
      .subscribe((isAuth: boolean) => {
        this.routes = isAuth ? authRoutes : publicRoutes;
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.authService.onDestroy();
  }
}
