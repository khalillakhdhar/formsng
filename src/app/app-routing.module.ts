import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivisionComponent } from './division/division.component';
import { ImcComponent } from './imc/imc.component';
import { SkillsComponent } from './skills/skills.component';
import { TodoComponent } from './todo/todo.component';
import { TododetailsComponent } from './tododetails/tododetails.component';

const routes: Routes = [
  // routage par défaut vers accueil
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path:'accueil',component:TodoComponent},
  // routage vers la page de détail
  { path: 'detail/:id', component: TododetailsComponent },
  {path:"skills",component:SkillsComponent},
  {path:"imc",component:ImcComponent},
  {path:"division",component:DivisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
