import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrolabComponent } from './agrolab.component';

describe('AgrolabComponent', () => {
  let component: AgrolabComponent;
  let fixture: ComponentFixture<AgrolabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrolabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrolabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
