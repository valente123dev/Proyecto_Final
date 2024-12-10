import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../../about/about.component';


@Component({
  selector: 'app-acerca',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {
navegar:Router = new Router();
  constructor(private router: Router){
    
  }
  cotizar(){
    this.navegar.navigate(['cotizar']);
  }
}
