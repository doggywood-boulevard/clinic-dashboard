import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptCreateComponent } from './appt-create.component';

describe('ApptCreateComponent', () => {
  let component: ApptCreateComponent;
  let fixture: ComponentFixture<ApptCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log("test-ApptCreateComponent")
    //     expect(component).toBeTruthy();
  });
});
