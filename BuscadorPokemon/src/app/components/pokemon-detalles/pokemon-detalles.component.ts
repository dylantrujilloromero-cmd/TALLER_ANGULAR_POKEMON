import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonStorageService } from '../../services/pokemon-storage';

@Component({
  selector: 'app-pokemon-detalles',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detalles.component.html',
  styleUrl: './pokemon-detalles.component.css'
})
export class PokemonDetallesComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly pokeService = inject(PokemonStorageService);

  pokemonData: any = null;
  cargando = true;

  ngOnInit(): void {
    const pokeName = this.route.snapshot.params['name'];

    this.pokeService.consultarPokemon(pokeName).subscribe({
      next: (data) => {
        this.pokemonData = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Se quemo esta vaina. No llego ningun dato:', err);
        this.cargando = false;
      }
    });
  }
}
