import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DemologinComponent } from './demologin/demologin.component';
import { HomeComponent } from './home/home.component';
import { LoginsComponent } from './logins/logins.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', component: DemologinComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'logins', component: LoginsComponent },
  { path: 'app-reactive-form', component: ReactiveFormComponent },
  { path: 'app-demologin', component: DemologinComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
