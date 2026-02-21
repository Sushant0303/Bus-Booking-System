package com.project.busbooking.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.busbooking.model.Seat;
import org.springframework.data.jpa.repository.Lock;
import jakarta.persistence.LockModeType;
import java.util.Optional;

public interface SeatRepository extends JpaRepository<Seat, Long> {

    List<Seat> findByBusId(Long busId);
    
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    Optional<Seat> findSeatById(Long id);
}
