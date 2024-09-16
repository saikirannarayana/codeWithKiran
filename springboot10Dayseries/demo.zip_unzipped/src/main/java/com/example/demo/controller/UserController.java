package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.UserService;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.entity.User;
import com.example.demo.exception.ResourceNotFoundException;


@RestController
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long Id) {
        return ResponseEntity.ok(userService.getUserById(Id));
    }
    
    @PostMapping("/users")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping("/findUser/{id}")
    public ResponseEntity<User> getMethodName(@PathVariable("id") Long Id) {

        User user = userService.getUserById(Id);
        if(user == null){
            throw new EntityNotFoundException("Entity not found exception");
        }
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
    
    @GetMapping("/triggerException")
    public ResponseEntity<User> triggerException() {
        throw new EntityNotFoundException("This is a test exception");
    }
}
