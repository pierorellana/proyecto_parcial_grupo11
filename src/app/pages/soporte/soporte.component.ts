import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css'],
})
export class SoporteComponent {
  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    nombres: [''],
    apellidos: [''],
    direccion: [''],
    fecha: [''],
    genero: [''],
    comentario: [''],
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}
