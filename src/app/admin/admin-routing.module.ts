import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  AboutPageComponent,
  AdminPageComponent,
  CareerPageComponent,
  LoginComponent,
  ProjectsPageComponent,
  SkillsPageComponent
} from './pages';

import { AuthGuardService } from '../core';

const routes: Routes = [
  { path: 'admin',
    children: [
        { path: 'login', component: LoginComponent },
        { path: 'about', component: AboutPageComponent },
        { path: 'career', component: CareerPageComponent },
        { path: 'projects', component: ProjectsPageComponent },
        { path: 'skills', component: SkillsPageComponent },
        { path: '', canActivate: [AuthGuardService], component: AdminPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
