import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Supplier } from '../suppliers/supplier.interface';


@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {
  supplierForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SupplierFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Supplier
  ) {
    this.supplierForm = this.fb.group({
      proveedorId: [data?.proveedorId || null],
      nombre: [data?.nombre || ''],
      email: [data?.email || ''],
      telefono: [data?.telefono || ''],
      direccion: [data?.direccion || ''],
      porductos: [data?.porductos || ''],
      tiempoentrega: [data?.tiempoentrega || ''],
      calidad: [data?.calidad || 0],
      usuarioId: [data?.usuarioId || null]
    });
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    if (this.supplierForm.valid) {
      this.dialogRef.close(this.supplierForm.value);
    }
  }
}
