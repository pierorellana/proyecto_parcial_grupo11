import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Supplier } from '../suppliers/suppliers.component';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {
  supplierForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SupplierFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Supplier
  ) {
    const initialData: Partial<Supplier> = data || { name: '', contact: '', products: [], deliveryTime: '', quality: '' };
  
    this.supplierForm = this.fb.group({
      name: [initialData.name, Validators.required],
      contact: [initialData.contact, Validators.required],
      products: [initialData.products ? initialData.products.join(', ') : '', Validators.required],
      deliveryTime: [initialData.deliveryTime, Validators.required],
      quality: [initialData.quality, [Validators.required, Validators.min(0), Validators.max(5)]],
    });
  }
  

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.supplierForm.valid) {
      const formValue = this.supplierForm.value;
      formValue.products = formValue.products.split(',').map((product: string) => product.trim());
      this.dialogRef.close(formValue);
    }
  }
}
