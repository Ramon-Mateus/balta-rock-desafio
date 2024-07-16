import { Injectable } from '@angular/core';
import { Event } from '../types';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventList: Event[] = [
    {
      id: 1,
      name: "GoRN",
      data: "2024-08-15",
      local: "Estádio Arena das Dunas"
    },
    {
      id: 2,
      name: "GGCON",
      data: "2024-08-30",
      local: "Estacionamento do Via Direta"
    },
    {
      id: 3,
      name: "Angra",
      data: "2024-09-10",
      local: "Teatro Riachuelo"
    }
  ]

  constructor() { }

  getAllEvents(): Event[] {
    return this.eventList
  }

  getEventById(id: number): Event | undefined {
    return this.eventList.find(event => event.id === id);
  }
}
