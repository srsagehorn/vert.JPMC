Feature: We need to ensure that all of our endpoints have correctly defined behavior

  Scenario: A new user is created
    Given the database is empty
    When client calls POST for api/create/{userId}/{email}
    Then that user should be in the database
    And HttpStatus should be 201