import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router
  ){

  }
  proyectos = [
    {
      id: 1,
      titulo: 'Título del Proyecto 1',
      descripcion: 'Descripción breve del Proyecto 1. Aquí puedes agregar información sobre el proyecto y sus características destacadas.',
      imagenSrc: 'https://static.wixstatic.com/media/f61af8_31cf11b7f9c44adbadca00cc2a52a30c~mv2_d_5567_3716_s_4_2.png/v1/fill/w_603,h_450,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_31cf11b7f9c44adbadca00cc2a52a30c~mv2_d_5567_3716_s_4_2.png'
    },
    {
      id: 2,
      titulo: 'Título del Proyecto 2',
      descripcion: 'Descripción breve del Proyecto 2. Aquí puedes agregar información sobre el proyecto y sus características destacadas.',
      imagenSrc: 'https://static.wixstatic.com/media/f61af8_59b58c2825844fd4ac154229351abf87~mv2_d_4835_3223_s_4_2.jpg/v1/fill/w_603,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_59b58c2825844fd4ac154229351abf87~mv2_d_4835_3223_s_4_2.jpg'
    }
  ];

  enviarObjeto(obj: any) {
    this.router.navigate(['/proyectos/'+ obj.titulo]);
    var objetoJSON = JSON.stringify(obj);
    localStorage.setItem("miObjeto", objetoJSON);
  }
}
