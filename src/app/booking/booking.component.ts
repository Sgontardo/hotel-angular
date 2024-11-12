import { Component } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  roomId: number;
  guestName: string;
  checkIn: string;
  checkOut: string;

  constructor(private hotelService: HotelService) {
    this.roomId = 0;
    this.guestName = '';
    this.checkIn = '';
    this.checkOut = '';
  }

  bookRoom(): void {
    if (this.roomId && this.guestName && this.checkIn && this.checkOut) {
      this.hotelService.bookRoom(
        this.roomId,
        this.guestName,
        new Date(this.checkIn),
        new Date(this.checkOut)
      );
      this.resetForm();
    } else {
      alert('Please fill in all fields');
    }
  }

  private resetForm(): void {
    this.roomId = 0;
    this.guestName = '';
    this.checkIn = '';
    this.checkOut = '';
  }
}