import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeader(): Leader[] {
    return LEADERS;
  }

  getFeaturedLeader() {
    return LEADERS.filter((featured) => featured.featured)[0];
  }
}
