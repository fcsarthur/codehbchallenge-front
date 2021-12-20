import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcardComponent } from './schoolcard.component';

describe('SchoolcardComponent', () => {
  let component: SchoolcardComponent;
  let fixture: ComponentFixture<SchoolcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
