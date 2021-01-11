/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.FinancialApp.controllers;

import com.sg.FinancialApp.data.RequestDao;
import com.sg.FinancialApp.data.UserDao;
import com.sg.FinancialApp.models.Request;
import com.sg.FinancialApp.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.cassandra.CassandraProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

import java.util.Date;
import java.util.List;

/**
 *
 * @author Sebastian Troncoso
 */
@RestController
@RequestMapping("/api")
public class RequestController {

    @Autowired
    private final RequestDao requestDao;
    
    @Autowired
    private final UserDao userDao;
    
    public RequestController(RequestDao requestDao, UserDao userDao) {
        this.requestDao = requestDao;
        this.userDao = userDao;
    }

    // NEED Request for time, stockCode, and value - POST

    @PostMapping("/request/{time}/{stock}/{value}")
    @ResponseStatus(HttpStatus.CREATED)
    public Request addUser(@PathVariable Date time, @PathVariable String stock, @PathVariable String value) {
        Request r = new Request();
        r.setTimestamp(time);
        r.setStockCode(stock);
        r.setValue(value);
        return requestDao.addRequest(r);
    }


    // NEED GET fro time, stockCode, and value - GET ( get request with submitted and current val)
    @GetMapping("/request/{userId}")
    public List<Request> getAllRequestsByUserId(){


        return null;
    }


    //NOT TESTED
    @GetMapping("/stock/{symbol}")
    public String getCurrentStockInformation(@PathVariable String symbol) {
        // Need to send info to the request.
        return null;
    }

    //Inserting use email into database using POST (PASSED TEST - NO EDGE CASE VALIDATION YET)
    @PostMapping("/create/{userId}/{email}")
    @ResponseStatus(HttpStatus.CREATED)
    public User addUser(@PathVariable int userId, @PathVariable String email) {
        User user = new User();
        user.setId(userId);
        user.setEmail(email);
        return userDao.addUser(user);
    }

    // Login, summary, portfolio, search


    // Login -> authentication userName or userEmail
        // delete username as id to delete stock.
    // search stock and save it to dv ->  time, stock, value
    // summary - table -> frontEnd
        // getrequests summary for when the request was input into db and when it was retrieved (stock value -submitted -current)



    // Getting users from the database (PASSED - NO EDGE CASE VALIDATION YET)
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userDao.getAllUsers();
    }

    // NOT TESTED
    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable int id) {
        return userDao.getUserById(id);
    }

    //NOT TESTED
    @DeleteMapping("/user/{id}")
    public void deleteUSerById(@PathVariable int id) {
        userDao.deleteUserById(id);
        // Need a kind of response to show the user was or was not deleted
    }






}
