import { Component, Input } from '@angular/core';
import { Show } from '../../types';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  @Input() show!: Show;
}
