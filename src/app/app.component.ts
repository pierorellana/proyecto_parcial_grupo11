import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounce } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto_Parcial';
  constructor(private formBuilder:FormBuilder){

  }

  profileForm = this.formBuilder.group({
    nombres:[''],
    apellidos:[''],
    direccion:[''],
    fecha:[''],
    genero:[''],
    comentario:['']
  });

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }
}
