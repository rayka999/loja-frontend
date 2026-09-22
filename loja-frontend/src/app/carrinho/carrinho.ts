import { Component, inject } from '@angular/core';

import { CarrinhoService } from '../carrinho-service';

@Component({
  imports: [],
  selector: 'app-carrinho',
  styleUrl: './carrinho.scss',
  templateUrl: './carrinho.html',
})
export class Carrinho {

  #carrinho = inject(CarrinhoService);

  readonly itens = this.#carrinho.itens;

  addItem(id: string | number): void {
    const item = this.itens().find(
      item => item.produto.id === id
    );

    if (item) {
      this.#carrinho.AumQtdItem(item);
    }
  }

  aumItem(id: string | number): void {
    const item = this.itens().find(
      item => item.produto.id === id
    );

    if (item) {
      this.#carrinho.AumQtdItem(item);
    }
  }

  dimItem(id: string | number): void {
    const item = this.itens().find(
      item => item.produto.id === id
    );

    if (item) {
      this.#carrinho.DimQtdItem(item);
    }
  }

  remItem(id: string | number): void {
    const item = this.itens().find(
      item => item.produto.id === id
    );

    if (item) {
      this.#carrinho.removerItem(item);
    }
  }

  obterTotal(): string {
    return this.#carrinho.obterTotalCompra();
  }
}