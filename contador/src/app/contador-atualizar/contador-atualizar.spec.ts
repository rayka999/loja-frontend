import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContadorAtualizar } from './contador-atualizar';

describe('ContadorAtualizar', () => {
  let component: ContadorAtualizar;
  let fixture: ComponentFixture<ContadorAtualizar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorAtualizar],
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorAtualizar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
