import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserViagensComponent } from './card-user-viagens.component';

describe('CardUserViagensComponent', () => {
  let component: CardUserViagensComponent;
  let fixture: ComponentFixture<CardUserViagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUserViagensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUserViagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
