package com.graduation.api.repositories;

import com.graduation.api.entities.AreaEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AreaRepo extends JpaRepository<AreaEntity, Long> {
    Optional<AreaEntity> findByName(String name);
}
