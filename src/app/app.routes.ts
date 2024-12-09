import { Routes } from '@angular/router';
import { MainComponent } from './pages/form/main/main.component';
import { PersonalInformationComponent } from './pages/form/subpage/personal-information/personal-information.component';
import { ParentalDetailsComponent } from './pages/form/subpage/parental-details/parental-details.component';
import { AcademicDetailsComponent } from './pages/form/subpage/academic-details/academic-details.component';
import { ExtracurricularActivitiesComponent } from './pages/form/subpage/extracurricular-activities/extracurricular-activities.component';
import { SubmitComponent } from './pages/form/subpage/submit/submit.component';
import { ResultComponent } from './pages/form/subpage/result/result.component';

export const routes: Routes = [
  {
    path: 'form',
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
      },
      {
        path: '5',
        component: SubmitComponent
      },
    ],

  },
  {
    path: 'result',
    component: ResultComponent,
  }
];
