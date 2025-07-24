package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class SpringLearnApplication {

    // Create a logger object for this class
    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        // Log before the application starts
        LOGGER.info("STARTING SpringLearnApplication");

        // Start the Spring Boot application
        SpringApplication.run(SpringLearnApplication.class, args);

        // Log after the application has started
        LOGGER.info("SpringLearnApplication STARTED");
    }
}
