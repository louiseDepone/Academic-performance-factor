import { Injectable, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class FormService {


  progressForm: WritableSignal<{
    title: string;
    progress: number;
    isCompleted: boolean;
    description: string;
    form: any;
  }[]> = signal([
    {
      title: 'Personal Details',
      progress: 0,
      form: {
        studentId: '',
        age: null,
        gender: '',
      },
      isCompleted: false,
      description: 'This section collects basic demographic details about the student, including their unique identifier, age, gender, and ethnicity. This information helps understand the diversity of the student population and can be used to analyze trends or patterns based on demographic factors.'
    },
    {
      title: 'Parental Details',
      isCompleted: false,
      progress: 0,
      form: {
        parentEducation: '',
        parentSupport: ''
      },
      description: "This section captures information about the educational background and level of support provided by parents. Parental involvement and education are critical factors that can influence a student's academic performance and overall development."
    },
    {
      title: 'Academic Details',
      isCompleted: false,
      progress: 0,
      form: {
        tutoring: '',
        studyTime: '',
        absences: '',
        yearLevel:'',
        subject:null
      },
      description: "This section focuses on the student’s study habits, attendance, tutoring participation, and academic achievements. These details provide insight into the factors contributing to their academic success or challenges, allowing for performance analysis and improvement strategies."
    },
    {
      title: 'Extracurricular',
      isCompleted: false,
      progress: 0,
      form: {
        extracuricularg: '',
      },
      description: "This section gathers information about the student's participation in activities outside academics, such as sports, music, and volunteering. Extracurricular involvement often enhances personal growth, teamwork, and leadership skills, contributing to a well-rounded educational experience."
    },

    {
      title: 'Summary',
      isCompleted: false,
      progress: 0,
      form: {
      },
      description: "Please review the information provided in the previous sections before submitting the form. Ensure that all details are accurate and complete to facilitate a comprehensive analysis and evaluation of the student's profile."
    }
  ]);

  submitCompleteForm (){
    const form = this.progressForm();
    const completeForm = form.map((item) => {
      // cconvert into number except studentId
      Object.keys(item.form).forEach((key) => {
        if (key !== 'studentId' && typeof item.form[key] === 'string') {
          item.form[key] = parseInt(item.form[key]);
        }
      });
      
      return {... item.form}
    });
    
    let toSubmitBigForm : any = {};
    
    completeForm.forEach((input) => {
       toSubmitBigForm = {...toSubmitBigForm, ...input}
    }
    );
    console.log(toSubmitBigForm);
  }

  constructor() {}

  getProgressForm = () => this.progressForm();
  updateForm = (index: number, form: any) => {
    const updatedForm = this.progressForm().map((item, i) => {
      if (i === index) {
        let realProgress = Object.keys(form).reduce((sum, key) => {
          if (typeof form[key] === 'string' && form[key].length > 0) {
            return sum + 1;
          } else if (typeof form[key] === 'number' && form[key] > 0) {
            return sum + 1;
          }
          return sum;
        }, 0);
  
        const progress = Math.round((realProgress / Object.keys(form).length) * 100);
  
        return {
          ...item,
          form,
          progress,
          isCompleted: progress === 100,
        };
      }
      return item;
    });
  
    this.progressForm.update(() => updatedForm);
  };
  
}