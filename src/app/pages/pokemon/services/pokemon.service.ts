import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list.component';
import { PokemonList } from '../models/pokemon-list.model';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

	apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':'application/json'
		})
	};

	constructor(
		private httpClient: HttpClient
	) { }

  public getList(): Observable<PokemonList> {
    return this.httpClient.get(this.apiUrl, this.httpOptions) as Observable<PokemonList>;
  }

  public getPokemon(pokemon: string): Observable<Pokemon> {
    return this.httpClient.get(this.apiUrl + pokemon, this.httpOptions) as Observable<Pokemon>;
  }
}
