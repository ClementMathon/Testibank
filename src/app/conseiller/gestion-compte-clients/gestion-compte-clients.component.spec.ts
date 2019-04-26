import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCompteClientsComponent } from './gestion-compte-clients.component';

describe('GestionCompteClientsComponent', () => {
  let component: GestionCompteClientsComponent;
  let fixture: ComponentFixture<GestionCompteClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCompteClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCompteClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
