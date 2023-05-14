import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { LearningPageComponent } from './components/learning-page/learning-page.component';
import { AboutComponent } from './page/about/about.component';

const routes: Routes = [
	{ path: '', component: TasksComponent },
	{ path: 'learning-page', component: LearningPageComponent },
	{ path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
