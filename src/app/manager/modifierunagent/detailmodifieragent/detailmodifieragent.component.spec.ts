import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailmodifieragentComponent } from './detailmodifieragent.component';

describe('DetailmodifieragentComponent', () => {
  let component: DetailmodifieragentComponent;
  let fixture: ComponentFixture<DetailmodifieragentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmodifieragentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailmodifieragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
