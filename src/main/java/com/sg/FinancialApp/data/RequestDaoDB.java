/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.FinancialApp.data;

import com.sg.FinancialApp.models.Request;
import com.sg.FinancialApp.models.User;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author isaacrez
 */
public class RequestDaoDB implements RequestDao {
 
    private final JdbcTemplate jdbc;
    
    @Autowired
    public RequestDaoDB(JdbcTemplate jdbcTemplate) {
        this.jdbc = jdbcTemplate;
    }

    @Override
    public List<Request> getAllRequests(String userId) {
        String GET_ALL_REQUESTS = "SELECT * FROM request";
        return jdbc.query(GET_ALL_REQUESTS, new RequestMapper());
    }

    @Override
    public List<Request> getRequestsForUser(User user) {
        try {
            String GET_REQUESTS_FOR_USER = "SELECT * FROM request AS r"
                    + "JOIN user_request AS ur ON r.requestId = ur.user_request "
                    + "WHERE ur.userId = ?";
            return jdbc.query(GET_REQUESTS_FOR_USER, new RequestMapper(), user.getId());
        } catch (DataAccessException e) {
            return new ArrayList<Request>();
        }
    }

    @Override
    public Request getRequestById(int id) {
        try {
            String GET_REQUEST_BY_ID = "SELECT * " +
                "FROM request " +
                "WHERE requestId = ?";
        
            return jdbc.queryForObject(GET_REQUEST_BY_ID, new RequestMapper(), id);
        } catch (DataAccessException e) {
            return null;
        }
    }

    @Override
    @Transactional
    public Request addRequest(String userId, Request request) {
        String INSERT_NEW_REQUEST = "INSERT INTO request (reqTime, quantity, stockCode) " +
                "VALUES(?, ?, ?);";
        
        jdbc.update(INSERT_NEW_REQUEST, request.getTimestamp(), request.getQuantity(), request.getStockCode());
        int newId = jdbc.queryForObject("SELECT LAST_INSERT_ID()", Integer.class);
        request.setId(newId);
        
        String INSERT_NEW_USER_REQUEST = "INSERT INTO user_request (userId, requestId) "
                + "VALUES(?, ?)";
        jdbc.update(INSERT_NEW_USER_REQUEST, request.getUserId(), request.getId());
                
        return request;
    }

    @Override
    public void updateRequest(Request request) {
        String UPDATE_GAME = "UPDATE request " +
                "SET timestamp = ?, stockCode = ?, value = ? " +
                "WHERE id = ?; ";
        jdbc.update(UPDATE_GAME, 
                request.getTimestamp(), 
                request.getStockCode(),
                request.getValue(),
                request.getId());
    }

    @Override
    @Transactional
    public void deleteRequestById(int id) {
        String DELETE_USER_REQUEST = "DELETE FROM user_request WHERE requestId = ?";
        jdbc.update(DELETE_USER_REQUEST, id);
        
        String DELETE_REQUEST = "DELETE FROM request WHERE id = ?";
        jdbc.update(DELETE_REQUEST, id);
    }
    
    public static final class RequestMapper implements RowMapper<Request> {
        @Override
        public Request mapRow(ResultSet rs, int index) throws SQLException {
            Request request = new Request();
            request.setId(rs.getInt("requestId"));
            request.setTimestamp(rs.getDate("reqTime"));
            request.setStockCode(rs.getString("stockCode"));
            request.setValue(rs.getString("value"));
            return request;
        }
    }

}
