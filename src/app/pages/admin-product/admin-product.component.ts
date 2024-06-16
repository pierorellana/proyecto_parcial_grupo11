import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

interface Product {
  name: string;
  price: number;
  description: string;
  image: SafeUrl;
}

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css'],
})
export class AdminProductComponent {
  productForm: FormGroup;
  products: Product[] = [];
  selectedImage: SafeUrl | null = null;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      image: [null],
    });
  }

  onSubmit() {
    this.products.push(this.productForm.value);
    this.productForm.reset();
    this.selectedImage = null;
  }

  editProduct(product: Product) {
    this.productForm.setValue({
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
    });
    this.selectedImage = product.image;
    this.deleteProduct(product);
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const url = URL.createObjectURL(file);
      this.selectedImage = this.sanitizer.bypassSecurityTrustUrl(url);
      this.productForm.patchValue({
        image: this.selectedImage,
      });
    }
  }

  onDrop(event: CdkDragDrop<any>) {
    const file = event.item.data;
    if (file) {
      const url = URL.createObjectURL(file);
      this.selectedImage = this.sanitizer.bypassSecurityTrustUrl(url);
      this.productForm.patchValue({
        image: this.selectedImage,
      });
    }
  }
}
