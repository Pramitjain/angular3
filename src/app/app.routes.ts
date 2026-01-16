import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Notes } from './components/notes/notes';
import { CarDrive } from './components/car-drive/car-drive';

export const routes: Routes = [
    { path: 'Products', component: Products },
    { path: 'Notes', component: Notes },
    { path: 'CarDrive', component: CarDrive },

];
