import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { LearningPageComponent } from './components/learning-page/learning-page.component';

const routes: Routes = [
	{ path: '', component: TasksComponent },
	{ path: 'learning-page', component: LearningPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
