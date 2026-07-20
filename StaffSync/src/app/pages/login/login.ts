import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginUser: any = {
    username: '',
    password: ''
  }

  url: any = "https://6a5bf4d864f700df5bd7a2a5.mockapi.io/LoginUser";

  //Creating the http client to send the login request to the server
  http = inject(HttpClient);
  route = inject(Router);

  onLogin() {
    debugger;
    console.log("Login button clicked");
    const loginData = {
      message: "Login Successful",
      result: true,
      data: [this.loginUser],
      id: ""
    }
    this.http.post(this.url, loginData).subscribe((res: any) => {
      localStorage.setItem('userData', JSON.stringify(this.loginUser));
      alert("Login Successful");
      this.route.navigate(['/layout/dashboard']);
    })
  }
}
