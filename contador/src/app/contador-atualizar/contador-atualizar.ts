import { Component, inject } from '@angular/core';
import { ContadorService } from '../contador-service';

@Component({
  imports: [],
  selector: 'app-contador-atualizar',
  styleUrl: './contador-atualizar.scss',
  templateUrl: './contador-atualizar.html',
})
export class ContadorAtualizar {
  readonly #contadorService=inject(ContadorService)
  get valorAtual (){
    return this.#contadorService.contador()
  }
  inc(){
    this.#contadorService.incrementar()
  }

  dec(){
    this.#contadorService.decrementar()
  }

  reset(){
    this.#contadorService.reiniciar()
  }
}
