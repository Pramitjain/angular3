import { Component } from '@angular/core';
import { Products } from '../products/products';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-body',
  imports: [Products, RouterOutlet],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
