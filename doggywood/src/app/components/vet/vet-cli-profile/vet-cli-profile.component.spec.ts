import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCliProfileComponent } from './vet-cli-profile.component';

describe('VetCliProfileComponent', () => {
  let component: VetCliProfileComponent;
  let fixture: ComponentFixture<VetCliProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetCliProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetCliProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
