import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormModel } from '../../shared/enums';
import { Contact } from '../../shared/models';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  form!: FormGroup;

  constructor(public readonly contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.loadContacts();

    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      text: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      link: new FormControl('', [
        Validators.required,
        Validators.nullValidator,
      ]),
      icon: new FormControl('', [])
    })
  }

  get nameControl(): AbstractControl | null {
    return this.form.get(FormModel.Name);
  }

  get textControl(): AbstractControl | null {
    return this.form.get(FormModel.Text);
  }

  get linkControl(): AbstractControl | null {
    return this.form.get(FormModel.Link);
  }

  get iconControl(): AbstractControl | null {
    return this.form.get(FormModel.Icon);
  }

  onChange(contact: Contact): void {
    this.nameControl?.setValue(contact.name);
    this.textControl?.setValue(contact.text);
    this.linkControl?.setValue(contact.link);
    this.iconControl?.setValue('');
  }

  onSelectImage(event: Event): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const fileList: FileList | null = input.files;

    if (fileList && fileList.length > 0) {
      this.iconControl?.setValue(fileList[0]);
    }
  }

  onSubmit(): void {
    const formData: FormData = new FormData();
    formData.append(FormModel.Name, this.nameControl?.value)
    formData.append(FormModel.Text, this.textControl?.value)
    formData.append(FormModel.Link, this.linkControl?.value)

    if (this.iconControl?.value) {
      formData.append(FormModel.Icon, this.iconControl?.value)
    }

    if (this.contactService.getIsEdit()) {
      this.contactService.changeContact(formData);
    } else {
      this.contactService.createContact(formData);
    }

    this.form.reset();
  }
}
