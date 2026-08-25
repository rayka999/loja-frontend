import { Routes } from '@angular/router';
import { ProdutoComponent } from './produtos/produtos';

export const routes: Routes = [
    {path:"produtos", component:ProdutoComponent},
    {path:'', redirectTo:'/produtos',pathMatch:'full'}
];
