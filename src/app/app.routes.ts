import { Routes } from '@angular/router';
import { MainComponent } from './pages/form/main/main.component';
import { PersonalInformationComponent } from './pages/form/subpage/personal-information/personal-information.component';
import { ParentalDetailsComponent } from './pages/form/subpage/parental-details/parental-details.component';
import { AcademicDetailsComponent } from './pages/form/subpage/academic-details/academic-details.component';
import { ExtracurricularActivitiesComponent } from './pages/form/subpage/extracurricular-activities/extracurricular-activities.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
      path: '1',
      component: PersonalInformationComponent
      },
      {
        path: '2',
        component: ParentalDetailsComponent
      },
      {
        path: '3',
        component: AcademicDetailsComponent
      },
      {
        path: '4',
        component: ExtracurricularActivitiesComponent
      }

    ]
  }
];
