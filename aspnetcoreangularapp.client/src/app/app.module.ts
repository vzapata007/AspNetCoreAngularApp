import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppComponent } from './app.component';
import { RecordFormComponent } from './record-form/record-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecordFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Add FormsModule to imports
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
