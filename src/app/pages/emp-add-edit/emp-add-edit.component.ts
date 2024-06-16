import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  
  constructor(private _fb: FormBuilder) { 
    this.empForm = this._fb.group({
      nombres: '',
      apellidos: '',
      email: '',
      fecha: '',
      genero: '',
      pago: '',
      domicilio: '',
      items: '',
      total: '',
    });
  }

  ngOnInit(): void {
  }

  metodo: string[] = [
    'Efectivo',
    'Tarjeta de credito',
    'Tarjeta de debito',
  ];

  empForm: FormGroup;
  
  onFormSubmit(){
    if (this.empForm.valid) {
      console.log(this.empForm.value);
    }
  }
}
