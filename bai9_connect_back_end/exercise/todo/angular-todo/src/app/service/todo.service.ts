import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../model/todo';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${API_URL}/todoList`);
  }

  findById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(`${API_URL}/todoList/${id}`);
  }

  save(todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`${API_URL}/todoList`, todo);
  }

  update(id: number, todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`${API_URL}/todoList/${id}`, todo);
  }

  delete(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>(`${API_URL}/todoList/${id}`);
  }
}
