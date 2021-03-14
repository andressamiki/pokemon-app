import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonInformationComponent } from './components/pokemon-information/pokemon-information.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';


const router : Routes = [
  {
    path: '',
    component: PokemonListComponent
  },{
    path: 'informacao',
    component: PokemonInformationComponent
  },
] 

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(router)
  ]
})
export class PokemonRoutingModule { }
