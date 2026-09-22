import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPokemonComponent } from './buscador-pokemon.component';

describe('BuscadorPokemonComponent', () => {
  let component: BuscadorPokemonComponent;
  let fixture: ComponentFixture<BuscadorPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorPokemonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscadorPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filterpokemon when searching by name', () => {
    component.busqueda = 'char';
    component.buscarPokemon();

    expect(component.resultados.length).toBeGreaterThan(0);
    expect(component.resultados.some(pokemon => pokemon.nombre === 'Charmander')).toBeTrue();
  });
});
