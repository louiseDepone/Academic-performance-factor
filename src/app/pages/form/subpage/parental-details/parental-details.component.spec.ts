import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentalDetailsComponent } from './parental-details.component';

describe('ParentalDetailsComponent', () => {
  let component: ParentalDetailsComponent;
  let fixture: ComponentFixture<ParentalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
