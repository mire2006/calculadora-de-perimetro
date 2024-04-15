import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, IonicModule],
})

export class CirculoComponent  implements OnInit {

  radio: number = 0;
  perimetro?: number; 

  constructor() {}

  ngOnInit() {}

  calcularPerimetro() {
    this.perimetro = 2 * Math.PI * this.radio;
  }
}
