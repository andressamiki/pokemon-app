import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list.component';

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

  public getList(): any{
    return this.httpClient.get(this.apiUrl);
  }
}
