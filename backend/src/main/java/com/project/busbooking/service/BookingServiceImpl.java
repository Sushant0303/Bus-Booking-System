package com.project.busbooking.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.busbooking.model.*;
import com.project.busbooking.repository.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.transaction.annotation.Transactional;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private SeatRepository seatRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BusRepository busRepository;

    // =====================================
    // SINGLE SEAT BOOKING
    // =====================================
    @Override
    @Transactional
    public Booking bookSeat(Long userId, Long busId, Long seatId) {

        Seat seat = seatRepository.findSeatById(seatId)
                .orElseThrow(() -> new RuntimeException("Seat not found"));

        if (!seat.getStatus().equals("AVAILABLE")) {
            throw new IllegalStateException("Seat already booked");
        }

        seat.setStatus("BOOKED");
        seatRepository.save(seat);

        Booking booking = new Booking();
        booking.setBookingTime(LocalDateTime.now());
        booking.setUser(userRepository.findById(userId).orElseThrow());
        booking.setBus(busRepository.findById(busId).orElseThrow());
        booking.setSeat(seat);

        return bookingRepository.save(booking);
    }

    // =====================================
    // USER BOOKING HISTORY
    // =====================================
    @Override
    public List<Booking> getUserBookings(Long userId) {
        return bookingRepository.findByUserId(userId);
    }

    // =====================================
    // CANCEL BOOKING
    // =====================================
    @Override
    @Transactional
    public void cancelBooking(Long bookingId) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        Seat seat = booking.getSeat();
        seat.setStatus("AVAILABLE");
        seatRepository.save(seat);

        bookingRepository.delete(booking);
    }

    // =====================================
    // MULTIPLE SEAT BOOKING (JWT USER)
    // =====================================
    @Override
    @Transactional
    public List<Booking> bookMultipleSeats(
            Long userId,
            Long busId,
            List<Long> seatIds) {

        // ✔ Get logged-in user INSIDE method
    	User user = userRepository.findById(userId)
    	        .orElseThrow(() -> new RuntimeException("User not found"));

        List<Booking> bookings = new ArrayList<>();

        Bus bus = busRepository.findById(busId)
                .orElseThrow(() -> new RuntimeException("Bus not found"));

        for (Long seatId : seatIds) {

            Seat seat = seatRepository.findSeatById(seatId)
                    .orElseThrow(() -> new RuntimeException("Seat not found"));

            if (!seat.getStatus().equals("AVAILABLE")) {
                throw new RuntimeException(
                        "Seat " + seat.getSeatNumber() + " already booked"
                );
            }

            seat.setStatus("BOOKED");
            seatRepository.save(seat);

            Booking booking = new Booking();
            booking.setBookingTime(LocalDateTime.now());
            booking.setUser(user);
            booking.setBus(bus);
            booking.setSeat(seat);

            bookings.add(bookingRepository.save(booking));
        }

        return bookings;
    }
}