
package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class AccountController {

    @GetMapping("/accounts/{number}")
    public Account getAccountDetails(@PathVariable String number) {
        return new Account("00987987973432", "savings", 234343);
    }
}

class Account {
    private String number;
    private String type;
    private double balance;

    public Account(String number, String type, double balance) {
        this.number = number;
        this.type = type;
        this.balance = balance;
    }

    public String getNumber() { return number; }
    public String getType() { return type; }
    public double getBalance() { return balance; }
}
