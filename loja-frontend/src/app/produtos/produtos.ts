import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../produto.service';
import { Produto } from '../../produto.model';
import { CarrinhoService } from '../carrinho-service';
import { Item } from '../carrinho.model';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.scss'
})
export class ProdutoComponent {

  #produtoService = inject(ProdutoService);
  produtos=signal<Produto[]>([])
  #carrinho=inject(CarrinhoService)

  constructor(){
    this.carregarTodos()
  }

  carregarTodos():void{
    this.#produtoService.obterTodos().subscribe(res=> {
      this.produtos.set(res)
    })
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
  }
  console.log(this.#carrinho.itens());
}
}