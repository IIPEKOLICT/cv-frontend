import { Component, OnDestroy } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  constructor(private readonly contactService: ContactService) {}

  ngOnDestroy(): void {
    this.contactService.onDestroy();
  }
}
