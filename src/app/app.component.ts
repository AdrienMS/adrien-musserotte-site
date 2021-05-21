import { Component } from '@angular/core';
import * as firebase from 'firebase';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Adrien Musserotte - Développeur Web';

  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
  }
}
