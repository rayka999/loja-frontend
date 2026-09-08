import { Component, inject, computed } from '@angular/core';
import { ContadorService } from '../contador-service';

@Component({
  imports: [],
  selector: 'app-dobro-contador',
  styleUrl: './dobro-contador.scss',
  templateUrl: './dobro-contador.html',
})
export class DobroContador {
  readonly #contadorservice=inject(ContadorService)

  dobro = computed(()=>{
    return this.#contadorservice.contador()*2
  })
}
