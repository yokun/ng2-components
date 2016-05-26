import { Component } from '@angular/core';
import { AppIconComponent} from '../components/icon/app-icon';
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [AppIconComponent]
})
export class AppComponent { }