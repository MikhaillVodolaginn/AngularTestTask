import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Users = [
    {email: 'abc@mail.ru', password: 'dsikLG66'},
    {email: 'admin@mail.com', password: 'aRT8bK2j'},
    {email: 'user@mail.ru', password: 'fjGHs435'},
  ]

  constructor() {
  }

  getToken(): string | null {
    return localStorage.getItem('user');
  }

  setToken(token: string): void {
    localStorage.setItem('user', token);
  }

  isLoggedIn() {
    return this.getToken() != null;
  }

  login(form: {email: string, password: string}): Observable<boolean> {
    for (let user of this.Users) {
      if (user.email === form.email && user.password === form.password) {
        this.setToken('kegjJSFkwi4t98qoS');
        return of(true);
      }
    }
    return of(false);
  }
}
