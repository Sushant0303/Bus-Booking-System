package com.project.busbooking.dto;

import lombok.*;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MultiBookingRequest {

    private Long userId;   // ✔ add this back
    private Long busId;
    private List<Long> seatIds;
}