import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

import { MatDialogRef } from '@angular/material/dialog';
import { Cliente } from '../client/client.interface';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  
  @Output() clienteAdded = new EventEmitter<void>(); // Evento para notificar que un cliente fue agregado

  empForm: FormGroup;

  metodo: string[] = [
    'Efectivo',
    'Tarjeta de credito',
    'Tarjeta de debito',
  ];

  constructor(
    private _fb: FormBuilder,
    private clienteService: ServicesService,
    private dialogRef: MatDialogRef<EmpAddEditComponent>
  ) { 
    this.empForm = this._fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fecha: ['', Validators.required],
      genero: ['', Validators.required],
      pago: ['', Validators.required],
      domicilio: ['', Validators.required],
      items: [0, [Validators.required, Validators.min(0)]],
      total: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void { }

  onFormSubmit(): void {
    if (this.empForm.valid) {
      const cliente: Cliente = {
        clienteId: 0,
        nombre: this.empForm.value.nombres,
        apellido: this.empForm.value.apellidos,
        email: this.empForm.value.email,
        fechaNacimiento: this.empForm.value.fecha,
        genero: this.empForm.value.genero,
        metodoPago: this.empForm.value.pago,
        domicilio: this.empForm.value.domicilio,
        itemsAgregados: this.empForm.value.items,
        total: this.empForm.value.total
      };

      this.clienteService.agregarCliente(cliente).subscribe(
        response => {
          console.log('Cliente agregado exitosamente', response);
          this.clienteAdded.emit(); // Emite el evento para notificar al padre
          this.dialogRef.close(); // Cierra el diálogo
        },
        error => {
          console.error('Error al agregar cliente', error);
        }
      );
    }
  }
}
