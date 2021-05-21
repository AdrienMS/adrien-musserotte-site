import { Injectable } from '@angular/core';
import { Subject, Observable, Observer, onErrorResumeNext } from 'rxjs';
import * as firebase from 'firebase';

import { About } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private about: About;
  public careersSubject: Subject<About> = new Subject<About>();

  constructor() { }

  public saveAbout(about: About): Observable<boolean> {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      firebase.database().ref('about/').set(this.about).then(() => observer.next(true)).catch(() => observer.next(false));
    });
  }

  public getAbout(): Observable<About> {
    return new Observable<About>((observer: Observer<About>) => {
      firebase.database().ref('about/')
        .on('value', (data: firebase.database.DataSnapshot) => {
          observer.next(data.val());
        });
    });
  }
}
