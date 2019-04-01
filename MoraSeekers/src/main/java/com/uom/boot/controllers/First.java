package com.uom.boot.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/api")
public class First {
    @GetMapping ("/hello")
    public String hello()
    {
        return "Hello World";
    }
}
