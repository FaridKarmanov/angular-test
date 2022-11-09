import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationTableComponent, NavbarComponent } from './components';
import { TestService } from './services';

@NgModule({
  declarations: [AppComponent, InformationTableComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
