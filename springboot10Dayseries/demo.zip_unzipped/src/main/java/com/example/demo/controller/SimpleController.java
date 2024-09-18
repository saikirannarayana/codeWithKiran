package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SimpleController {

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("GET request successful");
    }

    @PostMapping("/test")
    public ResponseEntity<String> postTest() {
        return ResponseEntity.ok("POST request successful");
    }
}

