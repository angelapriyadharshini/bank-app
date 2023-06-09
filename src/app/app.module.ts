import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './core/interceptors';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeENSL from '@angular/common/locales/en-SL';
import { Helper } from './shared/helper';

registerLocaleData(localeENSL);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [
    HttpClientModule,
    httpInterceptorProviders,
    Helper,
    { provide: LOCALE_ID, useValue: 'en-SL' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
