package com.project.busbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.busbooking.model.Bus;
import com.project.busbooking.service.BusService;

@RestController
@RequestMapping("/bus")
public class BusController {

    @Autowired
    private BusService busService;

    // Add Bus
    @PostMapping("/add")
    public Bus addBus(@RequestBody Bus bus) {
        return busService.addBus(bus);
    }

    // Get All Buses
    @GetMapping("/all")
    public List<Bus> getAllBuses() {
        return busService.getAllBuses();
    }
    
    @GetMapping("/search")
    public List<Bus> searchBuses(
            @RequestParam String source,
            @RequestParam String destination) {

        return busService.searchBuses(source, destination);
    }
    
    @DeleteMapping("/delete/{id}")
    public String deleteBus(@PathVariable Long id) {

        busService.deleteBus(id);

        return "Bus deleted successfully";
    }
}
