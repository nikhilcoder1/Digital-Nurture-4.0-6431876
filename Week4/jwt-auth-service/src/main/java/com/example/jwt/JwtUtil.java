package com.example.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    private final String SECRET_KEY = "my_secret_key";  // You can use env/config instead

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))              // Token issue time
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 10)) // Token valid for 10 mins
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
}