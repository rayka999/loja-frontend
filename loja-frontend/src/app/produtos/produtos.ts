import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../produto.service';
import { Produto } from '../../produto.model';
import { CarrinhoService } from '../carrinho-service';
import { Item } from '../carrinho.model';
import { ExibeCarrinho } from '../exibe-carrinho/exibe-carrinho';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, ExibeCarrinho],
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss'
})
export class ProdutoComponent {
  valor=signal<number>(0)

  #produtoService = inject(ProdutoService);
  produtos=signal<Produto[]>([])
  #carrinho=inject(CarrinhoService)

  constructor(){
    this.carregarTodos()
    this.carregarValor()
  }

  carregarTodos():void{
    this.#produtoService.obterTodos().subscribe(res=> {
      this.produtos.set(res)
    })
  }

  carregarValor(): void {
  this.valor.set(
    Number(this.#carrinho.obterTotalCompra())
  );
}

adicionar(Produto:Produto) {
  const produto = Produto;
  if (produto) {
    const it: Item = {
      id:Produto.id,
      produto:Produto,
      quantidade: 1
    };
    this.#carrinho.addItem(it);
    this.carregarValor()
  }
  console.log(this.#carrinho.itens());
}
}