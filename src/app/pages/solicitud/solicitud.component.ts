import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SolicitudesService } from '../solicitud/service/solicitudes.service';
// import { ProductoService } from '../productos/service/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
[x: string]: any;
  
  producto: any;
  cliente: string = '';
  correoCliente: string = '';
  telefonoCliente: string = '';
  metodoPago: string = '';
  nombreTarjeta: string = '';
  numeroTarjeta: string = '';
  correoPaypal: string = '';
  nombreCuenta: string = '';
  numeroCuenta: string = '';
  expiracionTarjeta: string = '';
  cvcTarjeta: string = '';
  ciudad: string = '';
  estadoProvincia: string = '';
  direccionCalle1: string = '';
  codigopostal: string = '';
  referencia: string = '';
  aceptaCondiciones: boolean = false;
  solicitudEnviada: boolean = false;
  productoSeleccionado: any = { precio: 100 };
  subtotal: number = 0;
  costoEnvio: number = 0;
  totalPagar: number = 0;
  correoPaypalError: string | null = null;
  productos: any[] = [
    { producto: 'Laptop Ultrabook', cantidad: 1, precio: 100.00 }
  ];
  

  extensionesTelefonicas = [
    { codigo: '+1', pais: 'Estados Unidos' },
    { codigo: '+44', pais: 'Reino Unido' },
    { codigo: '+49', pais: 'Alemania' },
    { codigo: '+593', pais: 'Ecuador' },
  ];
  telefonoControl = new FormControl();
  private _formData: { [key: string]: any } = {};
  

  get extensionSeleccionada(): any {
    return this._formData['extensionSeleccionada'];
  }

  set extensionSeleccionada(value: any) {
    this._formData['extensionSeleccionada'] = value;
    this.calcularTotal();
  }

  seleccionarExtension(event: any) {
    this.telefonoCliente = event.option.value;
    this.calcularTotal();
  }

  mostrarCampoPago() {
    this.nombreTarjeta = '';
    this.numeroTarjeta = '';
    this.correoPaypal = '';
    this.nombreCuenta = '';
    this.numeroCuenta = '';
    this.expiracionTarjeta = '';
    this.cvcTarjeta = '';
  }
  

  constructor(private solicitudesService: SolicitudesService, 
    // private productoService: ProductoService,
    private router: Router) { }
  enviarSolicitud() {
    if (this.validarFormulario()) {
      const solicitud = {
        cliente: this.cliente,
        correoCliente: this.correoCliente,
        productos: this.productos,
        telefonoCliente: this.telefonoCliente,
        direccionCalle1: this.direccionCalle1,
        ciudad: this.ciudad,
        estadoProvincia: this.estadoProvincia,
        codigopostal: this.codigopostal,
        metodoPago: this.metodoPago,
        nombreTarjeta: this.nombreTarjeta,
        numeroTarjeta: this.numeroTarjeta,
        expiracionTarjeta: this.expiracionTarjeta,
        cvcTarjeta: this.cvcTarjeta,
        correoPaypal: this.correoPaypal,
        subtotal: this.subtotal,
        costoEnvio: this.costoEnvio,
        totalPagar: this.totalPagar,
      };

      this.solicitudesService.agregarOrdenCompra(solicitud);
      this.solicitudEnviada = true;
      this.router.navigate(['/ordenes']);
    } 
    else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
  

  validarFormulario(): boolean {
    let esValido = true;

    if (!this.cliente) {
      esValido = false;
      alert('El nombre del cliente es obligatorio.');
    }

    if (!this.correoCliente || !this.validarCorreo(this.correoCliente)) {
      esValido = false;
      alert('El correo electrónico es obligatorio y debe tener un formato válido.');
    }

    if (!this.extensionSeleccionada || !this.telefonoCliente) {
      esValido = false;
      alert('El teléfono es obligatorio.');
    }

    if (!this.ciudad || !this.estadoProvincia || !this.direccionCalle1) {
      esValido = false;
      alert('La dirección es obligatoria.');
    }

    if (!this.aceptaCondiciones) {
      esValido = false;
      alert('Debes aceptar los términos y condiciones.');
    }

    if (this.metodoPago === 'paypal') {
      if (!this.correoPaypal || !this.validarCorreo(this.correoPaypal)) {
        esValido = false;
        alert('Debes proporcionar tu correo electrónico de PayPal con un formato válido.');
      }
    } else if (this.metodoPago === 'tarjeta') {
      if (!this.nombreTarjeta || !this.numeroTarjeta || !this.expiracionTarjeta || !this.cvcTarjeta) {
        esValido = false;
        alert('Debes completar todos los campos de la tarjeta.');
      }
    }

    return esValido;
  }

  validarCorreo(correo: string): boolean {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return regex.test(correo);
  }
  

  validarCorreoPaypal(): boolean {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  
    if (!this.correoPaypal) {
      this.correoPaypalError = 'Debes proporcionar tu correo electrónico de PayPal.';
      return false;
    } else if (!regex.test(this.correoPaypal)) {
      this.correoPaypalError = 'El formato del correo electrónico no es válido.';
      return false;
    } else {
      this.correoPaypalError = null;
      return true;
    }
  }

  calcularTotal() {
    this.subtotal = 0;
    this.productos.forEach(producto => {
      this.subtotal += producto.cantidad * producto.precio;
    });
    this.costoEnvio = this.calcularCostoEnvio(this.ciudad, this.estadoProvincia, this.direccionCalle1);
    this.totalPagar = this.subtotal + this.costoEnvio;
  }

  calcularCostoEnvio(_ciudad: string, _estadoProvincia: string, _direccionCalle1: string): number {
    return 5;
  }

  actualizarPrecios() {
    this.subtotal = 0;
    this.productos.forEach(producto => {
      producto.precioTotal = producto.cantidad * producto.precio;
      this.subtotal += producto.precioTotal;
    });
    this.calcularTotal();
  }


  displayedColumns: string[] = ['producto', 'cantidad', 'precio', 'accion'];
  productoDataSource = new MatTableDataSource(this.productos);

  incrementarCantidad(item: any) {
    item.cantidad++;
    item.precioTotal = item.cantidad * item.precio;
    this.calcularTotal();
  }

  decrementarCantidad(item: any) {
    if (item.cantidad > 1) {
      item.cantidad--;
      item.precioTotal = item.cantidad * item.precio;
      this.calcularTotal();
    }
  }

  agregarProducto(producto: any) {
    this.productos.push(producto);
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }
  
  
  verProducto(item: any): void {
    this.router.navigate(['/productos', item.id]);
  }

  editarProducto(item: any): void {
    // Implementation of your method
    console.log('Editing product', item);
  }

  ngOnInit(): void {
    // this.producto = this.productoService.getProductosDestacados();
    this.actualizarPrecios();
    this.calcularTotal();
  }
}
