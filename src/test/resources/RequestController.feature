Feature: We need to ensure that all of our endpoints have correctly defined behavior

  Scenario: Client wants to create new user
    Given the database is empty
    When client calls POST for api/create/{userId}/{email}
    Then that user should be in the database
    And HttpStatus should be 200 OK

  Scenario: Client wants to create new Request
    Given the database is empty
    When client calls POST for api/request
    Then that request should be in the database
    And HttpStatus should be 200 OK

  Scenario: Client wants to see all of their existing requests
    Given the database is empty
    When client calls GET for api/request
    Then client should see whatever requests they've added
    And HttpStatus should be 200 OK

  Scenario: Client wants to delete a request
    Given the database is empty
    When client calls DELETE for api/delete
    Then the request they delete is deleted
    And HttpStatus should be 204 No Content