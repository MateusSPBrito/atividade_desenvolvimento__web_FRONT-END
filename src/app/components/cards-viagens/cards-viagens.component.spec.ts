import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsViagensComponent } from './cards-viagens.component';

describe('CardsViagensComponent', () => {
  let component: CardsViagensComponent;
  let fixture: ComponentFixture<CardsViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsViagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
