import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexcardsComponent } from './texcards.component';

describe('TexcardsComponent', () => {
  let component: TexcardsComponent;
  let fixture: ComponentFixture<TexcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
