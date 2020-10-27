import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormReactiveComponent } from './shared/components/form-reactive/form-reactive.component';

const routes: Routes = [
  { path: 'reactive', component: FormReactiveComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'reactive' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
