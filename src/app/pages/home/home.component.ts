import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  demo = {
    title: '',
    description: '',
    done: false,
  };
  demos = [];
  constructor(private demoSvc: DemoService) {
    this.fetchAllDemo();
  }

  ngOnInit(): void {}

  saveMe() {
    console.log(this.demo);
    this.demoSvc.addToDo(this.demo.title, this.demo.description);
    this.fetchAllDemo();
  }

  fetchAllDemo() {
    this.demoSvc.getToDos().subscribe((demos) => this.demos = demos);
  }
}
