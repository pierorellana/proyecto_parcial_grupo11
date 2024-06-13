import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolicitudesService } from '../solicitud/service/solicitudes.service';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {
  empresaNombre: string = 'DigitalMarket';
  orden: any;
  constructor(private route: ActivatedRoute,
    private solicitudesService: SolicitudesService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.orden = this.solicitudesService.obtenerOrdenPorId(id);
  }
  get subtotal(): number {
    return this.orden.subtotal;
  }

  get envio(): number {
    return this.orden.costoEnvio;
  }

  get totalPagar(): number {
    return this.orden.totalPagar;
  }

}
