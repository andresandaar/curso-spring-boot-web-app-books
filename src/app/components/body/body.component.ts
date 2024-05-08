import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { CategoriaResponseRest, Categorum } from '../../interfaces/categorias.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {

  public categorias:Categorum[]=[];
  constructor(private categoriasService:CategoriasService){

  }
  ngOnInit(): void {
    this.getCategorias();
  }
  getCategorias(){
    this.categoriasService.getCategorias().subscribe((categoriaResponse:CategoriaResponseRest)=>{
     this.categorias=categoriaResponse.categoriaResponse.categoria;
    })
  }


}
