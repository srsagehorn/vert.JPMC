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
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

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
        final String sql = "SELECT userId, email FROM finance.user";
        return jdbc.query(sql, new UserMapper());
    }


    // NOT TESTED
    @Override
    public User getUserById(String id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }


    // FUNCTIONAL
    @Override
    public User addUser(User user) {
        final String INSERT_USER = "INSERT INTO user(userId, email) VALUES(?, ?)";
        jdbc.update(INSERT_USER,
                user.getId(),
                user.getEmail());
        return user;
    }


    // NOT TESTED
    @Override
    public void updateUser(User user) {
        final String UPDATE_USER = "UPDATE user SET email = ? WHERE userId = ?";
        jdbc.update(UPDATE_USER, user.getEmail(), user.getId());
    }

    // FUNCTIONAL
    @Override
    public void deleteUserById(String id) {
        final String sql = "DELETE FROM finance.user WHERE userId = ?";
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
