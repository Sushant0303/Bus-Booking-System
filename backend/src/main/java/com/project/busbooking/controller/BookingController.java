package com.project.busbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.busbooking.dto.BookingRequest;
import com.project.busbooking.dto.MultiBookingRequest;
import com.project.busbooking.model.Booking;
import com.project.busbooking.service.BookingService;

@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/book")
    public Booking bookSeat(@RequestBody BookingRequest request) {

        return bookingService.bookSeat(
                request.getUserId(),
                request.getBusId(),
                request.getSeatId());
    }
    
    @GetMapping("/user/{userId}")
    public List<Booking> getUserBookings(@PathVariable Long userId) {
        return bookingService.getUserBookings(userId);
    }
    
    @DeleteMapping("/cancel/{bookingId}")
    public String cancelBooking(@PathVariable Long bookingId) {

        bookingService.cancelBooking(bookingId);

        return "Booking cancelled successfully";
    }
    
    @PostMapping("/book-multiple")
    public List<Booking> bookMultipleSeats(
            @RequestBody MultiBookingRequest request) {

        return bookingService.bookMultipleSeats(
                request.getUserId(),
                request.getBusId(),
                request.getSeatIds());
    }
    
    @GetMapping("/my-bookings/{userId}")
    public List<Booking> getMyBookings(@PathVariable Long userId) {
        return bookingService.getUserBookings(userId);
    }

}
