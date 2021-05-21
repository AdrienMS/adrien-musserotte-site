import { Injectable } from '@angular/core';
import { Subject, Observable, Observer } from 'rxjs';
import * as firebase from 'firebase';

import { Career } from '../models/career';

@Injectable({
  providedIn: 'root'
})
export class CareersService {
  private careers: Career[] = [];
  public careersSubject: Subject<Career[]> = new Subject<Career[]>();

  constructor() {
    this.getCareers();
  }

  public emitCareers() {
    this.careersSubject.next(this.careers);
    this.careersSubject.complete();
  }

  public saveCareers(careers: Career[]): Promise<any> {
    this.careers = careers;
    return firebase.database().ref('careers/').set(this.careers);
  }

  /**
   * @description Function to get Careers from Firebase
   *
   * @returns Observable<Career[]>
   */
  public getCareers(): Observable<Career[]> {
    return new Observable<Career[]>((observer: Observer<Career[]>) => {
      firebase.database().ref('careers/')
        .on('value', (data: firebase.database.DataSnapshot) => {
          observer.next(data.val());
        });
    });
  }

  public getSingleCareer(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('careers/' + id).once('value').then(
          (data: firebase.database.DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  public createNewCareer(newCareer: Career) {
    this.careers.push(newCareer);
    this.saveCareers(this.careers);
    this.emitCareers();
  }

  public removeCareer(career: Career) {
    const careerIndexToRemove = this.careers.findIndex(
      (careerEl) => {
        if (careerEl === career) {
          return true;
        }
      }
    );
    this.careers.splice(careerIndexToRemove, 1);
    this.saveCareers(this.careers);
    this.emitCareers();
  }
}
