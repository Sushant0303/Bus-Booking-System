package com.project.busbooking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.busbooking.model.Bus;
import com.project.busbooking.model.Seat;
import com.project.busbooking.repository.BusRepository;
import com.project.busbooking.repository.SeatRepository;
@Service
public class BusServiceImpl implements BusService {

    @Autowired
    private BusRepository busRepository;

    @Autowired
    private SeatRepository seatRepository;

    @Override
    public Bus addBus(Bus bus) {

        // Save bus first
        Bus savedBus = busRepository.save(bus);

        // Auto create seats
        for (int i = 1; i <= bus.getTotalSeats(); i++) {

            Seat seat = new Seat();
            seat.setSeatNumber(i);
            seat.setStatus("AVAILABLE");
            seat.setBus(savedBus);

            seatRepository.save(seat);
        }

        return savedBus;
    }

    @Override
    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }
    
    @Override
    public List<Bus> searchBuses(String source, String destination) {
    	return busRepository.findBySourceAndDestination(source, destination);
    }
    
    @Override
    public void deleteBus(Long id) {
        busRepository.deleteById(id);
    }
}
