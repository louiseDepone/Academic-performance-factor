import { ChangeDetectorRef, Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FormService } from '../../../services/form.service';
import { RouterLink, Router } from '@angular/router';
import { HeaderComponent } from "../../../components/header/header/header.component";
import { SidebarComponent } from "../../../components/header/sidebar/sidebar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, SidebarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {

  formService: FormService = inject(FormService);

  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);  
  currentRoute: number = (1);

  constructor() {
        const routs = ((window.location.href).split('/').pop());
        if(routs == 'form') this.router.navigate(['form/1']);

  }

  routeCurrent(numLink: number) {
    this.currentRoute = numLink
  }


  ngOnInit() {
    // this.currentRoute = (Number((window.location.href).split('/').pop())-1);
  
  }

  submit(){
   
    this.router.navigate(['result']);
  }
  next(){
    if(this.currentRoute < 4){
      this.currentRoute += 1;
    }
    this.router.navigate([`form/${this.currentRoute+1}`]);
  }

  back(){
    if(this.currentRoute > 0){
      this.currentRoute -= 1;
    }
    this.router.navigate([`form/${this.currentRoute+1}`]);
  }
}
