package com.project.busbooking.service;

import java.util.List;
import com.project.busbooking.model.User;

public interface UserService {

    User saveUser(User user);

    List<User> getAllUsers();
}
