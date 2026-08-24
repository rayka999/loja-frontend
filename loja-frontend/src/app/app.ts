import { Component, signal } from '@angular/core';
import { ProdutoComponent } from './produtos/produtos';

@Component({
  imports: [ProdutoComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('loja-frontend');
}
