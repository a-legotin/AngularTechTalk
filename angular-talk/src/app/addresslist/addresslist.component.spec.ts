import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresslistComponent } from './addresslist.component';

describe('AddresslistComponent', () => {
  let component: AddresslistComponent;
  let fixture: ComponentFixture<AddresslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddresslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
