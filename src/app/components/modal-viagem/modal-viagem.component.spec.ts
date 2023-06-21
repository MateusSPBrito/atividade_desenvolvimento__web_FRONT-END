import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViagemComponent } from './modal-viagem.component';

describe('ModalViagemComponent', () => {
  let component: ModalViagemComponent;
  let fixture: ComponentFixture<ModalViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalViagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
