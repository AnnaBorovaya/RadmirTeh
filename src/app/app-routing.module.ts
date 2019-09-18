import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'main', loadChildren: './modules/mainpage/mainpage.module#MainpageModule', canActivate: [AuthGuard] },
  { path: 'gallery', loadChildren: './modules/gallerypage/gallerypage.module#GallerypageModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

