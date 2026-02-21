package com.project.busbooking.service;

import java.util.List;
import com.project.busbooking.model.Bus;

public interface BusService {

    Bus addBus(Bus bus);

    List<Bus> getAllBuses();
    
    List<Bus> searchBuses(String source, String destination);
    
    void deleteBus(Long id);
}
