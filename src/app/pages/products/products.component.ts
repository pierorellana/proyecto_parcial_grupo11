import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  popularProducts = [
    {
      name: 'iPhone 15 Pro Max',
      description: 'El iPhone más avanzado hasta el momento.',
      price: 1099.99,
      image: "assets/img6.png"
    },
    {
      name: 'MacBook Pro 16',
      description: 'El portátil profesional definitivo.',
      price: 2499.99,
      image: "assets/mac_1.png"
    },
    {
      name: 'iPad Pro 12.9',
      description: 'La mejor experiencia iPad.',
      price: 1099.99,
      image: "assets/img5.png"
    },
    {
      name: 'Samsung Galaxy S23 Ultra',
      description: 'La mejor experiencia en teléfonos inteligentes.',
      price: 1199.99,
      image: "assets/img1.png"
    },
    {
      name: 'Apple Pencil (2nd Generation)',
      description: 'The perfect companion for your iPad.',
      price: 129.99,
      image: "assets/img2.png"
    },
    {
      name: 'Dell XPS 13',
      description: 'El portátil más pequeño de 13 pulgadas.',
      price: 1499.99,
      image: "assets/img4.png"
    },
    {
      name: 'Microsoft Surface Pro 8',
      description: 'La Surface más potente hasta el momento.',
      price: 1099.99,
      image: "assets/img7.png"
    },
    {
      name: 'Bose Noise Cancelling Headphones 700',
      description: 'Escuche el mundo en sus propios términos.',
      price: 379.99,
      image: "assets/img3.png"
    }
  ];

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.addToCart();
  }
}
