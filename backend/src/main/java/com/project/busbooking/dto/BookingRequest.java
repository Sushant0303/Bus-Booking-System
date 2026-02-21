package com.project.busbooking.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {

    private Long userId;
    private Long busId;
    private Long seatId;
}