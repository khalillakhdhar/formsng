import { Component } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrl: './division.component.css'
})
export class DivisionComponent {
  a:number=0;
  b:number=1;
  divisibile?:string;
  etat:boolean=false;
  
  //x=7
  divisibilite(){
  this.etat= this.a%this.b==0;
    this.divisibile=this.etat?"divisible":"non divisible";

  }

}
