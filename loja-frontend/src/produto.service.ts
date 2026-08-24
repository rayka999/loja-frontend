import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';

@Service()
export class ProdutoService {
    readonly api='http://localhost:3000';
    readonly #http=inject(HttpClient)

    obterTodos(): Observable<Produto[]>{
        return this.#http.get<Produto[]>(`${this.api}/produtos`)
    }

}