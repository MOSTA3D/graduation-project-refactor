package com.graduation.api.dtos;

import com.graduation.api.entities.AreaEntity;
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
    private List<CameraDto> cameras;

    public AreaDto(AreaEntity areaEntity){
        this.id = areaEntity.getId();
        this.name = areaEntity.getName();
        this.image = areaEntity.getImage();
        this.location = areaEntity.getLocation();
        this.cameras = areaEntity.getCameras().stream().map(CameraDto::new).toList();
    }
}
