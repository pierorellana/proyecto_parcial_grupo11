import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { ServicesService } from 'src/app/services/services.service';
import { Cliente } from './client.interface';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'email',
    'fecha',
    'genero',
    'pago',
    'domicilio',
    'items',
    'total',
  ];

  dataSource = new MatTableDataSource<Cliente>([]);

  constructor(
    private clienteService: ServicesService,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.getClientes().subscribe(
      (clientes) => {
        this.dataSource.data = clientes;
      },
      (error) => {
        console.error('Error fetching client data', error);
      }
    );
  }

  openAddEditEmpForm(): void {
    const dialogRef = this._dialog.open(EmpAddEditComponent);

    dialogRef.componentInstance.clienteAdded.subscribe(() => {
      this.loadClientes(); // Recarga los datos cuando el cliente es agregado
    });
  }
}
