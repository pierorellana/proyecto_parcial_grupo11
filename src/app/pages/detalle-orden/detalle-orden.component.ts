import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudesService } from '../solicitud/service/solicitudes.service';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {
  orden: any = {}; // Inicializa como objeto vacío
  subtotal: number = 0;
  envio: number = 0;
  totalPagar: number = 0;

  constructor(private solicitudesService: SolicitudesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        const id = +idParam;
        this.solicitudesService.ObtenerSolicitudPorId(id).subscribe(data => {
          console.log('Datos recibidos:', data);
          this.orden = data || {};
  
          // Cálculo de totales
          this.subtotal = this.orden.producto ? this.orden.producto.precio * this.orden.cantidad : 0;
          this.envio = this.orden.costoEnvio || 0;
          this.totalPagar = this.subtotal + this.envio;
        });
      } else {
        console.error('El ID de la orden no se proporcionó.');
      }
    });
  }
  
  // Método para verificar el método de pago
  esPayPal(): boolean {
    return this.orden.metodoPago === 'paypal';
  }

  esTarjeta(): boolean {
    return this.orden.metodoPago === 'tarjeta';
  }
}

