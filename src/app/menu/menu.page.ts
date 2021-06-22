import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  constructor(private menu: MenuController,private navController: NavController,private storage: Storage) {}

  ngOnInit() {}

  closeMenu() {
    return this.menu.close();
  }

  logout() {
    this.storage.remove('isUserLoggedIn');
    return this.navController.navigateRoot('login');
  }


  goToSports() {
    this.navController.navigateRoot('menu/sports');
    this.closeMenu();
  }
  goToSettings() {
    this.navController.navigateRoot('menu/settings');
    this.closeMenu();
  }
  goToHome() {
    this.navController.navigateRoot('menu/home');
    this.closeMenu();
  }
}
