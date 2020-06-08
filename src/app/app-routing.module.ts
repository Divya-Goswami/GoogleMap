import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadMarkerComponent } from './load-marker/load-marker.component'


const routes: Routes = [
	{
		path: 'load',
		component: LoadMarkerComponent,
		data: { pageTitle: 'Google Map' },
	},
	{ path: '', redirectTo: 'load', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
