import { Component, OnInit } from '@angular/core';

import { Project } from '../../../core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  public projects: Array<Project> = [
    new Project('Amandine Papon', 12, '', 'Site professionnel réalisé sous Angular et hébergé via Firebase',  ['angular.png']),
    new Project('Adrien Musserotte V1', 11, '', 'Site Web personnel réalisé sous Angular. Il a une partie administrateur pour modifier les données qui sont hébergés via Firebase.',  ['angular.png']),
    new Project('Schéma Scrum', 14, '', 'Schéma représentant le fonctionnement et les rôles de SCRUM.', []),
    new Project('Roue Agile', 14, '', 'Schéma représentant les 4 valeurs et les 12 principes de l\'agile manifesto, chacun comprenant un risque et une bonne pratique.', []),
    new Project('Papa Loutre', 13, '', 'Application d\'aide à l\'écriture (En cours de réalisation). Front sous Ionic et Back en micro-service (NodeJS, Java, Python).', ['ionic.png']),
    new Project('Space Conflict', 15, '', 'Projet de fin d\'étude Epitech. Jeu de cartes en réalitée virtuelle',
    ['unity.png', 'angular.png', 'ionic.png'])
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
