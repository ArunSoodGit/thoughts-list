import {Component, OnInit} from '@angular/core';
import {Thought} from '../Thought';
import {ThoughtsService} from '../thoughts.service';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.scss']
})
export class ThoughtsComponent implements OnInit {

  title = 'thoughts-list';
  task = '';
  list: Thought[];

  constructor(public thoughtsService: ThoughtsService) {
  }

  onKeydown(event) {

    if (event.key === 'Enter') {
      this.addTask();
    }
  }

  ngOnInit() {
    this.list = this.thoughtsService.getTask();
  }

  addTask() {
    this.thoughtsService.addTask(this.task, new Date());
    this.task = '';
  }

  onDelete(id: any) {
    this.thoughtsService.deleteTask(id);
  }
}
