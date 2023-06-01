import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../../data/message';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  @Input() message!: Message;
  @Output() removed = new Subject<number>();
  class: 'warning' | 'success' = 'warning';

  constructor() {}

  ngOnInit(): void {
    if (this.message === undefined) {
      throw new TypeError('message is required');
    }
    if (this.message.postedBy === 'them') {
      this.class = 'success';
    }
  }

  remove(): void {
    this.removed.next(this.message.id);
  }
}
