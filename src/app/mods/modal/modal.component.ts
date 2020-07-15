import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {   // OnInit = interface; optional !! - could as well be a //comment reminder instead
  @Output() close = new EventEmitter; // make all components listen for 'close'
  
  constructor(private el: ElementRef) {}  // don't forget to pass 'el' this
  
  // helper function
  onCloseClick() {
    this.close.emit();  // activate the close emitter which gets picked up in parent template
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }
}
