import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
	@Output() onAddTask: EventEmitter<Task> = new EventEmitter();
	text: string;
	day: string;
	reminder: boolean;
	
	showAddTask: boolean;
	subscription: Subscription;

	constructor(private uiService: UiService) {
		this.text = '';
		this.day = '';
		this.reminder = false;

		this.showAddTask = false;
		this.subscription = this.uiService.onToggle().subscribe(value => {
			this.showAddTask = value;
		})
	}

	onSubmit() {
		if (!this.text) {
			alert('please add a task!')
			return;
		}
		if (!this.day) {
			alert('please add a task!')
			return;
		}

		const newTask = {
			text: this.text,
			day: this.day,
			reminder: this.reminder
		}
	
		this.onAddTask.emit(newTask);

		this.text = '';
		this.day = '';
		this.reminder = false;
	}

}
