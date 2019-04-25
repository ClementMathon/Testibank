import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondesagentsComponent } from './gestiondesagents.component';

describe('GestiondesagentsComponent', () => {
  let component: GestiondesagentsComponent;
  let fixture: ComponentFixture<GestiondesagentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestiondesagentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiondesagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
