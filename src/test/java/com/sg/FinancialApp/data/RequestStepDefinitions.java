package com.sg.FinancialApp.data;

import com.sg.FinancialApp.models.Request;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;


public class RequestStepDefinitions {
    RequestDao rd;
    List<Request> reqList = new ArrayList<>();

    Request r1 = new Request();

    @Given("Request table is empty")
    public void is_Empty(){

    }

    @Given("Request table has a request added to it")
    public void add_request(){
        r1.setId(1);
        r1.setStockCode("BTI");
        r1.setTimestamp(new Date());
        r1.setValue("16.12");

        rd.addRequest(r1);
    }

    @When("I call getAllRequests")
    public void call_getAllRequests(){
        reqList = rd.getAllRequests();
    }
    @Then("I should get an empty list back")
    public void i_should_get_empty_list(){
        assertEquals(reqList.size(), 0);
    }

    @Then("I should get that request back")
    public void i_should_get_that_request_back(){
        assertTrue(reqList.contains(r1));
    }
}
