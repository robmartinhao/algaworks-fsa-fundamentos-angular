import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = '';
  
  adicionar() {
    const numero = Math.round(Math.random() * 100);
    this.nome = 'João' + numero;

    console.log(`Adicionando ${this.nome}`);
  }

  alterarNome(event: any) {
    console.log(event);
    this.nome = event.target.value;
  }

  
}
