import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { Skill, SkillCategory, Field, FieldConfig } from '../../../core';
import { DynamicFormComponent } from '../../../shared';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.sass']
})
export class SkillsPageComponent implements OnInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  public regConfigs: Array<FieldConfig[]> = [];
  public skillsConfig: Array<FieldConfig[]> = [];

  public skillsCategories$: Observable<SkillCategory[]>;

  constructor() { }

  ngOnInit(): void {
    this.skillsCategories$ = new Observable<SkillCategory[]>((observer: Observer<SkillCategory[]>) => {
      const skillsArray: Array<SkillCategory> = [
        new SkillCategory('développement', [
          new Skill('JS/TS', 90),
          new Skill('HTML/CSS', 85),
          new Skill('PYTHON', 70),
          new Skill('MySQL/PostgreSQL', 65),
          new Skill('C/C++', 50),
          new Skill('C#', 45),
          new Skill('Java', 35)
        ], 8, 'left'),
        new SkillCategory('Frameworks', [
          new Skill('Angular', 90),
          new Skill('Ionic', 90),
          new Skill('Django', 60)
        ], 9, 'center-top'),
        new SkillCategory('Agile', [
          new Skill('Scrum', 80),
          new Skill('Google Design Sprint', 20)
        ], 7, 'center-bottom'),
        new SkillCategory('Outils', [
          new Skill('Visual Studio/VS Code', 80),
          new Skill('Emacs', 75),
          new Skill('Ubuntu', 90),
          new Skill('Windows', 90),
          new Skill('Postman', 85),
          new Skill('Git', 85),
          new Skill('Trello', 85),
          new Skill('Suite Office', 85)
        ], 10, 'right')
      ];
      this.initFields(skillsArray);

      observer.next(skillsArray);
    });
  }

  private initFields(categories: Array<SkillCategory>) {
    categories.forEach(category => {
      this.skillsConfig = [];
      category.skills.forEach(skill => {
        this.skillsConfig.push([
          {
            type: 'input',
            label: 'Nom',
            inputType: 'text',
            name: 'name_skill',
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'Nom requis'
              }
            ],
            value: skill.name
          },
          {
            type: 'input',
            label: 'Pourcentage',
            inputType: 'num',
            name: 'percentage',
            validations: [
              {
                name: 'required',
                validator: Validators.required,
                message: 'Pourcentage requise'
              }
            ],
            value: skill.percentage
          }
        ]);
      });

      this.regConfigs.push([
        {
          type: 'input',
          label: 'Nom',
          inputType: 'text',
          name: 'name',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Nom requis'
            }
          ],
          value: category.name
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
          value: category.image
        },
        {
          type: 'select',
          label: 'Position',
          name: 'position',
          validations: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Position requise'
            }
          ],
          value: category.position,
          options: ['left', 'center-top', 'center-bottom', 'right']
        },
        {
          type: 'array',
          name: 'skills',
          label: 'Compétences',
          value: this.skillsConfig
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

}
