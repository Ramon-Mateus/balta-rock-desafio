import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { EventComponent } from './components/event/event.component';
import { EventService } from './services/event.service';
import { Event } from './types';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './components/new-event/new-event.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FormsModule,
    EventComponent,
    CommonModule,
    NewEventComponent,
    ReactiveFormsModule
  ],
  imports: [RouterOutlet, NavBarComponent, NewEventComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
 {
  private eventService: EventService = inject(EventService);
  eventSearch: string = '';
  events: Event[] = [];

  searchEvents(): void {
    if(this.eventSearch.trim()) {
      this.events = this.eventService.getEventByName(this.eventSearch.trim())
    } else {
      this.events = this.eventService.getAllEvents();
    }
  }

  ngOnInit() {
    this.events = this.eventService.getAllEvents();
  }
}
