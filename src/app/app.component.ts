import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Robson';
  
  adicionar(nome: string) {
    this.nome = nome;
  }
  
}
