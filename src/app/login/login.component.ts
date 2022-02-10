import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { DataReadService } from './data-read.service';
import { AuthService } from '../_services/auth.service';
import { TokenService } from '../_services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  credentials: any;
  isLoggedIn = false;
  isLoginFailed = false;
  username!: string;
  password!: string;
  roles: string[] = [];
  errorMessage: any;
  nextPage = '';
  successMessage: any;
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private authService: AuthService, private tokenStorage: TokenService,
              private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  login(): void{
    if (this.username === this.authService.getUser() && this.password === this.authService.getPassword()){
      this.authService.setStatus(true);
      this.router.navigate(['/employeeList'], { relativeTo: this.route });
      this.tokenStorage.saveUser(this.username);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
    }
    else{
      this.nextPage = '/login';
      alert('username or password Incorrect');
    }
  }
  onSubmit(): void {
    this. credentials = this.loginForm.value;
    this.username = this.credentials.username;
    this.password = this.credentials.password;
    this.login();
  }
}
