export class Producto {
    id: number;
    nombre: string;
    precio: number;
cantidad: any;
  
    constructor(id: number, nombre: string, precio: number) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
    }
  }