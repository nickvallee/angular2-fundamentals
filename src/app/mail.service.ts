import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  messages = [
    {id: 0, text: `You're now friends with John`},
    {id: 1, text: `someone liked your tweet`},
    {id:  2, text: `you will never be alone again`}
  ];

  update(id, text){
    this.messages = this.messages.map(m =>
      m.id === id
        ? {id, text}
        : m
    )
  }

  add(id, text) {
    this.messages.push({id, text})
  }

  delete(id) {
    this.messages = this.messages.filter((message) => message.id !== id);
  }

  constructor() { }
}
