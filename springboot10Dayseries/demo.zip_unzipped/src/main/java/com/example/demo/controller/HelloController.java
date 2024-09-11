package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello(){
        return "Hello world";
    }

    @GetMapping("/hello/{name}")
    public String sayHelloByName(@PathVariable String name){
        if(name == null){
           throw new ResourceNotFoundException("name should not be null");
        }
        return "Hello"+name;
    }
}
