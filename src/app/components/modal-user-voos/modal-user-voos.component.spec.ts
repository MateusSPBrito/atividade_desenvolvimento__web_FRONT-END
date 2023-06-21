import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserVoosComponent } from './modal-user-voos.component';

describe('ModalUserVoosComponent', () => {
  let component: ModalUserVoosComponent;
  let fixture: ComponentFixture<ModalUserVoosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUserVoosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUserVoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
