import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonListComponent {
  public persons: Person[];
  private baseUrl = 'http://localhost:7000/';

  constructor(http: Http) {
      http.get(this.baseUrl + 'api/person').subscribe(result => {
          this.persons = result.json() as Person[];
          console.log(`loaded ${this.persons.length} persons`);
      }, error => console.error(error));
  }
}

interface Person {
  FirstName: string;
  LastName: string;
  Email: string;
}


