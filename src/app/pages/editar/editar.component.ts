import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudesService } from '../solicitud/service/solicitudes.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  solicitudId!: number;
  solicitud: any = {};

  constructor(
    private route: ActivatedRoute,
    private solicitudesService: SolicitudesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.solicitudId = +id;
        this.loadSolicitud();
      } else {
        console.error('ID no encontrado en la URL');
      }
    });
  }
  
  loadSolicitud(): void {
    this.solicitudesService.ObtenerSolicitudPorId(this.solicitudId).subscribe(
      data => {
        this.solicitud = data;
      },
      error => {
        console.error('Error al cargar la solicitud', error);
      }
    );
  }
  
  
  saveChanges(): void {
    this.solicitudesService.EditarSolicitud(this.solicitudId, this.solicitud).subscribe(
      () => {
        this.router.navigate(['/ordenes']);
      },
      error => {
        console.error('Error al actualizar la solicitud', error);
      }
    );
  }
}
