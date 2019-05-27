import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletNewsComponent } from './onglet-news.component';

describe('OngletNewsComponent', () => {
  let component: OngletNewsComponent;
  let fixture: ComponentFixture<OngletNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngletNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
