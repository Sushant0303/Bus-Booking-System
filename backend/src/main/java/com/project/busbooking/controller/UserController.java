package com.project.busbooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.project.busbooking.dto.LoginRequest;
import com.project.busbooking.model.User;

import com.project.busbooking.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;
    
    

    // Save user
    @PostMapping("/add")
    public User addUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    // Get all users
    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    
    @PostMapping("/login")
    public User login(@RequestBody LoginRequest request) {

        return userService.getAllUsers()
                .stream()
                .filter(u ->
                        u.getEmail().equals(request.getEmail()) &&
                        u.getPassword().equals(request.getPassword()))
                .findFirst()
                .orElseThrow(() ->
                        new RuntimeException("Invalid credentials"));
    }
}
