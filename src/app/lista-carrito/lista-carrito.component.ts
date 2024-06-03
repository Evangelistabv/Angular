import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-carrito.component.html',
  styleUrl: './lista-carrito.component.css'
})

export class ListaCarritoComponent {
  @Input() carrito: any[] = [];

  calcularTotal(): number {
    return this.carrito.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
