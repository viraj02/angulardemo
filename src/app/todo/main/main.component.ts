import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  todoList: any = [];
  todoInput: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  todoChange(event): void {
    this.todoInput = event.target.value;
  }

  addNewTodoTask(): void {
    if (this.todoInput) { this.todoList.push(this.todoInput); }
    this.todoInput = null;
  }

}
