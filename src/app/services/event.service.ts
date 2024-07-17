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
      date: "2024-08-15",
      local: "Estádio Arena das Dunas",
      adress: "Avenida Rio Branco"
    },
    {
      id: 2,
      name: "GGCON",
      date: "2024-08-30",
      local: "Estacionamento do Via Direta",
      adress: "Avenida Rio Branco"
    },
    {
      id: 3,
      name: "Angra",
      date: "2024-09-10",
      local: "Teatro Riachuelo",
      adress: "Avenida Rio Branco"
    }
  ]

  constructor() { }

  getAllEvents(): Event[] {
    return this.eventList
  }

  getEventByName(contain: string): Event[] | [] {
    // let events = this.eventList.filter(event => event.name.toLowerCase().includes(contain));
    // if(events.length > 0) {
    //   return events;
    // }
    return this.eventList.filter(event => event.name.toLowerCase().includes(contain));
  }
}
