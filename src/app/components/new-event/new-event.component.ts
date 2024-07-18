import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-event',
  standalone: true,
  imports: [],
  templateUrl: './new-event.component.html',
  styleUrl: './new-event.component.css'
})
export class NewEventComponent {
  public evento = new FormGroup({
    name: new FormControl(),
    local: new FormControl(),
    data: new FormControl()
  });  
}
