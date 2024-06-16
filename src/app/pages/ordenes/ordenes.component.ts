import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from '../solicitud/service/solicitudes.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  ordenes: any[] = [];
  filterValue: string = '';
  ordenesFiltradas: any[] = [];
  displayedColumns: string[] = ['id', 'cliente', 'telefonoCliente',  'precioTotal', 'detalles', 'acciones'];

  constructor(private solicitudesService: SolicitudesService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.solicitudesService.ordenes$.subscribe(ordenes => {
      console.log('Datos de órdenes recibidos:', ordenes); 
      this.ordenes = ordenes.map(orden => ({
        ...orden,
        precioTotal: this.calcularPrecioTotal(orden.productos)
      }));
      this.ordenesFiltradas = [...this.ordenes];
    });
  }

  calcularPrecioTotal(productos: any[]): number {
    return productos.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
  }

  aplicarFiltro(): void {
    if (!this.filterValue.trim()) {
      this.ordenesFiltradas = [...this.ordenes];
      return;
    }
    const lowercaseValue = this.filterValue.toLowerCase().trim();
    this.ordenesFiltradas = this.ordenes.filter(orden => {
      return  orden.cliente.toLowerCase().includes(lowercaseValue);
    });
  
    console.log('Datos filtrados:', this.ordenesFiltradas);
  }
  

  editarOrden(orden: any) {
    if (orden && orden.id !== undefined) {
      this.router.navigate(['/editar-orden', orden.id]);
    } else {
      console.error('La orden seleccionada es inválida.');
    }
  }

  eliminarOrden(orden: any) {
    if (confirm(`¿Estás seguro de que deseas eliminar la orden de ${orden.cliente}?`)) {
      this.solicitudesService.eliminarOrden(orden.id).subscribe(() => {
        const index = this.ordenes.findIndex(o => o.id === orden.id);
        if (index > -1) {
          this.ordenes.splice(index, 1);
          this.aplicarFiltro();
        }
        this.snackBar.open('Orden eliminada con éxito', 'Cerrar', { duration: 3000 });
      });
    }
  }
  

  agregarOrden() {
    this.router.navigate(['/agregar-orden']);
  }
}
