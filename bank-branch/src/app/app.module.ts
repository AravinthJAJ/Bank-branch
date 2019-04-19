import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankBranchesComponent } from './Bank-Branches/bank-branches/bank-branches.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material';
import { MaterialModule } from './material.module';
import { NgxLoadingModule } from 'ngx-loading';



@NgModule({
  declarations: [
    AppComponent,
    BankBranchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MaterialModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
