import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { InfoComponent } from './components/info/info.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [InfoComponent],
  imports: [
    CommonModule,
    MainpageRoutingModule,
    MatCardModule
  ]
})
export class MainpageModule { }
