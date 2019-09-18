import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { HeaderComponent } from './modules/header/components/header/header.component'; 
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/reducer'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      data: reducer
    })

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
