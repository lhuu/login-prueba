import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cliente';

  logging: boolean ;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit () {
    this.logging = this.authService.In();
    // console.log(this.logging);
  }

  In() {
    this.logging = this.authService.In();
    // console.log(this.logging);
    return this.logging;
  }

  Out() {
    this.authService.Out();
    return !this.logging;
  }
}
