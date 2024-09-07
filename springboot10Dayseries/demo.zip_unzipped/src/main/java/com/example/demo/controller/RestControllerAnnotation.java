package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.GreetingService;

@RestController
public class RestControllerAnnotation {

    private GreetingService greetingService;

    @Autowired
    public RestControllerAnnotation(GreetingService greetingService){
        this.greetingService = greetingService;
    }
    
    @Autowired
    public void setGreetingService(GreetingService greetingService)
    {
        this.greetingService= greetingService;
    }



    @GetMapping("/restControllerExample")
    public String restControllerExample()
    {
        return greetingService.getGreeting();
    }
}
