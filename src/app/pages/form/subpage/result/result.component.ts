import { Component, inject } from '@angular/core';
import { SubmitComponent } from "../submit/submit.component";
import { FormService } from '../../../../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [SubmitComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
 // this.formService.submitCompleteForm();
 router: Router = inject(Router);  
 formService: FormService = inject(FormService);

//  oninit

ngOnInit(): void {
  this.formService.submitCompleteForm();
}

retake(){
  // format all the form data
  this.formService.updateForm(0, {
    studentId: '',
    age: null,
    gender: '',
  });

  this.formService.updateForm(1, {
    parentEducation: '',
    parentSupport: ''
  });

  this.formService.updateForm(2, {
    tutoring: '',
    studyTime: '',
    absences: '',
    yearLevel:'',
    subject:null
  });

  this.formService.updateForm(3, {
    extracuricularg: '',
  });

  this.router.navigate([`form/1`]);


}


}
