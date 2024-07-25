import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecordFormComponent } from './record-form/record-form.component'; // Import your new component

const routes: Routes = [
  { path: '', redirectTo: '/record-form', pathMatch: 'full' },
  { path: 'record-form', component: RecordFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
