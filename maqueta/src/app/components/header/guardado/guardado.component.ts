import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpInventarioService } from '../../../services/http-inventario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './guardado.component.html',
  styleUrls: ['./guardado.component.css']
})
export class GuardadoComponent implements OnInit {
  formBuilder = new FormBuilder();
  registroForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    precio: ['', Validators.required],
    stock: ['', Validators.required],
    categoria: ['', Validators.required]
  });

  productos: any[] = [];
  productoSeleccionadoId: number | null = null; // Variable para almacenar el ID del producto a editar

  constructor(private inventarioService: HttpInventarioService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.inventarioService.getProductos().subscribe(
      (data) => {
        this.productos = data;
      },
      (error) => {
        console.error('Error al cargar los productos:', error);
      }
    );
  }

  nuevoProducto(): void {
    const producto = this.registroForm.value;
    this.inventarioService.nuevoProducto(producto).subscribe(
      (data) => {
        console.log(data);
        this.obtenerProductos();
        this.registroForm.reset();
      },
      (error) => {
        console.error('Error al agregar producto:', error);
      }
    );
  }

  editarProducto(id: number): void {
    // Buscar el producto a editar
    const producto = this.productos.find((prod) => prod.id === id);
    if (producto) {
      this.productoSeleccionadoId = id; // Guardar el ID del producto seleccionado
      this.registroForm.patchValue(producto); // Rellenar el formulario con los datos del producto
    }
  }

  guardarProducto(): void {
    if (this.productoSeleccionadoId) {
      // Si hay un producto seleccionado, se actualiza
      this.inventarioService.actualizarProducto(this.registroForm.value, this.productoSeleccionadoId).subscribe(
        (data) => {
          console.log(data);
          this.obtenerProductos();
          this.registroForm.reset();
          this.productoSeleccionadoId = null; // Limpiar selección
        },
        (error) => {
          console.error('Error al actualizar producto:', error);
        }
      );
    } 
  }

  eliminarProducto(id: number): void {
    this.inventarioService.eliminarProducto(id).subscribe(
      (data) => {
        console.log(data);
        this.obtenerProductos();
      },
      (error) => {
        console.error('Error al eliminar producto:', error);
      }
    );
  }
  trackById(index: number, item: any): number {
    return item.id;
  }
  
}
