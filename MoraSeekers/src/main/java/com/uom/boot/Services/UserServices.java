package com.uom.boot.Services;
import com.uom.boot.domain.UserDTO;
import java.util.List;

public interface UserServices
{
    List<UserDTO> findAllUsers();
    String saveUser(UserDTO userdata);

    String updateUser(UserDTO newUserData);

    UserDTO findById(Integer id);

    UserDTO login(UserDTO loginUserData);
}