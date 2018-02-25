import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-addresslist',
  templateUrl: './addresslist.component.html',
  styleUrls: ['./addresslist.component.css',
  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class AddresslistComponent {
  public addresses: Address[];
  private baseUrl = 'http://localhost:7000/';

  constructor(http: Http) {
      http.get(this.baseUrl + 'api/address').subscribe(result => {
          this.addresses = result.json() as Address[];
          console.log(`loaded ${this.addresses.length} addresses`);
      }, error => console.error(error));
  }
}

interface Address {
  Id: number;
  Country: string;
  City: string;
  PostalCode: string;
  StreetAddress: string;
}
