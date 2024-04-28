import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {
taille!: number; // ! signifie que la variable est initialisée dans le constructeur
poids!: number; // ? signifie que la variable est optionnelle
imc!: number;
interpretation:string="";
constructor(){

}
calculerIMC(){
this.imc=Math.round(this.poids/(this.taille*this.taille)); // this.taille**2 => this.taille*this.taille 
return this.imc;
}
interpretationIMC(){  
let indice=this.calculerIMC();
if(indice<20){
  this.interpretation="maigreur";
}
else if(indice<25){
  this.interpretation="idéale";
}
else if(indice<30){
  this.interpretation="surpoids";
}
else{
  this.interpretation="obésité";
}
this.poids;
this.taille;
this.imc;




}
}
