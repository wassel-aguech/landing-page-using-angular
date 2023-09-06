import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  color :any
  source : any



  changesource(source : any , color : any){
    this.color = color;
    this.source = source;

  }
}
