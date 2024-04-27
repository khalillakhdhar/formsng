import { Component } from '@angular/core';
import { Todo } from '../shared/classes/todo';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  todo:Todo={} as Todo; // initialisation de la variable todo
  constructor(private todoService:TodoService) // injection de dépendence
  {
    this.todo.lieu="en ligne"
  }
  addTodo(){
    this.todoService.ajouterTodo(this.todo);
    this.todo={} as Todo; // vider le formulaire
  }
}
