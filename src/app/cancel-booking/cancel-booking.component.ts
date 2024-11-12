import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.css']
})
export class CancelBookingComponent {
  bookings$: Observable<Booking[]>;

  constructor(private hotelService: HotelService) {
    this.bookings$ = this.hotelService.getBookings();
  }

  cancelBooking(bookingId: number): void {
    this.hotelService.cancelBooking(bookingId);
  }
}