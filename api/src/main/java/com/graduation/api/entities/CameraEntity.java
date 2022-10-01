package com.graduation.api.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
public class CameraEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String url;
    @ManyToOne
    @JoinColumn(name = "area_id", referencedColumnName = "id")
    private AreaEntity area;

    public CameraEntity(String url){
        this.url = url;
    }
}
