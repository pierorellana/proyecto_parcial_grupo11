import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css'],
})
export class CelularesComponent {
  phoneProducts = [
    {
      name: 'iPhone 15 Pro Max',
      description: 'El iPhone más avanzado hasta el momento.',
      price: 1099.99,
      image: 'assets/img6.png',
    },

    {
      name: 'Samsung Galaxy S23 Ultra',
      description: 'La mejor experiencia en teléfonos inteligentes.',
      price: 1199.99,
      image: 'assets/img1.png',
    },
    {
      name: 'Samsung Galaxy S23 Ultra',
      description: 'La mejor experiencia en teléfonos inteligentes.',
      price: 1199.99,
      image: 'assets/img1.png',
    },
    {
      name: 'Samsung Galaxy S23 Ultra',
      description: 'La mejor experiencia en teléfonos inteligentes.',
      price: 1199.99,
      image: 'assets/img1.png',
    },
    {
      name: 'iPhone 15 Pro Max',
      description: 'El iPhone más avanzado hasta el momento.',
      price: 1099.99,
      image: 'assets/img6.png',
    },
    {
      name: 'iPhone 15 Pro Max',
      description: 'El iPhone más avanzado hasta el momento.',
      price: 1099.99,
      image: 'assets/img6.png',
    },
    {
      name: 'iPhone 15 Pro Max',
      description: 'El iPhone más avanzado hasta el momento.',
      price: 1099.99,
      image: 'assets/img6.png',
    },
    {
      name: 'Samsung Galaxy S23 Ultra',
      description: 'La mejor experiencia en teléfonos inteligentes.',
      price: 1199.99,
      image: 'assets/img1.png',
    },
    {
      name: 'Samsung Galaxy S23 Ultra',
      description: 'La mejor experiencia en teléfonos inteligentes.',
      price: 1199.99,
      image: 'assets/img1.png',
    },
    {
      name: 'iPhone 15 Pro Max',
      description: 'El iPhone más avanzado hasta el momento.',
      price: 1099.99,
      image: 'assets/img6.png',
    },
    {
      name: 'iPhone 15 Pro Max',
      description: 'El iPhone más avanzado hasta el momento.',
      price: 1099.99,
      image: 'assets/img6.png',
    },
    {
      name: 'Samsung Galaxy S23 Ultra',
      description: 'La mejor experiencia en teléfonos inteligentes.',
      price: 1199.99,
      image: 'assets/img1.png',
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart();
  }
}
