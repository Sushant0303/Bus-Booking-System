package com.project.busbooking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.busbooking.model.Bus;

public interface BusRepository extends JpaRepository<Bus, Long> {
	
	List<Bus> findBySourceAndDestination(String source, String destination);

}
