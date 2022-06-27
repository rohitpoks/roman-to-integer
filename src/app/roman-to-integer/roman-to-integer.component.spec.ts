import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanToIntegerComponent } from './roman-to-integer.component';

describe('RomanToIntegerComponent', () => {
  let component: RomanToIntegerComponent;
  let fixture: ComponentFixture<RomanToIntegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanToIntegerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanToIntegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
