import { Component, OnInit } from '@angular/core';
import { contacts } from '../../models/contacts';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  contacts:contacts[]=[]
  constructor(private contact:ContactsService) {
    this.contact.getdata().subscribe(
      (data)=>{
        console.warn(data)
        this.contacts=data
      }
    )
  }

  ngOnInit(): void {
  }

}
