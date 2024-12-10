import { TestBed } from '@angular/core/testing';

import { GnerateGradeService } from './gnerate-grade.service';

describe('GnerateGradeService', () => {
  let service: GnerateGradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GnerateGradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
