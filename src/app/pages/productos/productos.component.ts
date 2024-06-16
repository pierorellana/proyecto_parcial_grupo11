import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../productos/service/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productosDestacados: any[] = [
    { 
      
    },

  ];
  categorias: string[] = ['Laptops', 'Tablets', 'Smartphones'];
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductosDestacados().subscribe(productos => {
      this.productosDestacados = productos;
    });
  }

}
