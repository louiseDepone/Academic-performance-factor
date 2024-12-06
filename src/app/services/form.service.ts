import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  progressForm: WritableSignal<{
    title: string;
    progress: number;
    isCompleted: boolean;
    description: string;
  }[]> = signal([
    {
      title: 'Personal Information',
      progress: 50,
      isCompleted: false,
      description: 'This section collects basic demographic details about the student, including their unique identifier, age, gender, and ethnicity. This information helps understand the diversity of the student population and can be used to analyze trends or patterns based on demographic factors.'
    },
    {
      title: 'Parental Details',
      isCompleted: false,
      progress: 25,
      description: "This section captures information about the educational background and level of support provided by parents. Parental involvement and education are critical factors that can influence a student's academic performance and overall development."
    },
    {
      title: 'Academic Details',
      isCompleted: false,
      progress: 75,
      description: "This section focuses on the student’s study habits, attendance, tutoring participation, and academic achievements. These details provide insight into the factors contributing to their academic success or challenges, allowing for performance analysis and improvement strategies."
    },
    {
      title: 'Extracurricular Activities',
      isCompleted: false,
      progress: 100,
      description: "This section gathers information about the student's participation in activities outside academics, such as sports, music, and volunteering. Extracurricular involvement often enhances personal growth, teamwork, and leadership skills, contributing to a well-rounded educational experience."
    }
  ]);
  constructor() {}

  getProgressForm = () => this.progressForm();
}
