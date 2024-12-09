import { Component, inject } from '@angular/core';
import { PersonalInformationComponent } from "../personal-information/personal-information.component";
import { ParentalDetailsComponent } from "../parental-details/parental-details.component";
import { AcademicDetailsComponent } from "../academic-details/academic-details.component";
import { ExtracurricularActivitiesComponent } from "../extracurricular-activities/extracurricular-activities.component";
import { FormService } from '../../../../services/form.service';

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [PersonalInformationComponent, ParentalDetailsComponent, AcademicDetailsComponent, ExtracurricularActivitiesComponent],
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.css'
})
export class SubmitComponent {



}
