import { Routes } from '@angular/router';
import { ProdutoComponent } from './produtos/produtos';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Carrinho } from './carrinho/carrinho';

export const routes: Routes = [
    {path:"produtos", component:ProdutoComponent},
    {path:'produtos/:id',component:ProdutoDetalhe},
    {path:'', redirectTo:'/produtos',pathMatch:'full'},
    {path:"lista-carrinho", component:Carrinho}
];
