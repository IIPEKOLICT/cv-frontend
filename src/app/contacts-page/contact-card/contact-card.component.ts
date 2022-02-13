import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../../shared/models';
import { ContactService } from '../../../services/contact.service';
import { API_URL, BACKEND_URL } from '../../../shared/constants';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
  @Input() contact: Contact = { id: 0, name: '', text: '', link: '', icon: '' };
  @Output() changeEmitter: EventEmitter<Contact> = new EventEmitter<Contact>();

  constructor(public readonly contactService: ContactService) {}

  get imageUrl(): string {
    return `${BACKEND_URL}/${this.contact.icon}`
  }

  onChange(contact: Contact): void {
    this.contactService.setEdited(contact);
    this.changeEmitter.emit(contact);
  }
}
