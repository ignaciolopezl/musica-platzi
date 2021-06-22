import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storage: Storage) {}

  async loginUser(credentials) {

    const user = await this.storage.get('user');

    return new Promise((accept, reject) => {
      if (

        (credentials.email === user.email,
        credentials.password === user.password)
      ) {
        accept('Login Correcto');
      } else {
        reject('Login Incorrecto');
      }
    });
  }
  
  registerUser(userData) {
    this.storage.create();


    userData.password = btoa(userData.password);
    return this.storage.set('user', userData);
  }
}
