import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { BookingComponent } from './booking/booking.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    BookingComponent,
    CancelBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }