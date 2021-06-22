import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
  constructor(private router: Router, private storage: Storage) {}



  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400,
  };

  finish() {
    this.storage.create();
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/login');
  }

  slides = [
    {
      title: 'Escucha tu musica',
      subTitle: 'EN CUALQUIER LUGAR',
      description:
        'Los mejores albumes, las mejores cacniones. Escucha y comparte en cualquier momento, a todas horas',
      icon: 'play',
    },
    {
      title: 'Disfruta de nuestro reproductor',
      subTitle: 'DE VIDEOS INCREIBLES',
      description:
        'Entra al modo video de nuestro reproductor y obten acceso a clips, documentales, y making offs increibles de tu artista favorito.',
      icon: 'videocam',
    },
    {
      title: 'Accede al exclusivo',
      subTitle: 'MODO DEPORTE',
      description:
        'Crea una playlist basada en tu actividad fisica. Ten reportes y acceso a lo que necesites, integrando con GPS!',
      icon: 'bicycle',
    },
  ];
}
