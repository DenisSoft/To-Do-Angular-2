import {Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() height: number;
  @Input() width: number;
  @Input() show: boolean;
  @Input() attention: boolean;
  @Output() changeStatusModalWindow = new EventEmitter<boolean>();
  @ContentChild('content') content: ElementRef;
  constructor() { }

  closeWindow() {
    this.changeStatusModalWindow.emit(this.show = false);
  }

  ngOnInit() {
  }

}
