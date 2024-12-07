import { Component, inject, signal } from '@angular/core';
import { FormService } from '../../../../services/form.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css',
})
export class PersonalInformationComponent {
  // Inject the FormService
  formService: FormService = inject(FormService);

  // Reactive Signal to manage the form state
  form  = signal<{
    studentId: string;
    age: number | null,
    gender: string;
  }>({
    studentId: '',
    age : null,
    gender: '',
  });

  constructor() {
    const initialData = this.formService.progressForm()[0].form;
    this.form.set({
      studentId: initialData.studentId,
      age: initialData.age,
      gender: initialData.gender,
    });
  }

  // Method to handle form updates
  updateForm(key: string, value: any) {
    const updatedValue = key === 'age' ? parseInt(value.value, 10) || null : value.value;

    this.form.update((old) => ({
      ...old,
      [key]: updatedValue,
    }));

    this.formService.updateForm(0, this.form());
  }

  ngOnInit() {
    console.log('Initialized Form:', this.form());
  }
}
