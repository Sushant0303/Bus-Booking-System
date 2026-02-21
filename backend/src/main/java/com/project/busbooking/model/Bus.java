package com.project.busbooking.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String busName;

    private String busNumber;

    private String source;

    private String destination;

    private String departureTime;

    private String arrivalTime;

    private Double price;

    private Integer totalSeats;
}
