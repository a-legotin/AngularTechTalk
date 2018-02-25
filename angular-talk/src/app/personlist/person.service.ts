import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Person } from './person';
  
@Injectable()
export class PersonService{
    private baseUrl = 'http://localhost:7000/';
    private personUrl = this.baseUrl + 'api/person';
    constructor(private httpClient: HttpClient){ }
      
    getAll() : Observable<Person[]> {
        return this.httpClient.get<Person[]>(this.personUrl);
        };
    }