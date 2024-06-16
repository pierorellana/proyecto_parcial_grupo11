import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-computadoras',
  templateUrl: './computadoras.component.html',
  styleUrls: ['./computadoras.component.css'],
})
export class ComputadorasComponent {
  computerProducts = [
    {
      name: 'MacBook Pro 16',
      description: 'El portátil profesional definitivo.',
      price: 2499.99,
      image: 'assets/mac_1.png',
    },
    {
      name: 'Dell XPS 13',
      description: 'El portátil más pequeño de 13 pulgadas.',
      price: 1499.99,
      image: 'assets/img4.png',
    },
    {
      name: 'Microsoft Surface Pro 8',
      description: 'La Surface más potente hasta el momento.',
      price: 1099.99,
      image: 'assets/img7.png',
    },
    {
      name: 'MacBook Pro 16',
      description: 'El portátil profesional definitivo.',
      price: 2499.99,
      image: 'assets/mac_1.png',
    },
    {
      name: 'Dell XPS 13',
      description: 'El portátil más pequeño de 13 pulgadas.',
      price: 1499.99,
      image: 'assets/img4.png',
    },
    {
      name: 'Microsoft Surface Pro 8',
      description: 'La Surface más potente hasta el momento.',
      price: 1099.99,
      image: 'assets/img7.png',
    },
    {
      name: 'MacBook Pro 16',
      description: 'El portátil profesional definitivo.',
      price: 2499.99,
      image: 'assets/mac_1.png',
    },
    {
      name: 'Dell XPS 13',
      description: 'El portátil más pequeño de 13 pulgadas.',
      price: 1499.99,
      image: 'assets/img4.png',
    },
    {
      name: 'Microsoft Surface Pro 8',
      description: 'La Surface más potente hasta el momento.',
      price: 1099.99,
      image: 'assets/img7.png',
    },
    {
      name: 'MacBook Pro 16',
      description: 'El portátil profesional definitivo.',
      price: 2499.99,
      image: 'assets/mac_1.png',
    },
    {
      name: 'Dell XPS 13',
      description: 'El portátil más pequeño de 13 pulgadas.',
      price: 1499.99,
      image: 'assets/img4.png',
    },
    {
      name: 'Microsoft Surface Pro 8',
      description: 'La Surface más potente hasta el momento.',
      price: 1099.99,
      image: 'assets/img7.png',
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart();
  }
}
