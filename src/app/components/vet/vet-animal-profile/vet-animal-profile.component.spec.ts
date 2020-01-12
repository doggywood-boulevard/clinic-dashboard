import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetAnimalProfileComponent } from './vet-animal-profile.component';

describe('VetAnimalProfileComponent', () => {
  let component: VetAnimalProfileComponent;
  let fixture: ComponentFixture<VetAnimalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetAnimalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetAnimalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
