import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  CategoriaResponseRest } from '../interfaces/categorias.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
private url:string ="http://localhost:8092/v1/categorias"
  constructor(private http:HttpClient) { }

  getCategorias():Observable<CategoriaResponseRest>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':'Basic ' + btoa("Alfredo" + ":" + "alfredo123")

    })
    return this.http.get<CategoriaResponseRest>(`${this.url}`,{headers:headers});
  }
}
