Feature: all Crud operations of the User table should function properly

  Scenario: Add and Get User By ID
    Given The User table is empty
    When user adds to User table with ID and email
    Then you should be able to get that user by ID

    Scenario: Add Multiple users and getAll
      Given The User table is empty
      When user adds 2 entries to the User table
      Then both entries should be in the table

      Scenario: Update a User AKA change an email
        Given The User table is empty
        When  the user adds an entry and updates the email
        Then  the email should be changed for that entry


        Scenario: Delete a User
          Given The User table is empty
          When the user adds and deletes an entry
          Then the table should be empty