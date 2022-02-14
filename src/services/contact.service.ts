import { Injectable } from '@angular/core';
import { Contact } from '../shared/models';
import { ContactRepository } from '../repositories/contact.repository';
import { BaseService } from '../core/base.service';
import { DeleteResponse } from "../shared/responses";

@Injectable({ providedIn: 'root' })
export class ContactService extends BaseService {
  private contacts: Contact[] = [];
  private edited: Contact | undefined;
  private isEdit = false;

  constructor(private readonly contactRepository: ContactRepository) {
    super();
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  isNoContacts(): boolean {
    return this.contacts.length === 0;
  }

  getEdited(): Contact | undefined {
    return this.edited;
  }

  getIsEdit(): boolean {
    return this.isEdit;
  }

  setEdited(contact: Contact) {
    this.isEdit = true;
    this.edited = contact;
  }

  loadContacts(): void {
    this.loadSubscription = this.contactRepository
      .getAll()
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
      });
  }

  createContact(formData: FormData): void {
    this.createSubscription = this.contactRepository
      .create(formData)
      .subscribe((contact: Contact) => {
        this.contacts.push(contact);
      });
  }

  changeContact(formData: FormData): void {
    if (!this.edited) return;
    this.changeSubscription = this.contactRepository
      .change(this.edited.id, formData)
      .subscribe((contact: Contact) => {
        this.isEdit = false;
        const index: number = this.contacts.findIndex(
          ({ id }) => id === contact.id
        );

        if (index > -1) {
          this.contacts.splice(index, 1, contact);
        }
      });
  }

  deleteContact(id: number): void {
    this.deleteSubscription = this.contactRepository
      .delete(id)
      .subscribe((response: DeleteResponse) => {
        console.log(response);
        this.contacts = this.contacts.filter(
          (contact: Contact) => contact.id !== response.id
        );
      });
  }
}
