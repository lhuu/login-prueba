import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp () {
    console.log(this.user);
    this.auth.signUp(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('t', res['token']);
          this.router.navigate(['/home']);
        },
        err => console.log(err)
      )
  }

}
