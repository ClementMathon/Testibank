import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {GestionDesAgentsComponent} from './gestionsdesagents.component';

describe('TableListComponent', () => {
  let component: GestionDesAgentsComponent;
  let fixture: ComponentFixture<GestionDesAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestionDesAgentsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
