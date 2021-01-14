package com.sg.FinancialApp.data;

import com.sg.FinancialApp.models.Request;
import com.sg.FinancialApp.models.User;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.sql.Date;
import java.util.List;

import static org.junit.Assert.*;


public class RequestStepDefinitions extends SpringTestIntegration {

    @Autowired
    RequestDao rdao;

    @Autowired
    UserDao udao;

    List<Request> reqList = new ArrayList<>();

    Request r1 = new Request();
    Request r2 = new Request();

    @Given("The Request table is empty")
    public void is_Empty(){
        for(Request r : rdao.getAllRequests()){
            rdao.deleteRequestById(r.getId());
        }

    }
    @When("I call getAllRequests")
    public void call_getAllRequests(){
        reqList = rdao.getAllRequests();
    }


    @When("I add two Requests and call getAllRequests")
    public void add_TwoAndCallGetAllRequests(){
        r1.setId(1);
        r1.setUserId("null");
        r1.setQuantity(0.012f);
        r1.setStockCode("BTI");
        r1.setTimestamp(new Date(System.currentTimeMillis()));
        r1.setValue("16.12");

        rdao.addRequest(r1);

        r2.setId(2);
        r2.setUserId("null");
        r2.setQuantity(0.032f);
        r2.setStockCode("TSLA");
        r2.setTimestamp(new Date(System.currentTimeMillis()));
        r2.setValue("26.12");

        rdao.addRequest(r2);


        reqList = rdao.getAllRequests();
    }

    @When("I call updateRequest on that Request")
    public void call_updateRequest(){
        r1.setId(1);
        r1.setUserId("1");
        r1.setQuantity(0.012f);
        r1.setStockCode("BTI");
        r1.setTimestamp(new Date(System.currentTimeMillis()));
        r1.setValue("16.12");

        rdao.addRequest(r1);


        r2.setId(r1.getId());
        r2.setUserId(r1.getUserId());
        r2.setValue(r1.getValue());
        r2.setQuantity(r1.getQuantity());
        r2.setTimestamp(r1.getTimestamp());
        r2.setStockCode(r1.getStockCode());

        r1.setStockCode("TSLA");
        rdao.updateRequest(r1);
    }

    @When("I add a Request and call getRequestByID using the id of the new Request")
    public void call_getRequestByID(){
        r1.setId(1);
        r1.setUserId("1");
        r1.setQuantity(0.012f);
        r1.setStockCode("BTI");
        r1.setTimestamp(new Date(System.currentTimeMillis()));
        r1.setValue("16.12");

        rdao.addRequest(r1);

        r2 = rdao.getRequestById(r1.getId());
    }

    @When("I add a Request and call getRequestsForUser using the user id of the new Request")
    public void call_getRequestsForUser(){
        r1.setId(1);
        r1.setUserId("1");
        r1.setQuantity(0.012f);
        r1.setStockCode("BTI");
        r1.setTimestamp(new Date(System.currentTimeMillis()));
        r1.setValue("16.12");

        rdao.addRequest(r1);


    }

    @When("I add a Request and call deleteRequest on that Request")
    public void addAndDelete(){
        r1.setId(1);
        r1.setUserId("1");
        r1.setQuantity(0.012f);
        r1.setStockCode("BTI");
        r1.setTimestamp(new Date(System.currentTimeMillis()));
        r1.setValue("16.12");

        rdao.addRequest(r1);

        rdao.deleteRequestById(r1.getId());
    }


    @Then("I should get an empty list back")
    public void i_should_get_empty_list(){
        assertEquals(reqList.size(), 0);
    }

    @Then("I should get the request I just added")
    public void i_should_get_that_request_back(){
        assertEquals(r1.getId(), r2.getId());
        //assertEquals(r1.getStockCode(), r2.getStockCode());
        //assertEquals(r1.getQuantity(),r2.getQuantity());
        //assertEquals(r1.getTimestamp(), r2.getTimestamp());
        //assertEquals(r1.getValue(), r2.getValue());
    }

    @Then("That request should be in the list")
    public void reqInListFromUserID(){
        User user = new User();
        user.setEmail("f@u.com");
        user.setId("1");


        List<Request> reqList= rdao.getRequestsForUser(user);
    }

    @Then("That request should be changed")
    public void reqChanged(){
        assertNotEquals(r1,r2);
    }

    @Then("Both Requests should be in the resulting list")
    public void result_twoAddGetAll(){

        assertEquals(reqList.get(1).getId(), r1.getId());
        assertEquals(reqList.get(0).getId(), r2.getId());

    }


    @Then("That request should be deleted from the table")
    public void deleted(){
        assertEquals(rdao.getAllRequests().size(), 0);
    }
}
