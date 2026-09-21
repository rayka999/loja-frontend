import { Service, signal } from '@angular/core';
import { Item } from './carrinho.model';

@Service()
export class CarrinhoService {
    readonly itens=signal<Item[]>([])

    addItem(item:Item){
        if (item){
            let adicionados=this.itens()
            let existe=false
            adicionados.forEach(it=>{
                if(it.produto===item.produto){
                    this.AumQtdItem(item)
                    existe=true
                }
            })
            if(!existe){
                this.itens().push(item)
                return true
            }
        }
        return false
    }

    removerItem(Item:Item){
        this.itens.update(currentItens=>
            currentItens.filter(item=> item.produto !== Item.produto)
        )
    }

    AumQtdItem(Item: Item):boolean {
        if (Item){
            let encontrado=this.itens().find(it=> it.produto===Item.produto)
            if (encontrado){
                encontrado.quantidade++
                return true
            }
        }
        return false
    }

    DimQtdItem(Item:Item) {
       if (Item){
            let encontrado=this.itens().find(it=> it.produto===Item.produto)
            if (encontrado){
                encontrado.quantidade--
                return true
            }
        }
        return false
    }

    obterTotalCompra(){
        let total=0;
        this.itens().forEach(item => {
            total+=(item.produto.preco*item.quantidade)
        });
        return total.toFixed(2);
    }
}
