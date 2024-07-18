import { Component } from '@angular/core';
import { Event } from '../model/event';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-new-event',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.css'
})
export class NewEventComponent {
  model = new Event('Show', 'Arena das Dunas', '20-07-2024');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
