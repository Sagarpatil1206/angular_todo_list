import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem = "";
  todos:Todo[];
  constructor(){
    const userJson = localStorage.getItem('todos');
    this.localItem = userJson !== null ? userJson : "";
    if(this.localItem == ""){
      this.todos = [];
    }else{
      this.todos = JSON.parse(this.localItem);
    }
    // this.todos = [
      // {sno:1,title:'This is title1',desc:'Description1',active:true},
      // {sno:2,title:'This is title2',desc:'Description2',active:true},
      // {sno:3,title:'This is title3',desc:'Description3',active:true}
    // ]
  }
  deleteTheTodo(todo:Todo){
    const index = this.todos.indexOf(todo);//finding index of todo to delete
    this.todos.splice(index,1);//delete todos from given index and number of todos to delete aas 2nd argument
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
