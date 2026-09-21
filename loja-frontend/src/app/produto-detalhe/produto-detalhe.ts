import { Component,inject,input,OnInit,signal } from '@angular/core';
import { ProdutoService } from '../../produto.service';
import { Produto } from '../../produto.model';

@Component({
  imports: [],
  selector: 'app-produto-detalhe',
  styleUrl: './produto-detalhe.scss',
  templateUrl: './produto-detalhe.html',
})
export class ProdutoDetalhe implements OnInit{
#produtoService = inject(ProdutoService);
id = input<number>();

produto = signal<Produto|undefined>(undefined);

ngOnInit(): void {
  const id = this.id();

  if (id !== undefined) {
    this.#produtoService.obterProdID(id).subscribe(prod => {
      this.produto.set(prod);
    });
  }
}

}
