import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  openedItemIndex = -1; // this setting in order to show a closed accordion on load
  constructor() { }

  // helper functions
  onClick(index: number) {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1 //  allow for 2nd click on title to close accordion content; set to negative 1, which does not refer to anything
    } else {
      this.openedItemIndex = index;
    };
  };
  ngOnInit(): void {
  }

}
