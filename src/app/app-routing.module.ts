import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'hammer-card', pathMatch: 'full' },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)},
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
