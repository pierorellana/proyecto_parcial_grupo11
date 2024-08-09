export interface Producto {
  productoId: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string | null;
  stock: number;
  categoriaId: number;
}
