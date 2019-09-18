import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GallerypageComponent } from './components/gallerypage/gallerypage.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'


const routes: Routes = [{ path: '', component: GallerypageComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule
  ],
  exports: [RouterModule]
})
export class GallerypageRoutingModule { }
