import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListaCarritoComponent } from '../lista-carrito/lista-carrito.component';


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule,ListaCarritoComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {
  products: any[] = [];
  error: string = '';
  carrito: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>('https://django-rest-framework-p04m.onrender.com/api/products/').subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        this.error = 'Error fetching products: ' + error.message; // Guarda el mensaje de error
      }
    );
  }  

  addToCart(product: any) {
    const index = this.carrito.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.carrito[index].quantity++;
    } else {
      this.carrito.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(product: any) {
    const index = this.carrito.findIndex(item => item.id === product.id);
    if (index !== -1) {
      if (this.carrito[index].quantity > 1) {
        this.carrito[index].quantity--;
      } else {
        this.carrito.splice(index, 1);
      }
    }
  }}