import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root', //nome da tag que será usada no index.html
  standalone: true, //comportamento de um componente independente (não precisa de um pai)
  imports: [RouterOutlet, HomeComponent], // importa o RouterOutlet para ser usado no template
  templateUrl: './app.component.html', //caminho do arquivo de template
  styleUrl: './app.component.scss' //caminho do arquivo de estilos
})
export class AppComponent {
  title = 'primeiros-passos-angular'; 
}
