import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmSchoolComponent } from './farm-school.component';

describe('FarmSchoolComponent', () => {
  let component: FarmSchoolComponent;
  let fixture: ComponentFixture<FarmSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
