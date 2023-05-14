import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
	private apiUrl = 'http://localhost:5000/tasks';

  constructor(private api: HttpClient) { }

	getTasks(): Observable<Task[]> {
		return this.api.get<Task[]>(this.apiUrl);
	}

	deleteTask(task: Task): Observable<Task> {
		const url = `${this.apiUrl}/${task.id}`;
		return this.api.delete<Task>(url);
	}

}
