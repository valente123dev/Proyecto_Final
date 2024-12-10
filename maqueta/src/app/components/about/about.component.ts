import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  correo: string = '';

  constructor(private http: HttpClient) {}

  guardarCorreo(event: Event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    if (this.correo) {
      const body = { correo: this.correo };
      
      this.http.post('http://127.0.0.1:8000/api/guardar-correo', body)
        .subscribe(response => {
          console.log('Correo guardado:', response);
        }, error => {
          console.error('Error al guardar el correo:', error);
        });
    }
}
}