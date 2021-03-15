import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemon : any;

  constructor(
    private pokeService : PokemonService
  ) {  }

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList(){
    this.pokeService.getList().subscribe((data : any)=> {
      if(data){
        console.log(data['results'])
        this.pokemon = data['results'];
      }
    })
  }

}
