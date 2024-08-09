import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css'],
})
export class SoporteComponent {
  constructor(private formBuilder: FormBuilder, private service: ServicesService) {}

  profileForm = this.formBuilder.group({
    nombres: [''],
    apellidos: [''],
    direccion: [''],
    fecha: [''],
    genero: [''],
    comentario: [''],
  });

  saveForm() {
    if (this.profileForm.valid) {
      this.service.agregarSolicitudSoporte(this.profileForm.value).subscribe(
        (response) => {
          console.log('Solicitud de soporte enviada exitosamente', response);
          // Opcional: Puedes agregar lógica para mostrar un mensaje de éxito o limpiar el formulario
        },
        (error) => {
          console.error('Error al enviar la solicitud de soporte', error);
        }
      );
    }
  }
}
