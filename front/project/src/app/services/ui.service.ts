import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
	private showAddTask: boolean = false;
	private subject = new Subject<any>();

  constructor() { }

	toggleAddTask(): void {
		this.showAddTask = !this.showAddTask;
		this.subject.next(this.showAddTask);
	}

	// use this with .onToggle().suscribe(value => {}) in every component that must respond to the toggleAddTask
	onToggle(): Observable<any> {
		return this.subject.asObservable();
	}

}
