import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitudesService } from '../../../app/pages/solicitud/service/solicitudes.service';
import { ProductosService } from '../../pages/productos/service/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitudForm!: FormGroup;
  productoSeleccionado: any;
  precioTotal: number = 0;
  costoEnvio: number = 5.00; // Costo de envío fijo

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private solicitudesService: SolicitudesService,
    private productosService: ProductosService) {
    const navigation = this.router.getCurrentNavigation();
    const productoId = navigation?.extras.state?.['productoId'];
  
    if (productoId) {
      this.completarInformacionProducto(productoId);
    } else {
      console.error('Producto no seleccionado o ID no definido.');
    }
  }
  

  ngOnInit(): void {
    this.solicitudForm = this.fb.group({
      nombreCliente: ['', Validators.required],
      correoCliente: ['', [Validators.required, Validators.email]],
      telefonoCliente: ['', Validators.required],
      ciudad: ['', Validators.required],
      estadoProvincia: ['', Validators.required],
      direccionCalle1: ['', Validators.required],
      codigoPostal: ['', Validators.required],
      referencia: [''],
      correoPaypal: [''],
      nombreTarjeta: [''],
      numeroTarjeta: [''],
      expiracionTarjeta: [''],
      cvcTarjeta: [''],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      metodoPago: ['', Validators.required] 
    });

    if (this.productoSeleccionado && this.productoSeleccionado.productoId) {
      this.completarInformacionProducto(this.productoSeleccionado.productoId);
    } else {
      console.error('Producto no seleccionado o ID no definido.');
    }
    
  }
  completarInformacionProducto(productoId: number): void {
    if (!productoId) {
      console.error('ID de producto no válido.');
      return;
    }
  
    this.productosService.ObtenerProductoPorId(productoId).subscribe(producto => {
      if (producto) {
        this.productoSeleccionado = producto;
        this.calcularTotal();
      } else {
        console.error('El producto no existe en la base de datos.');
      }
    }, error => {
      console.error('Error al obtener la información del producto:', error);
    });
  }
  

  calcularTotal() {
    const cantidad = this.solicitudForm.get('cantidad')?.value || 1;
    this.precioTotal = (this.productoSeleccionado.precio || 0) * cantidad;
  }

  onCantidadChange() {
    this.calcularTotal();
  }

  crearSolicitud() {
    if (this.solicitudForm.invalid) {
      return;
    }
  
    if (!this.productoSeleccionado || !this.productoSeleccionado.productoId) {
      console.error('Producto no seleccionado o ID no definido.');
      return;
    }
  
    const solicitudData = {
      ...this.solicitudForm.value,
      productoId: this.productoSeleccionado.productoId,
      precioTotal: this.precioTotal,
      costoEnvio: this.costoEnvio,
      total: this.precioTotal + this.costoEnvio
    };
  
    this.solicitudesService.CrearSolicitud(solicitudData).subscribe(
      () => {
        console.log('Solicitud creada con éxito');
        this.router.navigate(['/ordenes']);
      },
      error => {
        console.error('Error al crear la solicitud:', error);
      }
    );
  }
}  