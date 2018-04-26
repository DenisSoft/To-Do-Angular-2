import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() id: number;
  @Output() deleteItem = new EventEmitter<number>();
  isOpen: boolean;
  constructor() { }

  changeStatusModalWindow(newStatus: boolean) {
    this.isOpen = newStatus;
  }

  deleteItem$() {
    this.deleteItem.emit(this.id);
  }

  ngOnInit() {
    this.isOpen = false;
  }
}
