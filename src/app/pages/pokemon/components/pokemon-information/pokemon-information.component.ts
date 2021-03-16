import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-information',
  templateUrl: './pokemon-information.component.html',
  styleUrls: ['./pokemon-information.component.scss']
})
export class PokemonInformationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private pokeService : PokemonService
    ) { }

  public pokemonName: string = "";
  public pokemon!: Pokemon;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pokemonName = params['name'];
      this.getPokemon(this.pokemonName);
    })
  }

  getPokemon(name: string){
    this.pokeService.getPokemon(name).subscribe((data: Pokemon)=> {
      if(data){
        this.pokemon = data;
      }
    })
  }
}
