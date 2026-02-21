package com.project.busbooking.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer seatNumber;

    private String status; // AVAILABLE or BOOKED

    @ManyToOne
    @JoinColumn(name = "bus_id")
    private Bus bus;
}
