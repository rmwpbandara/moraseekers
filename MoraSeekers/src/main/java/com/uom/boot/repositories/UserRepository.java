package com.uom.boot.repositories;

import com.uom.boot.domain.UserDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository <UserDTO,Integer> {

    @Query("SELECT u.id FROM UserDTO u where u.email = :email")
    UserDTO findByEmail(String email);
}
