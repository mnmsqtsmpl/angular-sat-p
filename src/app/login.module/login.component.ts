import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      function(control: AbstractControl) {
        return control.value[0] !== '@' ? { loginNameIncorrect: true} : null
      }
    ]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });
  public isSubmited: boolean;
  public errMessage: string;
  public message: string;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  signUp(){
    this.isSubmited = true;
    if (!this.loginGroup.valid) return;

    const controls = this.loginGroup.controls;
    const login = controls.name.value;
    const pwd = controls.pwd.value;

    window.localStorage.setItem(login, pwd);

    controls.name.setValue('');
    controls.pwd.setValue('');

    this.isSubmited = false;
    this.message = `You've signed up! You should login!`
  }

  signIn(){
    this.isSubmited = true;
    if (!this.loginGroup.valid) return;

    const controls = this.loginGroup.controls;
    const login = controls.name.value;
    const pwd = controls.pwd.value;

    if (localStorage.getItem(login) !== pwd) return this.errMessage = 'Incorrect pwd';
    localStorage.setItem('currentUser', login)

    this.authService.user = {
      name: login
    }

    this.router.navigateByUrl('/')
  }
}
