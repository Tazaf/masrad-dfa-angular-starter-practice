import { Component, OnInit } from '@angular/core';
import { Message } from './dialogs/data/message';
import { DiaLogService } from './dialogs/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DiaLog';
  messages?: Message[];

  constructor(private readonly dialogService: DiaLogService) {}

  ngOnInit(): void {
    this.dialogService
      .getDiaLogMessages(2)
      .subscribe((messages) => (this.messages = messages));
  }
}
