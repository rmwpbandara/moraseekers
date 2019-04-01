package com.uom.boot.Services.impl;

import com.uom.boot.domain.UserDTO;
import com.uom.boot.Services.UserServices;
import com.uom.boot.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserServices
{
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<UserDTO> findAllUsers()
    {
        List<UserDTO> allusers = userRepository.findAll();
        return allusers;
    }


    @Override
    public String saveUser (UserDTO userdata) {
        userRepository.save(userdata);
        return "Data saved";
    }

    @Override
    public String updateUser (UserDTO newUserData) {
        String msg = null;
        if(newUserData.getId() != null) {
            userRepository.save(newUserData);
            msg = "Data updated";
        }else {
            msg = "Error";
        }
        return msg;
    }
    @Override
    public UserDTO findById(Integer id) {
        return userRepository.findOne(id);
    }

    @Override
    public UserDTO login(UserDTO logedUser) {

        String email = logedUser.getEmail();
        List<UserDTO> allusers = userRepository.findAll();

        UserDTO logUser = userRepository.findByEmail(email);



        return logUser;

    }
}
