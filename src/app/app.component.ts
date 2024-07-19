import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './components/event/event.component';
import { EventService } from './services/event.service';
import { Show } from './types';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './components/new-event/new-event.component';


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
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
 {
  private eventService: EventService = inject(EventService);
  showSearch: string = '';
  shows: Show[] = [];

  searchEvents(): void {
    if(this.showSearch.trim()) {
      this.shows = this.eventService.getEventByName(this.showSearch.trim())
    } else {
      this.shows = this.eventService.getAllEvents();
    }
  }

  ngOnInit() {
    this.shows = this.eventService.getAllEvents();
  }
}
