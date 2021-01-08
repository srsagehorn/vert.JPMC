/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sg.FinancialApp.data;

import com.sg.FinancialApp.models.User;
import java.util.List;
import org.springframework.stereotype.Repository;

/**
 *
 * @author isaacrez
 */
@Repository
public interface UserDao {
    List<User> getAllUsers();
    User getUserById(int id);
    User addUser();
    void updateUser(User user);
    void deleteUserById(int id);
}
