import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliProfileComponent } from './cli-profile.component';

describe('CliProfileComponent', () => {
  let component: CliProfileComponent;
  let fixture: ComponentFixture<CliProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
