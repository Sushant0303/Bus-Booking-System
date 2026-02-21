package com.project.busbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.busbooking.dto.SeatLayoutDTO;
import com.project.busbooking.model.Seat;
import com.project.busbooking.service.SeatService;

@RestController
@RequestMapping("/seat")
public class SeatController {

    @Autowired
    private SeatService seatService;

    // Add seat
    @PostMapping("/add")
    public Seat addSeat(@RequestBody Seat seat) {
        return seatService.saveSeat(seat);
    }

    // Get seats by bus
    @GetMapping("/bus/{busId}")
    public List<Seat> getSeats(@PathVariable Long busId) {
        return seatService.getSeatsByBus(busId);
    }
    
    @GetMapping("/layout/{busId}")
    public List<SeatLayoutDTO> getSeatLayout(@PathVariable Long busId) {
        return seatService.getSeatLayout(busId);
    }
}
