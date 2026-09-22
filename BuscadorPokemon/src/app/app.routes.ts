import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';
import { BulbasaurComponent } from './components/buscador-pokemon/bulbasaur.component';
import { CharizardComponent } from './components/buscador-pokemon/charizard.component';
import { charmanderComponent } from './components/buscador-pokemon/charmander.component';
import { GengarComponent } from './components/buscador-pokemon/gengar.component';
import { MewtwoComponent } from './components/buscador-pokemon/mewtwo.component';
import { SquirtleComponent } from './components/buscador-pokemon/squirtle.component';
import { PokemonDetallesComponent } from './components/pokemon-detalles/pokemon-detalles.component';
import { PokemonListaComponent } from './components/pokemon-lista/pokemon-lista.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Registro', pathMatch: 'full' },
  { path: 'Registro', component: RegistroUsuarioComponent },
  { path: 'Buscador', component: BuscadorPokemonComponent },
  { path: '**', redirectTo: 'Registro' },
  { path: 'Bulbasaur_manual', component: BulbasaurComponent },
  { path: 'Charizard_manual', component: CharizardComponent },
  { path: 'Charmander_manual', component: charmanderComponent },
  { path: 'Gengar_manual', component: GengarComponent },
  { path: 'Mewtwo_manual', component: MewtwoComponent },
  { path: 'Squirtle_manual', component: SquirtleComponent },
  { path: 'pokemon-lista', component: PokemonListaComponent },
  { path: 'Pokemon/:name', component: PokemonDetallesComponent }

];
