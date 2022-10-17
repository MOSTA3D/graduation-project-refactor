package com.graduation.api.services;

import com.graduation.api.dtos.AreaDto;
import com.graduation.api.dtos.AreaNoCameras;
import com.graduation.api.dtos.CameraDto;
import com.graduation.api.entities.AreaEntity;
import com.graduation.api.exceptions.AppException;
import com.graduation.api.repositories.AreaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AreaService {
    @Autowired
    private AreaRepo areaRepo;

    public List<AreaNoCameras> getAllAreas(){
        List<AreaNoCameras> areasReturned = areaRepo.findAll().stream().map(AreaNoCameras::new).collect(Collectors.toList());
        return areasReturned;
    }

    public AreaDto getArea(String areaName){
        AreaEntity areaEntity = areaRepo.findByName(areaName).orElseThrow(()->new AppException("Something went wrong"));
        AreaDto areaReturned = new AreaDto(areaEntity);
        return areaReturned;
    }

//    public void addArea(){
//
//    }
}
