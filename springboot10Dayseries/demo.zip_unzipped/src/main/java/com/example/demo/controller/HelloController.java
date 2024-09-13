package com.example.demo.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;

@RestController
public class HelloController {
    private static final Logger logger = LoggerFactory.getLogger(HelloController.class);


    @GetMapping("/hello")
    public String sayHello(){
        logger.debug("Handling /hello request");
        return "Hello world";
    }

    @GetMapping("/hello/{name}")
    public String sayHelloByName(@PathVariable String name){
        logger.debug("Handling /hello/{} request", name);
        if (name == null) {
            logger.debug("Name is null");
        }
        if (name.isEmpty()) {
            logger.debug("Name is empty");
        }
    
        if(name == null ||name.isEmpty()){
            logger.warn("Name parameter is null or empty. Throwing ResourceNotFoundException.");
           throw new ResourceNotFoundException("name should not be null");
        }

        if ("kiran".equals(name)) {
            logger.warn("Name parameter is 'kiran'. Throwing ResourceNotFoundException.");
            throw new ResourceNotFoundException("Name cannot be 'kiran'");
        }
        
        logger.info("Returning greeting for name: {}", name);
        return "Hello"+name;
    }
}
