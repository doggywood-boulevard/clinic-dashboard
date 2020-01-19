import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn = false;
  constructor() { }

  public authenticate(email, password) { 

    if (email === "admin" && password === "password") {
      console.log('before ' + this.isEmpLoggedIn());
      sessionStorage.setItem("authEmployee", email);
      console.log('after ' + this.isEmpLoggedIn());
      return true;

    } else if (email === "user" && password === "password") {
      console.log('before ' + this.isCustLoggedIn());
      sessionStorage.setItem("authUser", email);
      console.log('before ' + this.isCustLoggedIn());
      return true;
    }
    return false;
  }

  public isCustLoggedIn() {
    let user = sessionStorage.getItem('authUser')
    return !(user === null) // i.e. true
  }
  public isEmpLoggedIn() {
    let user = sessionStorage.getItem('authEmployee')
    return !(user === null) // i.e. true
  }

  logout() {
    sessionStorage.removeItem('authUser');

    sessionStorage.removeItem('authEmployee')
  }

}
