import { Service, signal } from '@angular/core';
import { Item } from './carrinho.model';

@Service()
export class CarrinhoService {
    readonly itens=signal<Item[]>([])

    addItem(item:Item){
        this.itens.update(currentItens=> [...currentItens,item])
    }

    removerItem(idItem:number){
        this.itens.update(currentItens=>
            currentItens.filter(item=> item.id !== idItem)
        )
    }

    AumQtdItem(idItem: number,qtd:number) {
        this.itens.update(currentItens => 
            currentItens.map(item =>
                item.id === idItem ? { ...item, quantidade: item.quantidade + qtd } : item
            )
        );
    }

    DimQtdItem(idItem: number, qtd: number) {
        this.itens.update(currentItens =>
            currentItens.map(item =>
            item.id === idItem
                ? { ...item, quantidade: Math.max(1, item.quantidade - qtd) } //se não usar, o valor pode ser negativo ou 0
                : item
            )
        );
        }

    obterTotalCompra(){
        let total=0;
        this.itens().forEach(item => {
            total+=(item.produto.preco*item.quantidade)
        });
        return total.toFixed(2);
    }
}
