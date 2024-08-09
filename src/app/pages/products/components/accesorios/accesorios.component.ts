import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-accesorios',
  templateUrl: './accesorios.component.html',
  styleUrls: ['./accesorios.component.css'],
})
export class AccesoriosComponent {

   accesoriesProducts: any[] = [];
  constructor(
    private cartService: CartService,
    private categoriaService: ServicioService
  ) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (data: Categoria[]) => {
        const accesoriesCategory = data.find(
          (cat) => cat.nombrecategoria.toLowerCase() === 'accesorios'
        );
        if (accesoriesCategory) {
          this.accesoriesProducts = accesoriesCategory.productos;

          const images = [
            'assets/img2.png',
            'assets/img7.png',
            'assets/img3.png'
          ];

          this.accesoriesProducts.forEach((product, index) => {
            product.imagen = images[index % images.length];
          });

          console.log('productos con imágenes:', this.accesoriesProducts);
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
