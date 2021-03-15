import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonInformationComponent } from './components/pokemon-information/pokemon-information.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PokemonInformationComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    HttpClientModule
  ]
})
export class PokemonModule { }
