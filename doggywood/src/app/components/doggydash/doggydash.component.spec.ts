import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggydashComponent } from './doggydash.component';

describe('DoggydashComponent', () => {
  let component: DoggydashComponent;
  let fixture: ComponentFixture<DoggydashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoggydashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoggydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
