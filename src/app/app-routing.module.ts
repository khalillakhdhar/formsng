import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TododetailsComponent } from './tododetails/tododetails.component';

const routes: Routes = [
  // routage par défaut vers accueil
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path:'accueil',component:TodoComponent},
  // routage vers la page de détail
  { path: 'detail/:id', component: TododetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
