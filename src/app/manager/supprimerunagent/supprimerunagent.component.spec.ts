import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerunagentComponent } from './supprimerunagent.component';

describe('SupprimerunagentComponent', () => {
  let component: SupprimerunagentComponent;
  let fixture: ComponentFixture<SupprimerunagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerunagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerunagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
