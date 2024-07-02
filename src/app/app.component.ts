import { Component, ViewEncapsulation } from '@angular/core';
import { configs } from '../assets/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'angular-page-demo';
  jsonData = configs.registration;
}
