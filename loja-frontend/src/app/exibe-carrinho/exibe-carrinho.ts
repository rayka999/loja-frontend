import { Component, inject, computed } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

@Component({
  imports: [],
  selector: 'app-exibe-carrinho',
  styleUrl: './exibe-carrinho.scss',
  templateUrl: './exibe-carrinho.html',
})
export class ExibeCarrinho {
   #carrinho = inject(CarrinhoService);

   qtdTotalItens = computed(() =>
    this.#carrinho.itens().reduce(
      (total, item) => total + item.quantidade,
      0
    )
  );
}
