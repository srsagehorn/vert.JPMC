Feature: We need to ensure our Request CRUD methods work

  Scenario: getAllRequests should return an empty list if there are no requests
    Given Request table is empty
    When I call getAllRequests
    Then I should get an empty list back


  Scenario: getAllRequests should return a list of all the requests in the table
    Given Request table has a request added to it
    When I call getAllRequests
    Then I should get that request back


