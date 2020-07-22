import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  error: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn () {
    console.log(this.user);
    this.auth.signIn(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('t', res['token']);
          this.router.navigate(['/home']);
        },
        err => {
          console.log(err);
          this.error = true;
        }
      )
  }

}
