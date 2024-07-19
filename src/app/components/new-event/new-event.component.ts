import { Component, inject } from '@angular/core';
import { Show } from '../../types';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-new-event',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.css'
})
export class NewEventComponent {
  private showService: ShowService = inject(ShowService);
  model: Show = {'name': '', 'local': '', 'date': '', 'adress': ''};
  submitted = false;
  onSubmit() {
    this.showService.createShow(this.model)
  }
}