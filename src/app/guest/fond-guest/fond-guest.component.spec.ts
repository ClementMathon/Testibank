import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondGuestComponent } from './fond-guest.component';

describe('FondGuestComponent', () => {
  let component: FondGuestComponent;
  let fixture: ComponentFixture<FondGuestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondGuestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
