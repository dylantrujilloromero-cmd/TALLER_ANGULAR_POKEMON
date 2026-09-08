import { Routes } from '@angular/router'
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Registro', pathMatch: 'full' },
    { path: 'Registro', component: RegistroUsuarioComponent },
    { path: 'Buscador', component: BuscadorPokemonComponent },
    { path: '**', redirectTo: 'Registro' }

];