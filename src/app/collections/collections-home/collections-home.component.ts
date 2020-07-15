import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Saul Goodman', age: 25, job: 'developer', employed: false },
    { name: 'Charles McGill', age: 18, job: 'intern', employed: false },
    { name: 'Kim Wexler', age: 34, job: 'engineer', employed: true },
    { name: 'Howard Hamlin', age: 56, job: 'designer', employed: false },
  ];
  headers = [
    { key: 'employed', label: 'Has a Job?'},
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
