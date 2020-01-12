import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecLandingComponent } from './rec-landing.component';

describe('RecLandingComponent', () => {
  let component: RecLandingComponent;
  let fixture: ComponentFixture<RecLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
