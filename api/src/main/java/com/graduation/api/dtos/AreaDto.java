package com.graduation.api.dtos;

import com.graduation.api.entities.CameraEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class AreaDto {
    private Long id;
    private String name;
    private String image;
    private String location;
    private List<CameraEntity> cameras;
}
