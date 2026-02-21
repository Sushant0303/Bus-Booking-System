package com.project.busbooking.service;

import java.util.List;

import com.project.busbooking.dto.SeatLayoutDTO;
import com.project.busbooking.model.Seat;

public interface SeatService {

    List<Seat> getSeatsByBus(Long busId);

    Seat saveSeat(Seat seat);
    
    List<SeatLayoutDTO> getSeatLayout(Long busId);
}
