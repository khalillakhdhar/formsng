import { Component } from '@angular/core';
import { Todo } from '../shared/classes/todo';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos:Todo[]=[]; // initialisation de la variable todos
  constructor(private todoService:TodoService)
  {
    this.todos=this.todoService.getTodos();
  }

}
