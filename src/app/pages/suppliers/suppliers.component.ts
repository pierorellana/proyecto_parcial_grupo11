import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SupplierFormComponent } from '../supplier-form/supplier-form.component';

export interface Supplier {
  name: string;
  contact: string;
  products: string[];
  deliveryTime?: string;
  quality: number;
}

const SUPPLIER_DATA: Supplier[] = [
  {
    name: 'Pierre Orellana',
    contact: '+1 (555) 123-4567',
    products: ['MacBook', 'iPad', 'iPhone'],
    deliveryTime: '3-5 days',
    quality: 4.8,
  },
  {
    name: 'Denisse Pinto',
    contact: '+44 (0) 20 1234 5678',
    products: ['MacBook', 'iPad', 'iPhone'],
    deliveryTime: '2-4 days',
    quality: 4.6,
  },
  {
    name: 'Luis Pilco',
    contact: '+61 (0) 3 9876 5432',
    products: ['MacBook', 'iPad', 'iPhone'],
    deliveryTime: '4-7 days',
    quality: 4.3,
  },
  {
    name: 'Alexander Hallo',
    contact: '+49 (0) 30 1234 5678',
    products: ['MacBook', 'iPad', 'iPhone'],
    deliveryTime: '2-3 days',
    quality: 4.9,
  },
  {
    name: 'Pepito Delgado',
    contact: '+49 (0) 30 1234 5678',
    products: ['MacBook', 'iPad', 'iPhone'],
    deliveryTime: '2-3 days',
    quality: 4.9,
  },
  {
    name: 'Pierre Orellana',
    contact: '+44 (0) 20 1234 5678',
    products: ['MacBook', 'iPad', 'iPhone'],
    deliveryTime: '2-4 days',
    quality: 4.6,
  },
];

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'contact', 'products', 'deliveryTime', 'quality', 'actions'];
  dataSource = new MatTableDataSource<Supplier>(SUPPLIER_DATA);

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

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
        this.dataSource.data = [...this.dataSource.data, result];
        this.dataSource._updateChangeSubscription();
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
        const index = this.dataSource.data.findIndex(s => s.name === supplier.name);
        if (index !== -1) {
          this.dataSource.data[index] = result;
          this.dataSource._updateChangeSubscription();
        }
      }
    });
  }

  deleteSupplier(supplier: Supplier) {
    this.dataSource.data = this.dataSource.data.filter(s => s.name !== supplier.name);
    this.dataSource._updateChangeSubscription();
  }
}
