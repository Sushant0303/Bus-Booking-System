package com.project.busbooking.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.busbooking.dto.SeatLayoutDTO;
import com.project.busbooking.model.Seat;
import com.project.busbooking.repository.SeatRepository;

@Service
public class SeatServiceImpl implements SeatService {

    @Autowired
    private SeatRepository seatRepository;

    @Override
    public List<Seat> getSeatsByBus(Long busId) {
        return seatRepository.findByBusId(busId);
    }

    @Override
    public Seat saveSeat(Seat seat) {
        return seatRepository.save(seat);
    }
    
    @Override
    public List<SeatLayoutDTO> getSeatLayout(Long busId) {

        List<Seat> seats = seatRepository.findByBusId(busId);

        return seats.stream()
        		.map(seat -> new SeatLayoutDTO(
        		        seat.getId(),
        		        seat.getSeatNumber(),
        		        seat.getStatus()))
                .collect(Collectors.toList());
    }
}
