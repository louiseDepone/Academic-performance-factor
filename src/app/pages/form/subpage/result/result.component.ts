import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SubmitComponent } from "../submit/submit.component";
import { FormService } from '../../../../services/form.service';
import { Router } from '@angular/router';
import { GnerateGradeService } from '../../../../services/gnerate-grade.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [SubmitComponent],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  router: Router = inject(Router);  
  formService: FormService = inject(FormService);
  generateGrade: GnerateGradeService = inject(GnerateGradeService);

  result: WritableSignal<any> = signal("Loading (2.2 <= GPA < 3.0)");

  ngOnInit(): void {

    const formData = this.formService.submitCompleteForm(); // Ensure correct structure
   
    for (const key in formData) {
      if (formData[key] === null) {
        alert("Please fill out all fields before submitting.");
        this.router.navigate(['form/5']);
        return;
      }
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    this.generateGrade.predictGrade(formData).pipe(
      catchError((err) => {
        console.error(err);
        alert("There was an error processing your request.");
        return (err); // Return default HELLO WORLD value to avoid breaking the stream
      })
    ).subscribe((data: any) => {
      console.log(data);
      this.result.set(data['Predicted Grade']);
      // Optional: Handle the response data further
    });
  }

  retake(): void {
    // Reset form data and navigate to form/1
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
      yearLevel: '',
      subject: null
    });

    this.formService.updateForm(3, {
      extracurricular: '',
    });

    this.router.navigate([`form/1`]);
  }
}
