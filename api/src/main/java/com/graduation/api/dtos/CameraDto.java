package com.graduation.api.dtos;

import com.graduation.api.entities.CameraEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CameraDto {
    private Long id;
    private String url;
    boolean hasCrime;

    public CameraDto(CameraEntity cameraEntity){
        this.id = cameraEntity.getId();
        this.url = cameraEntity.getUrl();
        this.hasCrime = cameraEntity.isHasCrime();
    }
}
