import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list.component';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private api = environment;

  httpOptions = {

  }

  constructor() { }
}
