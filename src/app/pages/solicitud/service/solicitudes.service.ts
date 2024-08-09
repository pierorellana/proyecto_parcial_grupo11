import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  private apiUrl = `${environment.endpoint}api/SolicitudPedido`;

  private ordenesSubject = new BehaviorSubject<any[]>([]);
  ordenes$ = this.ordenesSubject.asObservable();

  private solicitudesSubject = new BehaviorSubject<any[]>([]);
  solicitudes$ = this.solicitudesSubject.asObservable();
  productosService: any;

  constructor(private http: HttpClient) {}

  // Obtener todas las solicitudes
  ObtenerTodasLasSolicitudes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener una solicitud por ID
  ObtenerSolicitudPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Agregar una nueva solicitud
  CrearSolicitud(solicitud: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, solicitud);
  }

  // Actualizar una solicitud existente
  EditarSolicitud(id: number, solicitud: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, solicitud);
  }

  // Eliminar una solicitud
  EliminarSolicitud(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Función para agregar una orden localmente y emitir el nuevo estado
  agregarOrdenCompra(orden: any) {
    const ordenes = this.ordenesSubject.getValue();
    ordenes.push(orden);
    this.ordenesSubject.next(ordenes);
  }

  // Función para obtener una orden por ID desde el estado local
  obtenerOrdenPorId(id: number) {
    const ordenes = this.ordenesSubject.getValue();
    return ordenes.find(orden => orden.id === id);
  }

  // Función para editar una orden en el estado local
  editarOrden(id: number, nuevaOrden: any) {
    const ordenes = this.ordenesSubject.getValue();
    const index = ordenes.findIndex(orden => orden.id === id);
    if (index !== -1) {
      ordenes[index] = nuevaOrden;
      this.ordenesSubject.next(ordenes);
    }
  }

  // Función para eliminar una orden en el estado local
  eliminarOrden(id: number) {
    const ordenes = this.ordenesSubject.getValue();
    const updatedOrdenes = ordenes.filter(orden => orden.id !== id);
    this.ordenesSubject.next(updatedOrdenes);
  }
  // Consultar solicitudes por nombre de cliente
  ConsultarPorCliente(nombreCliente: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cliente/${nombreCliente}`);
  }

  // Consultar solicitudes por ciudad
  ConsultarPorCiudad(ciudad: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ciudad/${ciudad}`);
  }
  ConsultarPorProductoNombre(nombreProducto: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/producto/nombre/${nombreProducto}`);
  }
}
