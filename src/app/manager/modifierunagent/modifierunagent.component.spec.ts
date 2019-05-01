import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierunagentComponent } from './modifierunagent.component';

describe('ModifierunagentComponent', () => {
  let component: ModifierunagentComponent;
  let fixture: ComponentFixture<ModifierunagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierunagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierunagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
