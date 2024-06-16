import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
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

  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  openMenu(menu: MatMenuTrigger) {
    menu.openMenu();
  }

  closeMenu(menu: MatMenuTrigger) {
    menu.closeMenu();
  }

  logout() {
    this.router.navigate(['/login']);
  }

  //Comentario de prueba

  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });
  }

}
