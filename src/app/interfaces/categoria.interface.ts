export interface Categoria {
    categoriaId: number;
    nombrecategoria: string;
    productos: {
      productoId: number;
      nombre: string;
      descripcion: string;
      precio: number;
      imagen: string | null;
      stock: number;
      categoriaId: number;
    }[];
  }