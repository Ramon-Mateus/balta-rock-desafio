import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './components/event/event.component';
import { ShowService } from './services/show.service';
import { Show } from './types';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './components/new-event/new-event.component';
import { MapComponent } from "./components/map/map.component";


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
    ReactiveFormsModule,
    MapComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit
 {
  private showService: ShowService = inject(ShowService);
  showSearch: string = '';
  shows: Show[] = [];

  searchShows(): void {
    if(this.showSearch.trim()) {
      this.shows = this.showService.getShowsByName(this.showSearch.trim())
    } else {
      this.shows = this.showService.getAllShows();
    }
  }

  ngOnInit() {
    this.shows = this.showService.getAllShows();
  }
}
