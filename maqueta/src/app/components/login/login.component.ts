import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credenciales = { usuario: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    this.authService.login(this.credenciales).subscribe(
      (response: any) => {
        this.authService.setTipoUsuario(response.tipo); // Actualiza el estado
        alert('Login exitoso');
        this.router.navigate(['/']);
      },
      (error) => {
        alert('Credenciales incorrectas');
        console.error(error);
      }
    );
  }
}