import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';
import { HttpInventarioService } from '../../../services/http-inventario.service';

@Component({
  selector: 'app-cotizar',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agregar FormsModule
  templateUrl: './cotizar.component.html',
  styleUrls: ['./cotizar.component.css']
})
export class CotizarComponent implements OnInit {
  productos: any[] = [];
  productosFiltrados: any[] = [];
  criterioBusqueda: string = ''; // Criterio ingresado en el input

  constructor(private inventarioService: HttpInventarioService) {}

  ngOnInit(): void {
    // No se cargan productos al inicio
  }

  buscarProducto(): void {
    if (this.criterioBusqueda.trim()) {
      // Llama al servicio solo cuando haya un criterio de búsqueda
      this.inventarioService.getProductos().subscribe(
        (data) => {
          this.productos = data;
          // Filtra productos según el criterio
          this.productosFiltrados = this.productos.filter(producto =>
            producto.nombre.toLowerCase().includes(this.criterioBusqueda.toLowerCase())
          );
        },
        (error) => {
          console.error('Error al cargar los productos:', error);
        }
      );
    } else {
      // Si no se ingresa criterio, vacía los productos filtrados
      this.productosFiltrados = [];
    }
  }
}
