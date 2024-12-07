import { Component, inject, signal } from '@angular/core';
import { FormService } from '../../../../services/form.service';

@Component({
  selector: 'app-extracurricular-activities',
  standalone: true,
  imports: [],
  templateUrl: './extracurricular-activities.component.html',
  styleUrl: './extracurricular-activities.component.css'
})
export class ExtracurricularActivitiesComponent {
    
      formService: FormService = inject(FormService);
      form = signal<{
        extracuricularg: string;
      }>({
        extracuricularg: '',
      })
    
      constructor() {
        const initialData = this.formService.progressForm()[3].form;
        this.form.set({
          extracuricularg: initialData.extracuricularg,
        });
      }
    
      updateForm(key: string, value: any) {
        this.form.update((old) => ({
          ...old,
          [key]: value.value,
        }));
    
        this.formService.updateForm(3, this.form());
      }

}
