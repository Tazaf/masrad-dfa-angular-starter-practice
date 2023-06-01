import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DiaLogComponent } from './dialogs/components/dia-log/dia-log.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, DiaLogComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
