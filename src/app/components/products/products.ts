import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  products = [
    { id: 101, name: "Wireless Mouse", price: 25.99, category: "Electronics", stock: 15 },
    { id: 102, name: "Mechanical Keyboard", price: 89.99, category: "Electronics", stock: 5 },
    { id: 103, name: "Yoga Mat", price: 19.50, category: "Fitness", stock: 20 },
    { id: 104, name: "Water Bottle", price: 12.00, category: "Fitness", stock: 50 }
  ];

}
