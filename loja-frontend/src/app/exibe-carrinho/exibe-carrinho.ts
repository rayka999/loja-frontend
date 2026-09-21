import { Component, inject } from '@angular/core';
import { CarrinhoService } from '../carrinho-service';

@Component({
  imports: [],
  selector: 'app-exibe-carrinho',
  styleUrl: './exibe-carrinho.scss',
  templateUrl: './exibe-carrinho.html',
})
export class ExibeCarrinho {
  #Itens=inject(CarrinhoService)

  qtdTotalItens(){
    
  }
}
