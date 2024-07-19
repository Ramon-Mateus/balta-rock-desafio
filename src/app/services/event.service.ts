import { Injectable } from '@angular/core';
import { Show } from '../types';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private showList: Show[] = [
    {
      name: "GoRN",
      date: "2024-08-15",
      local: "Estádio Arena das Dunas",
      adress: "Avenida Rio Branco"
    },
    {
      name: "GGCON",
      date: "2024-08-30",
      local: "Estacionamento do Via Direta",
      adress: "Avenida Rio Branco"
    },
    {
      name: "Angra",
      date: "2024-09-10",
      local: "Teatro Riachuelo",
      adress: "Avenida Rio Branco"
    }
  ]

  constructor() { }

  getAllEvents(): Show[] {
    return this.showList
  }

  getEventByName(contain: string): Show[] | [] {
    // let events = this.eventList.filter(event => event.name.toLowerCase().includes(contain));
    // if(events.length > 0) {
    //   return events;
    // }
    return this.showList.filter(show => show.name.toLowerCase().includes(contain));
  }
}
