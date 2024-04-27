import { Component } from '@angular/core';
import { Skills } from '../shared/classes/skills';
import { SkillsService } from '../shared/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills:Skills[]=[]
  skill:Skills={} as Skills;
  constructor(private skillsService:SkillsService)
  {
    this.skills=this.skillsService.getAllSkills();

  }
  ajouterSkill()
  {
    this.skillsService.addOneSkill(this.skill);
    this.skill={} as Skills;

  }
}
