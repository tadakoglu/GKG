import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'GKGFeature' },
  { path: 'GKGFeature', loadChildren: () => import('./GKGFeature/GKGFeature.module').then(gkgFeature => gkgFeature.GKGFeatureModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
