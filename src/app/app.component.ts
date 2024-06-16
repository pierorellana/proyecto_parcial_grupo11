import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Proyecto_Parcial';

  constructor(private router: Router, private route: ActivatedRoute) {}

  isLoginPage(): boolean {
    return this.router.url.includes('/login');
  }

  isRegisterPage(): boolean {
    return this.router.url.includes('/register');
  }
}
