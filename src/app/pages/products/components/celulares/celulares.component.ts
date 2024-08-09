import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css'],
})
export class CelularesComponent {
  phoneProducts: any[] = [];
  constructor(
    private cartService: CartService,
    private categoriaService: ServicioService
  ) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (data: Categoria[]) => {
        const phoneCategory = data.find(
          (cat) => cat.nombrecategoria.toLowerCase() === 'telefonos'
        );
        if (phoneCategory) {
          this.phoneProducts = phoneCategory.productos;

          const images = [
            'assets/img6.png',
            'assets/img1.png',
          ];

          this.phoneProducts.forEach((product, index) => {
            product.imagen = images[index % images.length];
          });

          console.log('productos con imágenes:', this.phoneProducts);
        }
      },
      (error) => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
