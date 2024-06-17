import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditInventoryComponent } from '../edit-inventory/edit-inventory.component';

interface InventoryItem {
  supplier: string;
  product: string;
  inventory: number;
  price: string;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  searchQuery: string = '';
  displayedColumns: string[] = ['supplier', 'product', 'inventory', 'price', 'actions'];
  dataSource: InventoryItem[] = [
    {supplier: 'Pierre Orellana', product: 'iPhone', inventory: 100, price: '$1000.99'},
    {supplier: 'Denisse Pinto', product: 'MacBook', inventory: 50, price: '$12500.99'},
    {supplier: 'Pierre Orellana', product: 'iPhone', inventory: 75, price: '$800.99'},
    {supplier: 'Luis Pilco', product: 'MacBook', inventory: 80, price: '$1200.99'},
    {supplier: 'Denisse Pinto', product: 'iPhone', inventory: 60, price: '$900.99'},
    {supplier: 'Pierre Orellana', product: 'iPad', inventory: 90, price: '$1400.99'},
    {supplier: 'Denisse Pinto', product: 'iPad', inventory: 120, price: '$700.99'},
    {supplier: 'Luis Pilco', product: 'iPhone', inventory: 90, price: '$1100.99'},
  ];
  filteredDataSource: InventoryItem[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.filteredDataSource = this.dataSource;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredDataSource = this.dataSource.filter(item => 
      item.supplier.toLowerCase().includes(filterValue) || 
      item.product.toLowerCase().includes(filterValue)
    );
  }

  editItem(item: InventoryItem): void {
    const dialogRef = this.dialog.open(EditInventoryComponent, {
      width: '550px',
      data: { ...item }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.dataSource.findIndex(i => i.product === item.product && i.supplier === item.supplier);
        if (index !== -1) {
          this.dataSource[index] = result;
          this.applyFilter(new Event('input'));
        }
      }
    });
  }
}
