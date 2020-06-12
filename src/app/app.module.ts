import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';
import {FormsModule} from '@angular/forms';
import { DatePipe } from './date.pipe';
import {ThoughtsService} from './thoughts.service';

@NgModule({
  declarations: [
    AppComponent,
    ThoughtsComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [ThoughtsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
