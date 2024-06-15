import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css'],
})
export class AccesoriosComponent {
  accesoriosProducts = [
    {
      name: 'Apple Pencil (2nd Generation)',
      description: 'The perfect companion for your iPad.',
      price: 129.99,
      image: 'assets/img2.png',
    },
    {
      name: 'Microsoft Surface Pro 8',
      description: 'La Surface más potente hasta el momento.',
      price: 1099.99,
      image: 'assets/img7.png',
    },

    {
      name: 'Bose Noise Cancelling Headphones 700',
      description: 'Escuche el mundo en sus propios términos.',
      price: 379.99,
      image: 'assets/img3.png',
    },
    {
      name: 'Apple Pencil (2nd Generation)',
      description: 'The perfect companion for your iPad.',
      price: 129.99,
      image: 'assets/img2.png',
    },
    {
      name: 'Apple Pencil (2nd Generation)',
      description: 'The perfect companion for your iPad.',
      price: 129.99,
      image: 'assets/img2.png',
    },
    {
      name: 'Bose Noise Cancelling Headphones 700',
      description: 'Escuche el mundo en sus propios términos.',
      price: 379.99,
      image: 'assets/img3.png',
    },
    {
      name: 'Bose Noise Cancelling Headphones 700',
      description: 'Escuche el mundo en sus propios términos.',
      price: 379.99,
      image: 'assets/img3.png',
    },
    {
      name: 'Microsoft Surface Pro 8',
      description: 'La Surface más potente hasta el momento.',
      price: 1099.99,
      image: 'assets/img7.png',
    },
    {
      name: 'Apple Pencil (2nd Generation)',
      description: 'The perfect companion for your iPad.',
      price: 129.99,
      image: 'assets/img2.png',
    },
    {
      name: 'Bose Noise Cancelling Headphones 700',
      description: 'Escuche el mundo en sus propios términos.',
      price: 379.99,
      image: 'assets/img3.png',
    },
    {
      name: 'Microsoft Surface Pro 8',
      description: 'La Surface más potente hasta el momento.',
      price: 1099.99,
      image: 'assets/img7.png',
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
