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


    //NOT TESTED
    // NEED Request for time, stockCode, and value - POST
    @PostMapping("/request/{userId}/{time}/{stock}/{value}")
    @ResponseStatus(HttpStatus.CREATED)
    public Request addUser(@PathVariable String userId, @PathVariable Date time, @PathVariable String stock, @PathVariable String value) {
        Request r = new Request();
        r.setTimestamp(time);
        r.setStockCode(stock);
        r.setValue(value);
        return requestDao.addRequest(userId, r);
    }

    // NOT TESTED
    // Get all requests from user id with submitted and current stock val)
    @GetMapping("/requests/{userId}")
    public List<Request> getAllRequestsByUserId(@PathVariable String userId){
        return requestDao.getAllRequests(userId);
    }

    //NOT TESTED
    // WE NEED A DELETE METHOD TO DELETE ALL REQUESTS FROM USER ID

    //NOT TESTED
    // WE NEED A DELETE METHOD TO DELETE SINGLE REQUEST FROM USER ID

    //NOT TESTED
    //Inserting use email into database using POST (PASSED TEST - NO EDGE CASE VALIDATION YET)
    @PostMapping("/create/{userId}/{email}")
    @ResponseStatus(HttpStatus.CREATED)
    public User addUser(@PathVariable String userId, @PathVariable String email) {
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


    // NOT TESTED
    // DELETES USER FROM DATABASE
    @DeleteMapping("/user/{id}")
    public void deleteUSerById(@PathVariable int id) {
        userDao.deleteUserById(id);
        // Need a kind of response to show the user was or was not deleted
    }






}
