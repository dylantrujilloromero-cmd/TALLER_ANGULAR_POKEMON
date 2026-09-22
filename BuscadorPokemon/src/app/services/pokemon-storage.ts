import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';

export interface PokemonTarjeta {
  id: number;
  nombre: string;
  imagen: string;
  tipo: string;
  baseExperience: string;
  esFavorito: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonStorageService {
  private readonly http = inject(HttpClient);
  private readonly STORAGE_KEY = 'equipo_pokemon_registrado';

  misPokemons = signal<PokemonTarjeta[]>([]);

  constructor() {
    this.cargarDesdeStorage();
  }

  private cargarDesdeStorage(): void {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      this.misPokemons.set(JSON.parse(data) as PokemonTarjeta[]);
    }
  }

  buscarEnApi(nombreId: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${nombreId}`);
  }

  guardarPokemon(nuevo: PokemonTarjeta): void {
    const actualizados = [...this.misPokemons(), nuevo];
    this.misPokemons.set(actualizados);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(actualizados));
  }

  actualizarPokemon(id: number): void {
    const actualizados = this.misPokemons().map((poke) => {
      if (poke.id === id) {
        return { ...poke, esFavorito: !poke.esFavorito };
      }
      return poke;
    });

    this.misPokemons.set(actualizados);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(actualizados));
  }

  liberarPokemon(id: number): void {
    const filtrado = this.misPokemons().filter((poke) => poke.id !== id);

    this.misPokemons.set(filtrado);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtrado));
  }

  consultarPokemon(name: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  }
}

