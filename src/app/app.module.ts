import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}, // This redirects to the welcome component if no path is specified
      // tslint:disable-next-line: max-line-length
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} // Used to direct to a given page if the path specified is not found
      // but we will use it to redirect users to the welcome page if the requested path is not found
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
