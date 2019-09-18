import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallerypageRoutingModule } from './gallerypage-routing.module';
import { GallerypageComponent } from './components/gallerypage/gallerypage.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [GallerypageComponent],
  imports: [
    CommonModule,
    GallerypageRoutingModule,
    MatTableModule,
    MatIconModule,
    MatInputModule
  ]
})
export class GallerypageModule { }
