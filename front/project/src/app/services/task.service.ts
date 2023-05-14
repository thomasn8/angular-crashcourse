import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	}) 
}

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

	addTask(task: Task) {
		return this.api.post<Task>(this.apiUrl, task, httpOptions);
	}

	updateTask(task: Task): Observable<Task> {
		const url = `${this.apiUrl}/${task.id}`;
		return this.api.put<Task>(url, task, httpOptions);
	}

}
