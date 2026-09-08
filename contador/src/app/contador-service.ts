import { Service,signal } from '@angular/core';

@Service()
export class ContadorService {
    readonly contador =signal<number>(0)

    incrementar(){
        this.contador.update((valor)=> valor+1)
    }

    decrementar(){
        this.contador.update((valor=> valor-1))
    }

    reiniciar(){
        this.contador.set(0)
    }
}