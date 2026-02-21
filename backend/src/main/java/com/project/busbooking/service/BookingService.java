package com.project.busbooking.service;

import com.project.busbooking.model.Booking;
import java.util.List;

public interface BookingService {

    Booking bookSeat(Long userId, Long busId, Long seatId);
    
    List<Booking> getUserBookings(Long userId);
    
    void cancelBooking(Long bookingId);
    List<Booking> bookMultipleSeats(
            Long userId,
            Long busId,
            List<Long> seatIds);
}
