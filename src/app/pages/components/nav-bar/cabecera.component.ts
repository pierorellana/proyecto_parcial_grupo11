import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  cartItemCount: number = 0;

  constructor(private router: Router, private cartService: CartService) { }

  logout() {
    this.router.navigate(['/login']);
  }

  computer() {
    this.router.navigate(['/products/computadoras']);
  }

  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }

}
