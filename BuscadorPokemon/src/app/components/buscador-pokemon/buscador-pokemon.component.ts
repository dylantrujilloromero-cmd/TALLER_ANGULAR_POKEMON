import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TipoPokemon = 'electric' | 'fire' | 'grass' | 'water';

interface Pokemon {
  nombre: string;
  tipo: string;
  tipoClase: TipoPokemon;
  numero: string;
  avatar: string;
  hp: number;
  ataque: number;
  defensa: number;
  velocidad: number;
}

@Component({
  selector: 'app-buscador-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador-pokemon.component.html',
  styleUrl: './buscador-pokemon.component.css'
})
export class BuscadorPokemonComponent {
  busqueda = 'Charmander';

  pokemons: Pokemon[] = [
    {
      nombre: 'Pikachu',
      tipo: 'Eléctrico',
      tipoClase: 'electric',
      numero: '#025',
      avatar: '⚡',
      hp: 35,
      ataque: 55,
      defensa: 40,
      velocidad: 90
    },
    {
      nombre: 'Charmander',
      tipo: 'Fuego',
      tipoClase: 'fire',
      numero: '#004',
      avatar: '🔥',
      hp: 39,
      ataque: 52,
      defensa: 43,
      velocidad: 65
    },
    {
      nombre: 'Bulbasaur',
      tipo: 'Planta',
      tipoClase: 'grass',
      numero: '#001',
      avatar: '🌿',
      hp: 45,
      ataque: 49,
      defensa: 49,
      velocidad: 45
    },
    {
      nombre: 'Squirtle',
      tipo: 'Agua',
      tipoClase: 'water',
      numero: '#007',
      avatar: '💧',
      hp: 44,
      ataque: 48,
      defensa: 65,
      velocidad: 43
    }
  ];

  pokemonActual: Pokemon = this.pokemons[1];

  buscarPokemon(): void {
    const texto = this.busqueda.trim().toLowerCase();

    const encontrado = this.pokemons.find((pokemon) => {
      return pokemon.nombre.toLowerCase().includes(texto) || pokemon.tipo.toLowerCase().includes(texto);
    });

    this.pokemonActual = encontrado ?? this.pokemons[0];
  }

  ngOnInit(): void {
    this.buscarPokemon();
  }
}
