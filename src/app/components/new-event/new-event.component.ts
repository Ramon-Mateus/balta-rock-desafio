import { Component } from '@angular/core';
import { Show } from '../../types';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-new-event',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.css'
})
export class NewEventComponent {
  model: Show = {'name': '', 'local': '', 'date': '', 'adress': ''};
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
