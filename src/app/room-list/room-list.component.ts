import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms$: Observable<Room[]>;

  constructor(private hotelService: HotelService) {
    this.rooms$ = this.hotelService.getRooms();
  }

  ngOnInit(): void {}
}