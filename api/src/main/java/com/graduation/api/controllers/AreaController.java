package com.graduation.api.controllers;

import com.graduation.api.dtos.AreaDto;
import com.graduation.api.dtos.AreaNoCameras;
import com.graduation.api.services.AreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/area")
public class AreaController {
    @Autowired
    private AreaService areaService;

    @GetMapping
    public ResponseEntity<List<AreaNoCameras>> getAreasInfo(){
        return ResponseEntity.ok(areaService.getAllAreas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AreaDto> getArea(@PathVariable Long id){
        System.out.println(SecurityContextHolder.getContext().getAuthentication().getPrincipal().toString());
        return ResponseEntity.ok(areaService.getArea(id));
    }
}
