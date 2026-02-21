package com.project.busbooking.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SeatLayoutDTO {

	private Long id;
    private Integer seatNumber;
    private String status;
    
    
}