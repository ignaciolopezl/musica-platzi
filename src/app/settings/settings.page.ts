import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  userImage = 'assets/img/user.jpg';
  photo: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  async takePhoto() {

    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,

    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(

      image && image.dataUrl
    );
  }
}
