import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../solicitud/service/solicitudes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductosService } from '../productos/service/producto.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  ordenes: any[] = [];
  ordenesFiltradas: any[] = [];
  displayedColumns: string[] = ['id', 'cliente', 'telefonoCliente', 'productos', 'precioTotal', 'detalles', 'acciones'];
  filterValue: string = '';

  constructor(
    private solicitudesService: SolicitudesService, 
    private productosService: ProductosService,
    private router: Router, 
    private route: ActivatedRoute, 
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.solicitudesService.ObtenerTodasLasSolicitudes().subscribe((data: any[]) => {
      this.ordenes = data;
      this.ordenesFiltradas = data;
      console.log('Datos de órdenes recibidos:', this.ordenes); 
    });
  }

  aplicarFiltro() {
    // Verifica si el valor del filtro no está vacío
    if (this.filterValue.trim()) {
      // Elimina los espacios y convierte el valor a minúsculas para la comparación
      const filter = this.filterValue.trim().toLowerCase();
  
      // Busca por ID (si es un número)
      if (!isNaN(Number(filter))) {
        this.solicitudesService.ObtenerSolicitudPorId(Number(filter)).subscribe(
          (data) => {
            this.ordenesFiltradas = [data];
            console.log('Resultados de la búsqueda por ID:', data);
          },
          (error) => {
            console.error('Error al buscar por ID:', error);
            this.snackBar.open('No se encontraron resultados para el ID proporcionado.', 'Cerrar', { duration: 3000 });
          }
        );
        return;  // Si encuentra por ID, no busca por nombre
      }
      // Busca por cliente
    this.solicitudesService.ConsultarPorCliente(this.filterValue.trim()).subscribe(
      (data) => {
        this.ordenesFiltradas = data;
        console.log('Resultados de la búsqueda por cliente:', data);
      },
      (error) => {
        console.error('Error al buscar por cliente:', error);
        this.snackBar.open('No se encontraron resultados para el cliente.', 'Cerrar', { duration: 3000 });
      }
    );
  
      // Busca por nombre de producto usando el ProductosService
      this.productosService.ConsultarPorNombre(filter).subscribe(
        (productos) => {
          // Filtra las órdenes en base a los productos encontrados
          this.ordenesFiltradas = this.ordenes.filter(orden =>
            productos.some(producto => producto.nombre.toLowerCase() === orden.producto.nombre.toLowerCase())
          );
          console.log('Resultados de la búsqueda por nombre de producto:', this.ordenesFiltradas);
        },
        (error) => {
          console.error('Error al buscar por nombre de producto:', error);
          this.snackBar.open('No se encontraron resultados para el producto.', 'Cerrar', { duration: 3000 });
        }
      );
      return;  // Si encuentra por nombre de producto, no busca por cliente
    }
  
    
  }
  
  limpiarFiltro() {
    this.filterValue = '';
    this.ordenesFiltradas = this.ordenes; // Muestra todas las órdenes
  }
  editarSolicitud(id: number) {
    this.router.navigate(['editar', id]);
  }
  

  
  borrarOrden(id: number) {
    if(confirm('¿Está seguro de que desea eliminar esta orden?')) {
      this.solicitudesService.EliminarSolicitud(id).subscribe(() => {
        this.snackBar.open('Orden eliminada con éxito', 'Cerrar', {
          duration: 3000,
        });
        this.ngOnInit();
      });
    }
  }
}
