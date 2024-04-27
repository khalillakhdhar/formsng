import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[]=[];

  constructor() { }
  // ajout
  ajouterTodo(todo: Todo){
    this.todos.push(todo); // this obligatoire avec typescript
  }
  // mise à jour
  updateTodo(index:number,todo:Todo){
    this.todos[index]=todo;
  }
  // suppression d'une tache
  deleteTodo (index:number){
    this.todos.splice(index,1);
  }
  // récupération de la liste des taches
  getTodos(){
    return this.todos;
  }
  // récupération d'une tache par son index
  getTodoById(index:number){
    return this.todos[index];
  }
  // récupérer les tache par leur titre
  getTodoByTitre(titre:string){
    return this.todos.filter(todo=>todo.titre==titre);
  }
}
