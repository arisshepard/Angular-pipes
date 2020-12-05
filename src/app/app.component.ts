import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = 'Capitán América';
  nombre2 = 'MaRÍa lÓPEz dOmÍngUEz';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.235;
  salario = 1234.5;
  fecha: Date = new Date();
  activar = true;

  idioma = 'fr';
  videoURL = 'https://www.youtube.com/embed/8YCcwEz1Y-0';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llegó la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '20',
    },
  };
}
