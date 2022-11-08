import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  IncomeComponent,
  InvestmentsComponent,
  LoansComponent,
  NavbarComponent,
  OutcomeComponent,
} from './components';
import { TestService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    OutcomeComponent,
    InvestmentsComponent,
    LoansComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
