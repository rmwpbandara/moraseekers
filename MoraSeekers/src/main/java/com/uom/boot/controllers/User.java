package com.uom.boot.controllers;

import com.uom.boot.Services.UserServices;
import com.uom.boot.domain.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class User {

    @Autowired
    private UserServices userServices;


    @CrossOrigin(origins = "*")
    @GetMapping ("/all")
    public List<UserDTO> allUsers()
    {
        return userServices.findAllUsers();
    }
    @CrossOrigin(origins = "*")
    @PostMapping ("/add")
    public String addUser(@RequestBody UserDTO Userdata){
        return userServices.saveUser(Userdata);
    }

    @PutMapping ("/update")
    public String updateUser (@RequestBody UserDTO newUserData) {
        return userServices.updateUser(newUserData);
    }

    @GetMapping ("/find/{id}")
    public UserDTO getUserById (@PathVariable Integer id) {
        return userServices.findById (id);

    }

    @PostMapping ("/login")
    public UserDTO  getUserById (@RequestBody UserDTO loginUserData ) {

        return userServices.login(loginUserData);

    }

//    @DeleteMapping ("/delete/{id}")
//    public


}
