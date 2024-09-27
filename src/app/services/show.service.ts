import { Injectable } from '@angular/core';
import { Show } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() { }

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

  getAllShows(): Show[] {
    return this.showList
  }

  getShowsByName(contain: string): Show[] | [] {
    return this.showList.filter(show => show.name.toLowerCase().includes(contain));
  }

  createShow(show: Show): void {
    this.showList.push(show);
  }
}
