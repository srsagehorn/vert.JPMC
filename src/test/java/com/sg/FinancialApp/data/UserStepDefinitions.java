package com.sg.FinancialApp.data;

import com.sg.FinancialApp.models.Request;
import com.sg.FinancialApp.models.User;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;
public class UserStepDefinitions extends SpringTestIntegration{
    @Autowired
    UserDao udao;


    User user = new User();
    User user2 = new User();

    @Given("The User table is empty")
    public void emptyTable(){
        for(User l : udao.getAllUsers()){
            udao.deleteUserById(l.getId());
        }
    }

    @When("user adds to User table with ID and email")
    public void isAdded(){
        user.setId("1234dsaf");
        user.setEmail("place@holder.com");
        udao.addUser(user);
    }

    @Then("you should be able to get that user by ID")
    public void resultAdd(){
        User u2 = udao.getUserById("1234dsaf");
        assertEquals(u2.getId(), user.getId());
        assertEquals(u2.getEmail(), user.getEmail());
    }

    @When("user adds 2 entries to the User table")
    public void addTwo(){
        user.setId("1234dsaf");
        user.setEmail("place@holder.com");
        udao.addUser(user);
        user2.setId("1324dgwaf");
        user2.setEmail("place2@holder.com");
        udao.addUser(user2);
    }

    @Then("both entries should be in the table")
    public void checkBothEntriesWithGetAll(){
        List<User> uList = udao.getAllUsers();
        assertTrue(uList.contains(user));
        assertTrue(uList.contains(user2));
    }


    @When("the user adds an entry and updates the email")
    public void updateEmail(){
        user.setId("1234dsaf");
        user.setEmail("place@holder.com");
        udao.addUser(user);

        user.setEmail("another@domain.com");
        udao.updateUser(user);
    }

    @Then("the email should be changed for that entry")
    public void updateResult(){
        assertNotEquals("place@holder.com", udao.getUserById(user.getId()).getEmail());
        udao.deleteUserById(user.getId());
    }


    @When("the user adds and deletes an entry")
    public void addAndDelete(){
        user.setId("1234dsaf");
        user.setEmail("place@holder.com");
        udao.addUser(user);

        udao.deleteUserById(user.getId());
    }

    @Then("the table should be empty")
    public void deleteCheck(){
        assertEquals(udao.getAllUsers().size(), 0);
    }

}
