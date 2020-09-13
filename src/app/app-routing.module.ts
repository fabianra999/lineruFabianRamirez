import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ApplicationsApprovedComponent } from './views/applications-approved/applications-approved.component';
import { RejectedApplicationsComponent } from './views/rejected-applications/rejected-applications.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'approved', component: ApplicationsApprovedComponent },
  { path: 'rejected', component: RejectedApplicationsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
