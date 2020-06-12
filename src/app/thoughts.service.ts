import { Injectable } from '@angular/core';
import {Thought} from './Thought';

@Injectable({
  providedIn: 'root'
})
export class ThoughtsService {

  lista: Thought[];
  task = '';
  taskList: [];

  constructor() {
    this.lista = JSON.parse(localStorage.getItem('arun'));
  }

  getTask() {
    return this.lista;
  }


  addTask(task: string, data: Date) {

    this.lista.push({ text: task, date: new Date() });
    this.task = '';
    localStorage.setItem('arun', JSON.stringify(this.lista));

  }
  deleteTask(id: any) {
    this.lista.splice(id, 1);
    localStorage.setItem('arun', JSON.stringify(this.lista));
  }
}
