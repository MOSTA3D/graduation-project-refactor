package com.graduation.api.repositories;

import com.graduation.api.entities.EnumRole;
import com.graduation.api.entities.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepo extends JpaRepository<RoleEntity, Long> {
    Optional<RoleEntity> findByName(EnumRole name);
}
