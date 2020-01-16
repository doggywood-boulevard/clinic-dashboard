import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRecLoginComponent } from './emp-rec-login.component';

describe('EmpRecLoginComponent', () => {
  let component: EmpRecLoginComponent;
  let fixture: ComponentFixture<EmpRecLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpRecLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRecLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
