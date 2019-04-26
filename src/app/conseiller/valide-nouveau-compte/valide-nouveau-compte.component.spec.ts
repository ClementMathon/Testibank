import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValideNouveauCompteComponent } from './valide-nouveau-compte.component';

describe('ValideNouveauCompteComponent', () => {
  let component: ValideNouveauCompteComponent;
  let fixture: ComponentFixture<ValideNouveauCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValideNouveauCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValideNouveauCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
