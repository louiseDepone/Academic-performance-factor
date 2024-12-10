import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GnerateGradeService {

  http = inject(HttpClient);

  predictGrade(data: any) {
    const url =  'https://student-performance-ai-model-1.onrender.com/predict';
    return this.http.post(url, data,{
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
