import { Injectable } from '@angular/core';
import { Skills } from '../classes/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
skills:Skills[]=[];
  constructor() { }
  addOneSkill(skill:Skills){
  
  this.skills.push(skill);
  
  }
  getAllSkills(){
    return this.skills;
  }
  deleteOneSkill(index:number){
    this.skills.splice(index,1);
  }
}
