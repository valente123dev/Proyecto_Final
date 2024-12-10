import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInventarioService {
  private apiUrl = 'http://127.0.0.1:8000/api/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/productos'); // Cambia la URL según sea necesario
  }
  

  nuevoProducto(data: any) {
    return this.http.post(this.apiUrl+'/nuevoProducto', data);
  }
  actualizarProducto(data:any,id:number) {
    return this.http.put('http://127.0.0.1:8000/api/productos/'+id,data,{responseType:'json'});
  }

  eliminarProducto(id:number) {
    return this.http.delete('http://127.0.0.1:8000/api/productos/'+id,{responseType:'json'});
  }
}