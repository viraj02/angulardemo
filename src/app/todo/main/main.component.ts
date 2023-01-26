import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoList } from '../model/todo.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DatePipe]
})
export class MainComponent implements OnInit {

  todoList: TodoList[] = [];
  todoInput: string | null = null;

  constructor(
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  todoChange(event): void {
    this.todoInput = event.target.value;
  }

  addNewTodoTask(): void {
    if (!this.todoInput) return;

    const todoDate: string = this.transFormDate(new Date());
    let myTodoTask = this.createTodoList({ no: this.todoList.length + 1, task: this.todoInput, date: todoDate });
    this.todoList = [ ...this.todoList, myTodoTask];
    this.todoInput = null;
  }

  createTodoList({ no, task, date }: { no: number, task: string, date: string }): TodoList {
    return { srNo: no, taskName: task, date };
  }

  transFormDate(date: Date) {
    return this.datePipe.transform(date, 'EEE, d-MM-y');
  }

}
