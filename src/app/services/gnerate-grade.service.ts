import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GnerateGradeService {

  http = inject(HttpClient);

  predictGrade(data: any) {
    const url =  'http://localhost:5000/predict';
    return this.http.get(url, data);
  }
}
