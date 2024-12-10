import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario = { usuario: '', password: '', tipo: 'cliente' };

  constructor(private authService: AuthService) {}

  registrarUsuario() {
    this.authService.register(this.usuario).subscribe(
      () => {
        alert('Usuario registrado exitosamente');
      },
      (error) => {
        alert('Error al registrar usuario');
        console.error(error);
      }
    );
  }
}
