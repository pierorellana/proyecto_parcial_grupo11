import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ServicioService } from 'src/app/servicio/servicio.service';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css'],
})
export class AdminProductComponent {
  productForm: FormGroup;
  products: Producto[] = [];
  selectedImage: SafeUrl | null = null;
  editingProductId: number | null = null;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer, private servicioService: ServicioService) {
    this.productForm = this.fb.group({
      nombre: [''],
      precio: [''],
      descripcion: [''],
      imagen: [null],
      stock: [0]
    });

    // Cargar productos existentes al iniciar el componente
    this.loadProducts();
  }

  loadProducts() {
    // Supongamos que tienes un método para obtener todos los productos
    // this.servicioService.getProducts().subscribe((products) => {
    //   this.products = products;
    // });
  }

  onSubmit() {
    const product = {
      ...this.productForm.value,
      productoId: this.editingProductId ?? 0,
      imagen: this.selectedImage,
      categoriaId: 1
    } as Producto;

    const productToSend = { ...product, imagen: null };

    if (this.editingProductId === null) {
      this.servicioService.addProduct(productToSend).subscribe((newProduct) => {
        this.products.push({ ...product, productoId: newProduct.productoId });
        this.resetForm();
      }, error => {
        console.error('Error adding product', error);
      });
    } else {
      this.servicioService.editProduct(productToSend).subscribe(() => {
        const index = this.products.findIndex(p => p.productoId === this.editingProductId);
        if (index !== -1) {
          this.products[index] = product;
        }
        this.resetForm();
      }, error => {
        console.error('Error editing product', error);
      });
    }
  }

  editProduct(product: Producto) {
    this.productForm.setValue({
      nombre: product.nombre,
      precio: product.precio,
      descripcion: product.descripcion,
      imagen: product.imagen,
      stock: product.stock
    });
    this.selectedImage = product.imagen;
    this.editingProductId = product.productoId;
  }

  deleteProduct(product: Producto) {
    this.servicioService.deleteProduct(product.productoId).subscribe(() => {
      const index = this.products.indexOf(product);
      if (index >= 0) {
        this.products.splice(index, 1);
      }
    }, error => {
      console.error('Error deleting product', error);
    });
  }

  resetForm() {
    this.productForm.reset();
    this.selectedImage = null;
    this.editingProductId = null;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const url = URL.createObjectURL(file);
      this.selectedImage = this.sanitizer.bypassSecurityTrustUrl(url);
      this.productForm.patchValue({
        imagen: this.selectedImage,
      });
    }
  }

  onDrop(event: CdkDragDrop<any>) {
    const file = event.item.data;
    if (file) {
      const url = URL.createObjectURL(file);
      this.selectedImage = this.sanitizer.bypassSecurityTrustUrl(url);
      this.productForm.patchValue({
        imagen: this.selectedImage,
      });
    }
  }
}
