import { Autor } from '../../autor/interface/autor.interface';

export interface Rola {
  id: number;
  titulo: string;
  duracion: number;
  autor: Autor;
}
