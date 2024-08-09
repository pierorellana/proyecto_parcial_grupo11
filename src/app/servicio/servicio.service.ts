import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Producto } from '../interfaces/producto.interface';
import { Usuario } from '../interfaces/login.interface';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrlCategoria = 'https://localhost:7239/api/Categoria';
  private apiUrlProducto = 'https://localhost:7239/api/Producto';
  private apiUrlUsuario = 'https://localhost:7239/api/Usuario';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrlCategoria);
  }

  addProduct(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrlProducto, producto);
  }

  editProduct(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.apiUrlProducto, producto);
  }

  deleteProduct(productoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlProducto}/${productoId}`);
  }

  authenticate(nombreUsuario: string, contraseña: string): Observable<Usuario | null> {
    return this.http.get<Usuario[]>(this.apiUrlUsuario).pipe(
      catchError(() => of([])), 
      map(users => users.find(user => user.nombreUsuario === nombreUsuario && user.contraseña === contraseña) || null)
    );
  }
}
