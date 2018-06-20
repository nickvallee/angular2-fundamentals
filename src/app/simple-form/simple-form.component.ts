import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <input #myInput type="text"
           [(ngModel)]="message"
           [ngClass]="{mousedown: isMousedown, mouseover: isMouseover}"
           (mousedown)="isMousedown = true"
           (mouseup)="isMousedown = false"
           (mouseleave)="isMousedown = false"
           (mouseover)="isMouseover = true"
           (mouseout)="isMouseover = false"
    >
    <button class='update'(click)="update.emit({text:message})">Click me!</button>
    <button class='delete' (click)="delete.emit()">Delete</button>
  `,
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  isMousedown
  isMouseover

  constructor() { }

  @Input() message;

  @Output() update = new EventEmitter();

  @Output() delete = new EventEmitter();

  ngOnInit() {
  }

}
