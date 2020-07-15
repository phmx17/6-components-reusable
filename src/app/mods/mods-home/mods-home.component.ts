import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  showModal = false;
  items = [
    { title: 'Why is the sky blue?', content: 'Because we have an atmosphere that contains water' },
    { title: 'What does an orange taste like', content: 'It is sweet and even sweeter when bloody'},
    { title: 'Who played the supporting role in the film \'Edge Of Tomorrow\' ?', content: 'Emily Blunt'}
  ];
  
  constructor() { }
  
  // helper function
  onClick() {
   this.showModal = !this.showModal;
  }

  ngOnInit(): void {
  }
}
