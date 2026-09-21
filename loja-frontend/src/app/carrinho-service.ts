import { Service, signal } from '@angular/core';
import { Item } from './carrinho.model';

@Service()
export class CarrinhoService {
   readonly itens = signal<Item[]>([]);
  addItem(item: Item): boolean {
    if (!item) {
      return false;
    }
    const encontrado = this.itens().find(
      it => it.produto.id === item.produto.id
    );
    if (encontrado) {
      return this.AumQtdItem(item);
    }
    this.itens.update(itens => [
      ...itens,
      item
    ]);
    return true;
  }

  AumQtdItem(item: Item): boolean {
    const encontrado = this.itens().find(
      it => it.produto.id === item.produto.id
    );
    if (!encontrado) {
      return false;
    }
    this.itens.update(itens =>
      itens.map(it =>
        it.produto.id === item.produto.id
          ? {
              ...it,
              quantidade: it.quantidade + 1
            }
          : it
      )
    );
    return true;
  }

  removerItem(item: Item): void {
    this.itens.update(itens =>
      itens.filter(
        it => it.produto.id !== item.produto.id
      )
    );
  }

  DimQtdItem(item: Item): boolean {
    this.itens.update(itens =>
      itens
        .map(it =>
          it.produto.id === item.produto.id
            ? {
                ...it,
                quantidade: it.quantidade - 1
              }
            : it
        )
        .filter(it => it.quantidade > 0)
    );
    return true;
  }

  obterTotalCompra(): string {
    let total = 0;
    this.itens().forEach(item => {
      total += item.produto.preco * item.quantidade;
    });
    return total.toFixed(2);
  }
}
