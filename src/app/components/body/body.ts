import { Component } from '@angular/core';
import { Products } from '../products/products';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Notes } from '../notes/notes';
import { CarDrive } from '../car-drive/car-drive';


@Component({
  selector: 'app-body',
  imports: [Products, RouterOutlet,Notes, CarDrive],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
