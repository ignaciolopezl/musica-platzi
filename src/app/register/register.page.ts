import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;
  validations_messages = {
    email: [
      { type: 'required', message: 'El email es requerido' },
      { type: 'email', message: 'Ojo! Este no es un email valido' },
    ],
    password: [
      { type: 'required', message: 'El password es requerido' },
      { type: 'minlength', message: 'Minimo 5 letras para el password' },
    ],
    nombre: [{ type: 'required', message: 'El nombre es requerido' }],
    apellido: [{ type: 'required', message: 'El Apellido es requerido' }],
  };

  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder,private authService: AuthService,private navController: NavController,private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([Validators.email, Validators.required])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
    });
  }

  register(userData) {

    this.authService
      .registerUser(userData)
      .then((res) => {
        this.errorMessage = '';
        this.navController.navigateForward('/login');
      })
      .catch((err) => {
        this.errorMessage = err;
      });
  }

  goToLogin() {
    
    return this.navController.navigateBack('/login');
  }
}
