import { Component, signal } from '@angular/core';
import { ContadorAtualizar } from './contador-atualizar/contador-atualizar';
import { DobroContador } from './dobro-contador/dobro-contador';

@Component({
  selector: 'app-root',
  imports: [ContadorAtualizar, DobroContador],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('contador');
}
