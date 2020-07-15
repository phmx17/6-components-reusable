import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  @Input() header = true;   //default to true
  @Input() lines = 4;


  constructor() { }

  ngOnInit(): void {
  }

}
