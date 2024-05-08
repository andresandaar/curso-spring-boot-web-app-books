export interface CategoriaResponseRest {
  metadata: Metadaum[]
  categoriaResponse: CategoriaResponse
}

export interface Metadaum {
  tipo: string
  codigo: string
  dato: string
}

export interface CategoriaResponse {
  categoria: Categorum[]
}

export interface Categorum {
  id: number
  nombre: string
  descripcion: string
}

