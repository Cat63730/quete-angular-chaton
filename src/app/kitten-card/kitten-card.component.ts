import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cat } from '../models/Cat.model';

@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrls: ['./kitten-card.component.css'],
})
export class KittenCardComponent {

  displayInfo= false;

  @Input() displayBtn = false;

  @Input() cat!: Cat;

  @Output() sendToAdoptedList: EventEmitter<Cat> = new EventEmitter();

  addCatToAdoptedList() {
    this.sendToAdoptedList.emit(this.cat);
  }
}
