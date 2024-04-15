import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonicModule],
})

export class TrianguloComponent  implements OnInit {
  ladoA?: number; 
  ladoB?: number;
  ladoC?: number; 
  perimetro?: number; 

  constructor() {}

  ngOnInit() {}

  calcularPerimetro() {

    if (this.ladoA !== undefined && this.ladoB !== undefined && this.ladoC !== undefined) {
      this.perimetro = this.ladoA + this.ladoB + this.ladoC;
    }
     
    else {
      console.error('Todos los lados deben estar definidos para calcular el perímetro');
    }
  }
}
