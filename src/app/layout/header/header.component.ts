import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  mostrarMenu = false;

  constructor(public route: ActivatedRoute, private el: ElementRef) { }

  ngOnInit() {
    // Agregar un escuchador de eventos al elemento document
    document.addEventListener('click', this.cerrarMenuSiClicFuera.bind(this));
  }

  toggleMenu(){
    this.mostrarMenu = !this.mostrarMenu;
  }

  cerrarMenu() {
    this.mostrarMenu = false;
  }

  cerrarMenuSiClicFuera(event: MouseEvent) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.cerrarMenu();
    }
  }
}
