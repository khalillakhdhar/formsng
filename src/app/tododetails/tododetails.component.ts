import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../shared/classes/todo';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styleUrl: './tododetails.component.css'
})
export class TododetailsComponent {
  // récupération de l'id de la tâche à afficher
  id = this.route.snapshot.paramMap.get('id');
  tache:Todo={} as Todo;
constructor(private route:ActivatedRoute,private todoService:TodoService) // activated route pour récupérer les paramètres de l'url
{
  //  le constructeur est appelé une seule fois lors de la création du composant (avant le chargement de la variable id)
  this.tache=this.todoService.getTodoById(parseInt(this.id|| "-1"));
}


}
