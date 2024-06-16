import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productosDestacados: any[] = [
    { 
      id: 1,
      nombre: 'Laptop Ultrabook',
      imagen: 'assets/images/laptop.jpg',
      descripcion: 'Laptop ultrabook de última generación con pantalla táctil y procesador rápido.',
      precio: 100,
      disponible: true
    },
    // Agrega más productos destacados aquí...
  ];

  constructor() { }
  
  private productosSubject = new BehaviorSubject<any[]>(this.productosDestacados);

  getProductosDestacados() {
    return this.productosSubject.asObservable();
  }

  // Método para actualizar los productos destacados (opcional, si se añaden o modifican productos)
  actualizarProductos(productos: any[]) {
    this.productosDestacados = productos;
    this.productosSubject.next(this.productosDestacados);
  }
  getProductoById(id: number) {
    return this.productosDestacados.find(producto => producto.id === id);
  }
}
