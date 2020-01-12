import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliAnimalProfileComponent } from './cli-animal-profile.component';

describe('CliAnimalProfileComponent', () => {
  let component: CliAnimalProfileComponent;
  let fixture: ComponentFixture<CliAnimalProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliAnimalProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliAnimalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
