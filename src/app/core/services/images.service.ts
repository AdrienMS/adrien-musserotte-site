import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject, Observable, Observer } from 'rxjs';

import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private imagesPath: Array<Image> = [];
  public imagesSubject: Subject<Image[]> = new Subject<Image[]>();

  constructor() {
    this.getImages();
  }

  /**
   * @description Function to get images from Firebase
   *
   * @returns Observable<Image[]>
   */
  public getImages(): Observable<Image[]> {
    return new Observable<Image[]>((observer: Observer<Image[]>) => {
      firebase.database().ref('images/')
        .on('value', (data: firebase.database.DataSnapshot) => {
          observer.next(data.val() != null ? data.val() : []);
        });
    });
  }

  /**
   * @description Function to get a single image from Firebase
   *
   * @param id The ID from databse
   */
  public getSingleImage(id: number): Observable<Image> {
    return new Observable<Image>((observer: Observer<Image>) => {
      firebase.database().ref(`images/${id}`)
        .once('value', (data: firebase.database.DataSnapshot) => {
          observer.next(data.val());
        });
    });
  }

  public emitImages() {
    this.imagesSubject.next(this.imagesPath);
    this.imagesSubject.complete();
  }

  public uploadFile(file: File, name: string) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            upload.snapshot.ref.getDownloadURL().then(
              (value: string) => {
                this.imagesPath.push(new Image(name, value));
                this.saveImages();
                this.getImages();
                resolve(new Image(name, value));
              },
              error => {
                reject(error);
              }
            );
          }
        );
      }
    );
  }

  private saveImages() {
    const toSave: Array<{name: string, path: string}> = [];
    this.imagesPath.forEach(image => {
      toSave.push({
        name: image.name,
        path: image.path
      });
    });
    firebase.database().ref('images/').set(toSave);
  }

  public deleteImage(image: Image) {
    const storageRef = firebase.storage().refFromURL(image.path);
    storageRef.delete().then(
      () => {
        const indexToDelete = this.imagesPath.findIndex(
          (imageEl) => {
            if (imageEl === image) {
              return true;
            }
          }
        );
        this.imagesPath.splice(indexToDelete, 1);
        this.saveImages();
        this.getImages();
        this.emitImages();
      },
      error => {
        return error;
      }
    );
  }
}
