import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtracurricularActivitiesComponent } from './extracurricular-activities.component';

describe('ExtracurricularActivitiesComponent', () => {
  let component: ExtracurricularActivitiesComponent;
  let fixture: ComponentFixture<ExtracurricularActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtracurricularActivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtracurricularActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
