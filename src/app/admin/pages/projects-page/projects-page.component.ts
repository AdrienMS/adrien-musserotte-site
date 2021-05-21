import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

import { Project, Field, FieldConfig } from '../../../core';
import { DynamicFormComponent } from '../../../shared';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.sass']
})
export class ProjectsPageComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  public projects$: Observable<Project[]>;
  public regConfigs: Array<FieldConfig[]> = [];

  constructor() { }

  ngOnInit(): void {
    this.projects$ = new Observable<Project[]>((observer: Observer<Project[]>) => {
      const tabProjects: Array<Project> = [
        new Project('Amandine Papon', 12, '', 'Site professionnel réalisé sous Angular et hébergé via Firebase',  ['angular.png']),
        new Project('Adrien Musserotte V1', 11, '', 'Site Web personnel réalisé sous Angular. Il a une partie administrateur pour modifier les données qui sont hébergés via Firebase.',  ['angular.png']),
        new Project('Schéma Scrum', 14, '', 'Schéma représentant le fonctionnement et les rôles de SCRUM.', []),
        new Project('Roue Agile', 14, '', 'Schéma représentant les 4 valeurs et les 12 principes de l\'agile manifesto, chacun comprenant un risque et une bonne pratique.', []),
        new Project('Papa Loutre', 13, '', 'Application d\'aide à l\'écriture (En cours de réalisation). Front sous Ionic et Back en micro-service (NodeJS, Java, Python).', ['ionic.png']),
        new Project('Space Conflict', 15, '', 'Projet de fin d\'étude Epitech. Jeu de cartes en réalitée virtuelle', ['unity.png', 'angular.png', 'ionic.png'])
      ];
      this.initFields(tabProjects);
      observer.next(tabProjects);
    });
  }

  private initFields(projects: Array<Project>) {
    this.regConfigs = [];
    projects.forEach(project => {
      this.regConfigs.push([
        {
          type: 'input',
          name: 'Nom',
          label: 'name',
          inputType: 'text',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Nom requis'
            }
          ],
          value: project.name
        },
        {
          type: 'input',
          name: 'Sujet',
          label: 'subject',
          inputType: 'text',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Sujet requis'
            }
          ],
          value: project.subject
        },
        {
          type: 'input',
          name: 'Description',
          label: 'desc',
          inputType: 'textarea',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Description requise'
            }
          ],
          value: project.desc
        },
        {
          type: 'input',
          name: 'Technologies',
          label: 'technologies',
          inputType: 'text',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Technologies requises'
            }
          ],
          value: project.technologies
        },
        {
          type: 'image',
          name: 'Image',
          label: 'img',
          inputType: 'text',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Image requise'
            }
          ],
          value: project.image
        },
        {
          type: 'button',
          label: 'Enregistrer'
        }
      ]);
    });
    console.log(this.regConfigs);
  }

  public submit(value: any) {
    console.log('emit');
  }

}
