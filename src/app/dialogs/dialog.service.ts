import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DiaLog } from './data/dialog';
import { Message } from './data/message';

@Injectable({ providedIn: 'root' })
export class DiaLogService {
  constructor(private http: HttpClient) {}

  getDiaLogs(): Observable<DiaLog[]> {
    return this.http.get<DiaLog[]>(`${environment.api}/dialogs`);
  }

  getDiaLogMessages(dialogId: number): Observable<Message[]> {
    return this.http.get<Message[]>(
      `${environment.api}/dialogs/${dialogId}/messages`
    );
  }
}
