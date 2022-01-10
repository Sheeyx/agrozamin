import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedialibraryComponent } from './medialibrary.component';

describe('MedialibraryComponent', () => {
  let component: MedialibraryComponent;
  let fixture: ComponentFixture<MedialibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedialibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedialibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
