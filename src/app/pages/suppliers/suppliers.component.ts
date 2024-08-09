import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { SupplierFormComponent } from '../supplier-form/supplier-form.component';
import { ServicesService } from 'src/app/services/services.service';
import { Supplier } from './supplier.interface';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'email', 'telefono', 'direccion', 'porductos', 'tiempoentrega', 'calidad', 'actions'];
  dataSource = new MatTableDataSource<Supplier>([]);

  constructor(
    private supplierService: ServicesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(
      (suppliers) => {
        this.dataSource.data = suppliers;
      },
      (error) => {
        console.error('Error fetching supplier data', error);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SupplierFormComponent, {
      width: '550px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.supplierService.addSupplier(result).subscribe(newSupplier => {
          this.dataSource.data = [...this.dataSource.data, newSupplier];
        });
      }
    });
  }

  editSupplier(supplier: Supplier) {
    const dialogRef = this.dialog.open(SupplierFormComponent, {
      width: '550px',
      data: supplier
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.supplierService.updateSupplier(result).subscribe(updatedSupplier => {
          const index = this.dataSource.data.findIndex(s => s.proveedorId === supplier.proveedorId);
          if (index !== -1) {
            this.dataSource.data[index] = updatedSupplier;
            this.dataSource._updateChangeSubscription();
          }
        });
      }
    });
  }

  deleteSupplier(supplier: Supplier) {
    this.supplierService.deleteSupplier(supplier.proveedorId).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(s => s.proveedorId !== supplier.proveedorId);
      this.dataSource._updateChangeSubscription();
    });
  }
}
