import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../produto.service';
import { Produto } from '../../produto.model';

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

  constructor(){
    this.carregarTodos()
  }

  carregarTodos():void{
    this.#produtoService.obterTodos().subscribe(res=> {
      this.produtos.set(res)
    })
  }
}