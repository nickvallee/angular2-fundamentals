import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ul>
        <li *ngFor="let message of mail.messages">{{message.text}}</li>
      </ul>
        <app-simple-form 
          *ngFor="let message of mail.messages"
          [message]="message.text"
          (update)="onUpdate(message.id, $event.text)"
          (delete)="onDelete(message.id)"
        >
        </app-simple-form>
      <button (click)="onAdd()">ADD</button>
    </div>`,
  styles: [`
  app-simple-form{
    margin-bottom: 10px,
  }`]
})
export class AppComponent {

  onUpdate(id, text) {
    this.mail.update(id, text);
  }

  onDelete(id) {
    this.mail.delete(id);
  }

  onAdd() {
    this.mail.add(this.mail.messages.length + 1, "TEST")
  }

  constructor (
    @Inject('mail') private mail
  ) {}
}
