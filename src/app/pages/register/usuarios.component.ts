import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Usuario } from './usuarios.interface';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  hide = true;
  usuario: Usuario = {
    usuarioId: 0,
    nombreUsuario: '',
    apellido: '',
    correo: '',
    contrasena: '',
    rolId: 1
  };

  constructor(private servicesService: ServicesService) { }

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  ngOnInit(): void {
  }

  registrarUsuario() {
    this.servicesService.agregarUsuario(this.usuario).subscribe(response => {
      console.log('Usuario registrado', response);
      // Aquí puedes manejar la respuesta o redirigir a otra página
    }, error => {
      console.error('Error al registrar el usuario', error);
    });
  }

}
