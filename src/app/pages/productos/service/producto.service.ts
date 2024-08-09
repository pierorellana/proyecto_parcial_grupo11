import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = `${environment.endpoint}api/Producto`;

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  ListarProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un producto por ID
  ObtenerProductoPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo producto
  CrearProducto(producto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, producto);
  }

  // Editar un producto existente
  EditarProducto(producto: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, producto);
  }

  // Eliminar un producto
  EliminarProducto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Consultar productos por nombre
  ConsultarPorNombre(nombre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/nombre/${nombre}`);
  }

  // Consultar productos por categoría
  ConsultarPorCategoriaNombre(nombreCategoria: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categoria/nombre/${nombreCategoria}`);
  }

  // Consultar productos por precio
  ConsultarPorPrecio(precio: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/precio/${precio}`);
  }

  // Consultar productos por stock
  ConsultarPorStock(stock: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/stock/${stock}`);
  }
}
