import { Component } from '@angular/core';
import { AboutComponent } from '../../about/about.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
  
})
export class InicioComponent {

}
