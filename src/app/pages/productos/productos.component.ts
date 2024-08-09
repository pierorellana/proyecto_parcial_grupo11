import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../app/pages/productos/service/producto.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  productoForm: FormGroup;

  constructor(
    private productosService: ProductosService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.productoForm = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      precio: [''],
      imagen: [null],
      stock: [''],
      categoriaId: ['']
    });
  }

  ngOnInit(): void {
    this.productosService.ListarProductos().subscribe(productos => {
      this.productos = productos;
      console.log(this.productos); // Verifica que cada producto tiene un ID
    });
  }
  

  listarProductos(): void {
    this.productosService.ListarProductos().subscribe(data => {
      this.productos = data.map(producto => ({
        ...producto,
        imagenUrl: producto.imagen ? this.arrayBufferToBase64(producto.imagen) : null
      }));
    }, error => {
      console.error('Error al obtener los productos:', error);
    });
  }

  crearProducto() {
    const formValue = this.productoForm.value;
    const file = formValue.imagen;

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const base64Image = reader.result?.toString().split(',')[1]; // Obtenemos la parte base64

        const producto = {
          nombre: formValue.nombre,
          descripcion: formValue.descripcion,
          precio: formValue.precio,
          imagen: base64Image,  // Enviamos la imagen en formato base64
          stock: formValue.stock,
          categoriaId: formValue.categoriaId
        };

        this.productosService.CrearProducto(producto).subscribe(
          response => {
            console.log('Producto creado con éxito:', response);
            // Aquí puedes agregar lógica adicional como resetear el formulario
          },
          error => {
            console.error('Error al crear el producto:', error);
          }
        );
      };

      reader.onerror = error => {
        console.error('Error al leer la imagen:', error);
      };
    }
  }

  generarSolicitud(producto: any): void {
    if (!producto || !producto.productoId) {
      console.error('Producto no válido para la solicitud.');
      return;
    }
    this.router.navigate(['/solicitud'], { state: { productoId: producto.productoId } });
  }
  
  
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.productoForm.patchValue({
      imagen: file
    });
  }
  

  arrayBufferToBase64(buffer: any): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return 'data:image/jpeg;base64,' + window.btoa(binary);
  }
}
