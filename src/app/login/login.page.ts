import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators,} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm: FormGroup;

  validations_messages = {
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'email', message: 'Ojo! Este no es un email valido' },
    ],
    password: [
      { type: 'required', message: 'El password es requerido' },
      { type: 'minlength', message: 'Minimo 5 letras para el password' },
    ],
  };

  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder,private authService: AuthService,private navController: NavController,private storage: Storage) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([Validators.email, Validators.required])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
    });
  }

  loginUser(credentials) {
    this.storage.create();
    this.authService
      .loginUser(credentials)
      .then((res) => {
        this.errorMessage = '';
        this.storage.set('isUserLoggedIn', true);
        this.navController.navigateForward('/menu/home');
      })
      .catch((err) => {
        this.errorMessage = err;
      });
  }

  goToRegister() {
    return this.navController.navigateForward('/register');
  }

  ngOnInit() {}
}
