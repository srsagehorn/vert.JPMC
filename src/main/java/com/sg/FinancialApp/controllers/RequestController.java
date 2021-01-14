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
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class RequestController {

    @Autowired
    private final RequestDao requestDao;
    
    public RequestController(RequestDao requestDao) {
        this.requestDao = requestDao;
    }

    // ------- REQUEST ------
    // NOT TESTED
    @PostMapping("/request")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity addRequest(@RequestBody Request request) {
        request = requestDao.addRequest(request);
        return ResponseEntity.ok(request);
    }

    // NOT TESTED
    @DeleteMapping("/delete")
    public ResponseEntity deleteRequestBasedOnId(@RequestBody List<Request> requests) {
        requests.forEach(request -> requestDao.deleteRequestById(request.getId()));
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    // NOT TESTED
    @GetMapping("/request")
    public ResponseEntity getAllRequestsByUserId(@RequestBody User user){
        return ResponseEntity.ok(requestDao.getRequestsForUser(user));
    }
    
    @GetMapping("/request/{requestId}")
    public ResponseEntity getRequestById(@PathVariable int requestId) {
        return ResponseEntity.ok(requestDao.getRequestById(requestId));
    }
    
    @GetMapping("/request/all")
    public ResponseEntity getAllRequest() {
        return ResponseEntity.ok(requestDao.getAllRequests());
    }
}
