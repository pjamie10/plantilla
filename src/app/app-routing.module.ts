import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { DetailProjectComponent } from './projects/detail-project/detail-project.component';

const routes: Routes = [
  { path: '', component: HomeComponent},// Ruta por defecto
  { path: 'proyectos', component: ProjectsComponent},
  { path: 'proyectos/:titulo', component: DetailProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
