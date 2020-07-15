import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  // dummy data
  stats = [
    { value: 122, label: '# of Users' },
    { value: 1153.48, label: 'Revenue' },
    { value: 78.6, label: 'Satisfaction' }
  ]
  items = [
    { image: '/assets/images/couch.jpeg', 
      title: 'Smelly Couch',
      description: 'I hate this couch, it reeks of smoke, ass and feet.'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dirty Old Dresser',
      description: 'This dresser has seen better days, maybe 40 years ago'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
