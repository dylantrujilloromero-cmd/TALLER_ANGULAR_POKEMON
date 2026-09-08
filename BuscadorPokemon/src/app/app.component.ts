import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService, Pokemon } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchTerm = '';
  pokemon: Pokemon | null = null;
  loading = false;
  error = '';

  constructor(private pokemonService: PokemonService) {}

  buscar(): void {
    const term = this.searchTerm.trim();
    if (!term) {
      this.error = 'Escribe el nombre de un Pokémon.';
      this.pokemon = null;
      return;
    }

    this.loading = true;
    this.error = '';
    this.pokemon = null;

    this.pokemonService.getPokemon(term).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.loading = false;
      },
      error: () => {
        this.error = `No se encontró ningún Pokémon con el nombre "${term}".`;
        this.loading = false;
      },
    });
  }
}
