import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav navbar-nav'>
        <li style="margin-right: 10px"><a [routerLink]="['/welcome']">Home</a></li>
        <li style="margin-left: 10px"><a [routerLink]="['/products']">Product List</a></li>
      </ul>
    </nav>
    <div class='container'>
    <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Nebe Angular';
}
