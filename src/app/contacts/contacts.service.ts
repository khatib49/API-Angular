import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contacts } from './models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  url="https://62ac44e59fa81d00a7ad858e.mockapi.io/api/v1/contacts";
  constructor(private http:HttpClient) { }

  getdata()
  {
    return this.http.get<contacts[]>(this.url);
  }
}
