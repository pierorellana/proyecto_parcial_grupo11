import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto_Parcial';
  displayedColumns: string[] = ['nombre', 'apellido', 'email', 'fecha', 'genero', 'pago', 'domicilio', 'items', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _dialog: MatDialog){}
  openAddEditEmpForm(){
    this._dialog.open(EmpAddEditComponent);   
  }
}

export interface PeriodicElement {
  nombre: string;
  apellido: string;
  email: string;
  fecha: Date;
  genero: string;
  pago: string;
  domicilio: string;
  items: number;
  total: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nombre: 'Luis', apellido: 'Pilco', email: 'lpilcomayorga@gmail.com',fecha: new Date('2023-02-02'), genero: 'Masculino', pago: 'Efectivo', domicilio: 'Portete', items: 2, total: 100},
  {nombre: 'Luis', apellido: 'Pilco', email: 'lpilcomayorga@gmail.com',fecha: new Date('2023-02-02'), genero: 'Masculino', pago: 'Efectivo', domicilio: 'Portete', items: 2, total: 100},
  {nombre: 'Luis', apellido: 'Pilco', email: 'lpilcomayorga@gmail.com',fecha: new Date('2023-02-02'), genero: 'Masculino', pago: 'Efectivo', domicilio: 'Portete', items: 2, total: 100},
  {nombre: 'Luis', apellido: 'Pilco', email: 'lpilcomayorga@gmail.com',fecha: new Date('2023-02-02'), genero: 'Masculino', pago: 'Efectivo', domicilio: 'Portete', items: 2, total: 100},
  {nombre: 'Luis', apellido: 'Pilco', email: 'lpilcomayorga@gmail.com',fecha: new Date('2023-02-02'), genero: 'Masculino', pago: 'Efectivo', domicilio: 'Portete', items: 2, total: 100},
  {nombre: 'Luis', apellido: 'Pilco', email: 'lpilcomayorga@gmail.com',fecha: new Date('2023-02-02'), genero: 'Masculino', pago: 'Efectivo', domicilio: 'Portete', items: 2, total: 100},
  {nombre: 'Luis', apellido: 'Pilco', email: 'lpilcomayorga@gmail.com',fecha: new Date('2023-02-02'), genero: 'Masculino', pago: 'Efectivo', domicilio: 'Portete', items: 2, total: 100},
];
