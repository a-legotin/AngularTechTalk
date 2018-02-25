import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './person.service';
import { Person } from './person';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css',
  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"],
  providers: [PersonService]
})
export class PersonListComponent implements OnInit {
  public persons: Person[];

  constructor(private personService: PersonService) {}

  ngOnInit(){
    this.personService.getAll().subscribe(data => this.persons=data);
  }

  delete(person: Person){
    console.log('removing' + person.Email);
    //delete from service 
    this.persons = this.persons.filter(obj => obj !== person);
  }
}