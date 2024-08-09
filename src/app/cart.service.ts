import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Producto[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  cartItemCount$ = this.cartItemCount.asObservable();

  addToCart(product: Producto) { 
    this.cart.push(product);
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
}
