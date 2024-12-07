import { Component, inject, signal } from '@angular/core';
import { FormService } from '../../../../services/form.service';

@Component({
  selector: 'app-parental-details',
  standalone: true,
  imports: [],
  templateUrl: './parental-details.component.html',
  styleUrl: './parental-details.component.css'
})
export class ParentalDetailsComponent {

  formService: FormService = inject(FormService);

  form = signal<{
   parentEducation: string; 
   parentSupport: string; 
  }>({
    parentEducation: '',
    parentSupport: '',
  })

  constructor() {
    const initialData = this.formService.progressForm()[1].form;
    this.form.set({
      parentSupport: initialData.parentSupport,
      parentEducation: initialData.parentEducation,
    });
  }

  updateForm(key: string, value: any) {
    const updatedValue =  value.value;

    this.form.update((old) => ({
      ...old,
      [key]: updatedValue,
    }));

    this.formService.updateForm(1, this.form());
  }


}
