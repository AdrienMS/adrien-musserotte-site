import { Component, OnInit } from '@angular/core';

import { Skill, SkillCategory } from '../../../core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  public skillsArray: Array<SkillCategory> = [
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
