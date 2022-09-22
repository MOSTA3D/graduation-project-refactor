package com.graduation.api.repositories;

import com.graduation.api.entities.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<RoleEntity, Long> {
}
