package com.cognizant.spring.learn.controller;

import com.cognizant.spring.learn.model.Country;
import com.cognizant.spring.learn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) throws Exception {
        return countryService.getCountry(code);
    }
}