package com.graduation.api.dtos;

import com.graduation.api.entities.AreaEntity;
import com.graduation.api.entities.CameraEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class AreaNoCameras {
    private Long id;
    private String name;
    private String image;
    private String location;
    private boolean hasCrime;

    public AreaNoCameras(AreaEntity areaEntity){
        this.id = areaEntity.getId();
        this.name = areaEntity.getName();
        this.location = areaEntity.getLocation();
        this.hasCrime = areaEntity.isHasCrime();
    }
}
