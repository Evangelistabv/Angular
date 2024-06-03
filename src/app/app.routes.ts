import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { StoreComponent } from './store/store.component';

export const routes: Routes = [
{ path: '', component: MainComponent}, 
{ path: 'tienda', component: StoreComponent }
];
