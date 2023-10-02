import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.scss']
})
export class DetailProjectComponent implements OnInit{
  proyecto: any;

  ngOnInit(){
    this.recibirParametro();
  }

  recibirParametro(){
    var objetoJSONRecuperado = localStorage.getItem("miObjeto");

    if(objetoJSONRecuperado != null){
      var objetoRecuperado = JSON.parse(objetoJSONRecuperado);
      this.proyecto = objetoRecuperado;
    }
  }
}
