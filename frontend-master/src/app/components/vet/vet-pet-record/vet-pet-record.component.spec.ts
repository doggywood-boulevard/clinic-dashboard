import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetPetRecordComponent } from './vet-pet-record.component';

describe('VetPetRecordComponent', () => {
  let component: VetPetRecordComponent;
  let fixture: ComponentFixture<VetPetRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetPetRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetPetRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
