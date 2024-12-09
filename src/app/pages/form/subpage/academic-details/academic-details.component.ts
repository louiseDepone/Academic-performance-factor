import { Component, inject, signal } from '@angular/core';
import { FormService } from '../../../../services/form.service';

@Component({
  selector: 'app-academic-details',
  standalone: true,
  imports: [],
  templateUrl: './academic-details.component.html',
  styleUrl: './academic-details.component.css'
})
export class AcademicDetailsComponent {
  
    formService: FormService = inject(FormService);
    form = signal<{
      tutoring: string;
      studyTime: string;
      absences: number | null;
      yearLevel: string;
      subject: string ;
    }>({
      tutoring: '',
      studyTime: '',
      absences: null,
      yearLevel: '',
      subject: ''
    })
  
    constructor() {
      const initialData = this.formService.progressForm()[2].form;
      this.form.set({
        tutoring: initialData.tutoring,
        studyTime: initialData.studyTime,
        absences: initialData.absences,
        yearLevel: initialData.yearLevel,
        subject: initialData.subject,
        
      });
    }
  
    updateForm(key: string, value: any) {
      const updatedValue = key === 'absences' ? parseInt(value.value, 10) || null : value.value;
  
      this.form.update((old) => ({
        ...old,
        [key]: updatedValue,
      }));
  
      this.formService.updateForm(2, this.form());
    }

}
