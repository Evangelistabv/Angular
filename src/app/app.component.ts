import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './store/store.component';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AppComponent,
    StoreComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListaCarritoComponent ,
    HttpClientModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tienda';
}
