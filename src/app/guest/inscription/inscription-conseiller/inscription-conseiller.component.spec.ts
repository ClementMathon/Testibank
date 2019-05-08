import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionConseillerComponent } from './inscription-conseiller.component';

describe('InscriptionConseillerComponent', () => {
  let component: InscriptionConseillerComponent;
  let fixture: ComponentFixture<InscriptionConseillerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionConseillerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionConseillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
