import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpInventarioService } from '../../../services/http-inventario.service';

@Component({
  selector: 'app-inventario',
  standalone: true, // Indicar que es un standalone component
  imports: [ ReactiveFormsModule], // Importar FormsModule aquí
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  formBuilder = new FormBuilder()
  registroForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    precio: ['', Validators.required],
    stock: ['', Validators.required],
    categoria: ['', Validators.required]
  });
  constructor(
    private inventarioService: HttpInventarioService) {
    
  }

  ngOnInit(): void {}

  nuevoProducto() {
    const producto = this.registroForm.value;
    this.inventarioService.nuevoProducto(producto).subscribe(
      ()=>{
        alert('Producto Registrado Correctamente');
      },
      (error) => {
        alert('Error al registrar el Producto');
        console.error(error);
      }
      /*{next: () => {
        alert('Producto Agregado');
        this.registroForm.reset();
      },
      error: () => alert('Error al registrar producto')
    }*/);
  }
}