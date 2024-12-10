import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  // Estado reactivo del tipo de usuario
  private tipoUsuarioSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    if (typeof window !== 'undefined') {
      const tipoUsuario = localStorage.getItem('tipoUsuario');
      this.tipoUsuarioSubject.next(tipoUsuario);
    }
  }

  // Registro de usuario
  register(usuario: { usuario: string; password: string; tipo: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, usuario);
  }

  // Login de usuario
  login(credenciales: { usuario: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credenciales);
  }

  // Obtener el tipo de usuario desde el almacenamiento local
  getTipoUsuario(): string | null {
    return localStorage.getItem('tipoUsuario');
  }

  // Guardar el tipo de usuario en el almacenamiento local y actualizar el estado
  setTipoUsuario(tipo: string): void {
    if (typeof window !== 'undefined'){
      localStorage.setItem('tipoUsuario', tipo);
      this.tipoUsuarioSubject.next(tipo); 
    }
   
  }

  // Cerrar sesión y actualizar el estado
  logout(): void {
    localStorage.removeItem('tipoUsuario');
    this.tipoUsuarioSubject.next(null);
  }

  // Obtener un Observable para que los componentes se suscriban al tipo de usuario
  getTipoUsuarioObservable(): Observable<string | null> {
    return this.tipoUsuarioSubject.asObservable();
  }
}
