import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { DialogerrorComponent } from 'src/app/components/dialogerror/dialogerror.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private servicioService: ServicioService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.loginForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  onSubmit(): void {
    const { nombreUsuario, contraseña } = this.loginForm.value;
    this.servicioService.authenticate(nombreUsuario, contraseña).subscribe(user => {
      if (user) {
        this.router.navigate(['/products']);
      } else {
      this.dialog.open(DialogerrorComponent, {
            data: { message: 'Credenciales incorrectas' }
          });
      }
    });
  }
}
