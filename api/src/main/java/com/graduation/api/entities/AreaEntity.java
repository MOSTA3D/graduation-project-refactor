package com.graduation.api.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class AreaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String image;
    private String location;
    private boolean hasCrime;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "area")
    private List<CameraEntity> cameras;

    public AreaEntity(String name, String image, String location, List<CameraEntity> cameras){
        this.name = name;
        this.image = image;
        this.location = location;
        this.cameras = cameras;
        this.hasCrime = false;
    }
}
