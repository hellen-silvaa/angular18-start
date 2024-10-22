import { Component, signal } from '@angular/core';

import { FooterModule } from '../footer/footer.module';
import { CommonModule } from '@angular/common';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

// classe do angular que representa o componente Home
export class HomeComponent {
  name = signal("Hellen"); //atributo name que será usado no template
  imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKcTkhF9hEJ-5APw0CLMYc6qqco4hEAA76AQ&s=10";
  cont = 0; //atributo cont que será usado no template

lista = ["Hellen", "João", "Maria", "José"]; //atributo lista que será usado no template




  value = false; //atributo value que será usado no template 
  // constructor() { 
  //   setInterval(() => {
  //     this.cont +=1;
  //   }, 1000)
  // }
  //atributo imgUrl que será usado no template

  //definição de um método chamado teste
  teste(){

    this.cont += 1;
  };



    constructor(private service: HelloWorldService) { 
      this.service.getHelloWorld().subscribe(
        {
          next: (data) => {
          console.log(data)
    },
    error: (error) => {
      console.log(error);
    },
    complete: () => {
      console.log('complete')
    }}
      )
    }}
    
  



