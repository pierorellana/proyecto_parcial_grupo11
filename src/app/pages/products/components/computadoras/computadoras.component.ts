import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-computadoras',
  templateUrl: './computadoras.component.html',
  styleUrls: ['./computadoras.component.css'],
})
export class ComputadorasComponent implements OnInit {
  computerProducts: any[] = [];
  isLoading = true;  // Estado de carga

  constructor(
    private cartService: CartService,
    private categoriaService: ServicioService
  ) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (data: Categoria[]) => {
        const computerCategory = data.find(
          (cat) => cat.nombrecategoria.toLowerCase() === 'computadoras'
        );
        if (computerCategory) {
          this.computerProducts = computerCategory.productos;

          const images = [
            'assets/mac_1.png',
            'assets/img4.png',
            'assets/img7.png',
          ];

          this.computerProducts.forEach((product, index) => {
            product.imagen = images[index % images.length];
          });

          console.log('productos con imágenes:', this.computerProducts);
        }
        this.isLoading = false; // Desactivar indicador de carga
      },
      (error) => {
        console.error('Error al obtener las categorías:', error);
        this.isLoading = false; // Desactivar indicador de carga en caso de error
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
