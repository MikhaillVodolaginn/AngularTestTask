import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({})

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    localStorage.clear();
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)])
    })
  }

  submit(): void {
    this.authService.login(this.loginForm.value).subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['companies']);
      }
      else {
        alert('Неверный логин или пароль');
      }
    })
  }
}
