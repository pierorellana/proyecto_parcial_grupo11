import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../pages/client/client.interface';
import { Supplier } from '../pages/suppliers/supplier.interface';
import { Usuario } from '../pages/register/usuarios.interface';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = 'https://localhost:7239/api/Cliente'; 

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  agregarCliente(cliente: Cliente): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, cliente);
  }

//Proveedores
private apiUrl2 = 'https://localhost:7239/api/Proveedor'; 


  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.apiUrl2);
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.apiUrl2, supplier);
  }

  updateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(`${this.apiUrl2}/${supplier.proveedorId}`, supplier);
  }

  deleteSupplier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl2}/${id}`);
  }

  //Usuario registro
  private apiUrlUsuario = 'https://localhost:7239/api/Usuario'; 
  
  agregarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.apiUrlUsuario, usuario);
  }

  //Soporte
  agregarSolicitudSoporte(solicitudSoporte: any): Observable<any> {
    return this.http.post<any>('https://localhost:7239/api/SolicitudSoporte', solicitudSoporte);
  }
}

