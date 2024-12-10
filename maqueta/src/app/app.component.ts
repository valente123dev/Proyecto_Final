import { Component, OnInit } from '@angular/core';
import { AuthService,  } from './auth.service';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports:[HeaderComponent, FormsModule, CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  tipoUsuario: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Suscribirse al Observable para reaccionar a los cambios
    this.authService.getTipoUsuarioObservable().subscribe((tipo) => {
      this.tipoUsuario = tipo;
    });
  }

  logout() {
    this.authService.logout();
  }
}
