import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Validators } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { takeUntil, map, tap } from 'rxjs/operators';

import { Career, CareersService, Image, ImagesService, Field, FieldConfig } from '../../../core';
import { DynamicFormComponent } from '../../../shared';

@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.sass']
})
export class CareerPageComponent implements OnInit, OnDestroy {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  public regConfigs: Array<FieldConfig[]> = [];

  public tabFields: Array<Field[]> = [];

  /*
  services variables
  */
  public careers$: Observable<Career[]>;
  public images$: Observable<Image[]>;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private careersService: CareersService, private imagesService: ImagesService) {}

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
        tap(careers => this.initFields(careers)),
        takeUntil(this.unsubscribe$)
      );
  }

  private initFields(careers: Array<Career>) {
    careers.forEach(career => {
      this.regConfigs.push([
        {
          type: 'input',
          label: 'Titre',
          inputType: 'text',
          name: 'title',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Titre requis'
            }
          ],
          value: career.title
        },
        {
          type: 'date',
          label: 'Date de début',
          name: 'dateStart',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Date de début requise'
            }
          ],
          value: new Date(career.dateStart)
        },
        {
          type: 'date',
          label: 'Date de fin',
          name: 'dateEnd',
          value: career.dateEnd !== undefined ? new Date(career.dateEnd) : null
        },
        {
          type: 'input',
          label: 'Poste',
          inputType: 'text',
          name: 'position',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Poste requis'
            }
          ],
          value: career.position
        },
        {
          type: 'input',
          label: 'Description',
          inputType: 'textarea',
          name: 'desc',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Description requise'
            }
          ],
          value: career.desc
        },
        {
          type: 'image',
          label: 'Image',
          name: 'img',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Image requise'
            }
          ],
          value: career.img
        },
        {
          type: 'button',
          label: 'Enregistrer'
        }
      ]);
    });
  }

  public submit(value: any) {
    console.log('emit');
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
