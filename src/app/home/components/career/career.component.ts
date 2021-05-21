import { Component, OnInit, OnDestroy } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Subject, Observable } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

import { CareersService, Career, ImagesService, Image } from '../../../core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.sass']
})
export class CareerComponent implements OnInit, OnDestroy {
  /*
  font awesome variables
  */
  faStar = faStar;

  /*
  services variables
  */
  public careers$: Observable<Career[]>;
  public images$: Observable<Image[]>;
  private unsubscribe$: Subject<void> = new Subject<void>();

  /*
  array to display careers
  */
  public isRight: Array<boolean> = [];

  constructor(private careersService: CareersService, private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.getImages();
    this.getCareers();
  }

  public getImages() {
    this.images$ = this.imagesService.getImages().pipe(takeUntil(this.unsubscribe$));
  }

  public getCareers() {
    this.careers$ = this.careersService.getCareers()
      .pipe(
        map(careers => careers.reverse()),
        tap(careers => this.initStyle(careers)),
        takeUntil(this.unsubscribe$)
      );
  }

  public initStyle(careers: Array<Career>) {
    for (let i = 0; i < careers.length; i += 1) {
      if (this.isRight.length === 0) {
        this.isRight.push(false);
      } else if (!this.isRight[i - 1]) {
        this.isRight.push(true);
      } else {
        this.isRight.push(false);
      }
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
