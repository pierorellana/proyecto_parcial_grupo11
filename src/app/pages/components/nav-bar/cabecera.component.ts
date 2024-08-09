import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  cartItemCount: number = 0;
  categorias: Categoria[] = [];

  constructor(
    private router: Router,
    private cartService: CartService,
    private categoriaService: ServicioService
  ) { }

  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });

    // Obtener categorías
    this.categoriaService.getCategorias().subscribe(
      (data: Categoria[]) => {
        this.categorias = data;
        console.log('Categorias:', this.categorias);
      },
      (error) => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }

  getCategoriaNombre(defaultNombre: string): string {
    const categoria = this.categorias.find(cat => cat.nombrecategoria.toLowerCase() === defaultNombre.toLowerCase());
    return categoria ? categoria.nombrecategoria : defaultNombre;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
