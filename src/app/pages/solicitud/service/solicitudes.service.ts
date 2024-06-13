import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  private apiUrl = 'your-api-url';
  private ordenesSubject = new BehaviorSubject<any[]>([]);
  ordenes$ = this.ordenesSubject.asObservable();
  private solicitudesSubject = new BehaviorSubject<any[]>([]);
  solicitudes$ = this.solicitudesSubject.asObservable();

  constructor(private http: HttpClient) {
    
   }

   agregarOrdenCompra(orden: any) {
    // Agrega la orden al array de órdenes y emite el nuevo estado
    const ordenes = this.ordenesSubject.getValue();
    ordenes.push(orden);
    this.ordenesSubject.next(ordenes);
  }

  obtenerOrdenPorId(id: number) {
    const ordenes = this.ordenesSubject.getValue();
    return ordenes[id];
  }

  editarOrden(id: number, nuevaOrden: any) {
    const ordenes = this.ordenesSubject.getValue();
    const index = ordenes.findIndex(orden => orden.id === id);
    if (index !== -1) {
      ordenes[index] = { ...ordenes[index], ...nuevaOrden };
      this.ordenesSubject.next(ordenes);
    }
  }

  eliminarOrden(id: number): Observable<any> {
    // Actualiza el observable localmente
    const ordenes = this.ordenesSubject.getValue();
    console.log('Datos de órdenes antes de eliminar:', ordenes);
    const actualizadas = ordenes.filter(orden => orden.id !== id);
    this.ordenesSubject.next(actualizadas);
    console.log('Datos de órdenes después de eliminar:', actualizadas);
    // También realiza una solicitud HTTP para eliminar la orden en el servidor
    return this.http.delete(`${this.apiUrl}/ordenes/${id}`);
  }

  agregarSolicitud(solicitud: any) {
    const solicitudes = this.solicitudesSubject.getValue();
    solicitudes.push(solicitud);
    this.solicitudesSubject.next(solicitudes);
  }

  obtenerSolicitudPorId(id: number) {
    const solicitudes = this.solicitudesSubject.getValue();
    return solicitudes.find(solicitud => solicitud.id === id);
  }

  private calcularPrecioTotal(productos: any[]): number {
    return productos.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
  }
}