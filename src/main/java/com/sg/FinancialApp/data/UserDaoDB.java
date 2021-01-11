/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.FinancialApp.data;

import com.sg.FinancialApp.models.User;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

/**
 *
 * @author isaacrez
 */
@Repository
public class UserDaoDB implements UserDao {
    
    private final JdbcTemplate jdbc;
    
    @Autowired
    public UserDaoDB(JdbcTemplate jdbcTemplate) {
        this.jdbc = jdbcTemplate;
    }


    // FUNCTIONAL
    @Override
    public List<User> getAllUsers() {
        final String GET_ALL_USERS = "SELECT * FROM user";
        return jdbc.query(GET_ALL_USERS, new UserMapper());
    }


    // NOT TESTED
    @Override
    public User getUserById(String id) {
        try {
            final String GET_USER_BY_ID = "SELECT * FROM user WHERE userId = ?";
            return jdbc.queryForObject(GET_USER_BY_ID, new UserMapper(), id);
        } catch (DataAccessException e) {
            return null;
        }
    }


    // FUNCTIONAL
    @Override
    public User addUser(User user) {
        final String INSERT_USER = "INSERT INTO user (userId, email) VALUES(?,?)";
        jdbc.update(INSERT_USER, user.getEmail());
        return user;
    }


    // NOT TESTED
    @Override
    public void updateUser(User user) {
        final String sql = "UPDATE finance.user SET email = ? WHERE userId = ?";
        // May need to check the update.
        jdbc.update(sql, user.getId(), user.getEmail());

    }

    // NOT TESTED
    @Override
    public void deleteUserById(String id) {
        final String sql = "DELETE FROM todo WHERE id = ?";
        jdbc.update(sql, id);
    }
    
    public static final class UserMapper implements RowMapper<User> {
        @Override
        public User mapRow(ResultSet rs, int index) throws SQLException {
            User user = new User();
            user.setId(rs.getString("userId"));
            user.setEmail(rs.getString("email"));
            return user;
        }
    }
}
