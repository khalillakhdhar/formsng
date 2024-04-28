import { Component } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrl: './division.component.css'
})
export class DivisionComponent {
  a:number=0;
  b:number=1;
  //x=7
  divisibilite(){
    return this.a%this.b==0;

  }

}
