import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteClientDetailComponent } from './compte-client-detail.component';

describe('CompteClientDetailComponent', () => {
  let component: CompteClientDetailComponent;
  let fixture: ComponentFixture<CompteClientDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteClientDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteClientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
