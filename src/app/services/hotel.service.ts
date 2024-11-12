import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private rooms: Room[] = [
    { id: 1, number: '101', type: 'Single', price: 100, available: true },
    { id: 2, number: '102', type: 'Double', price: 150, available: true },
    { id: 3, number: '103', type: 'Suite', price: 250, available: true },
  ];

  private bookings: Booking[] = [];

  private roomsSubject = new BehaviorSubject<Room[]>(this.rooms);
  private bookingsSubject = new BehaviorSubject<Booking[]>(this.bookings);

  getRooms(): Observable<Room[]> {
    return this.roomsSubject.asObservable();
  }

  getBookings(): Observable<Booking[]> {
    return this.bookingsSubject.asObservable();
  }

  bookRoom(roomId: number, guestName: string, checkIn: Date, checkOut: Date): void {
    const room = this.rooms.find(r => r.id === roomId);
    if (room && room.available) {
      const booking: Booking = {
        id: this.bookings.length + 1,
        roomId,
        guestName,
        checkIn,
        checkOut
      };
      this.bookings.push(booking);
      room.available = false;
      this.roomsSubject.next(this.rooms);
      this.bookingsSubject.next(this.bookings);
    }
  }

  cancelBooking(bookingId: number): void {
    const index = this.bookings.findIndex(b => b.id === bookingId);
    if (index !== -1) {
      const booking = this.bookings[index];
      const room = this.rooms.find(r => r.id === booking.roomId);
      if (room) {
        room.available = true;
      }
      this.bookings.splice(index, 1);
      this.roomsSubject.next(this.rooms);
      this.bookingsSubject.next(this.bookings);
    }
  }
}