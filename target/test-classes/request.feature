Feature: We need to ensure our Request CRUD methods work

  Scenario: getAllRequests should return an empty list if there are no requests
<<<<<<< HEAD
    Given The Request table is empty
=======
    Given Request table is empty
>>>>>>> origin
    When I call getAllRequests
    Then I should get an empty list back


  Scenario: getAllRequests should return a list of all the requests in the table
<<<<<<< HEAD
    Given The Request table is empty
    When I add two Requests and call getAllRequests
    Then Both Requests should be in the resulting list

  Scenario: getRequestByID should return the request which corresponds to that ID
    Given The Request table is empty
    When I add a Request and call getRequestByID using the id of the new Request
    Then I should get the request I just added

  Scenario: getRequestByUser should return the request which corresponds to that user ID
    Given The Request table is empty
    When I add a Request and call getRequestsForUser using the user id of the new Request
    Then I should get the request I just added

  Scenario: updateRequest should alter the information in a request
    Given The Request table is empty
    When I call updateRequest on that Request
    Then That request should be changed

    Scenario: deleteRequest should delete
      Given The Request table is empty
      When I add a Request and call deleteRequest on that Request
      Then That request should be deleted from the table
=======
    Given Request table has a request added to it
    When I call getAllRequests
    Then I should get that request back
>>>>>>> origin


