import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FormService } from '../../../services/form.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {

  formService: FormService = inject(FormService);
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);  
  currentRoute: number = (1);
  constructor() {
  }

  routeCurrent(numLink: number) {
    this.currentRoute = numLink
  }


  progressForm = this.formService.getProgressForm();

  ngOnInit() {
    this.currentRoute = (Number((window.location.href).split('/').pop())-1);
  }


  next(){
    if(this.currentRoute < 3){
      this.currentRoute += 1;
    }
    this.router.navigate([`${this.currentRoute+1}`]);
  }

  back(){
    if(this.currentRoute > 0){
      this.currentRoute -= 1;
    }
    this.router.navigate([`${this.currentRoute+1}`]);
  }
}
