import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL="http://ad8d55e316d984e05927f84008858db3-134275235.us-west-1.elb.amazonaws.com:8080/api/v1/students";

  constructor(private httpClient: HttpClient) { }

getStudentList():Observable<Student[]>{
  return this.httpClient.get<Student[]>(`${this.baseURL}`);
}

createStudent(student:Student): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,student);
}

getStudentById(id: number):Observable<Student>{
  return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
}

updateStudent(id:number, student:Student): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`,student);
}

deleteStudentById(id: number):Observable<Student>{
  return this.httpClient.delete<Student>(`${this.baseURL}/${id}`);
}

}
