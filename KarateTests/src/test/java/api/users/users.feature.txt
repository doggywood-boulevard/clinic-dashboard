Feature: Users API karate test script 

  Background:
    * url 'http://localhost:8080/'

  Scenario: get all users and then get the first user by id
    Given path 'api/users'
    When method get
    Then status 200

    * def first = response[0]

    Given path 'api/users', first.id
    When method get
    Then status 200

  Scenario: create a user and then get it by id
    * def user =
      """
      {
        "name": "Thomas",
        "username": "thomas.maestas",
        "email": "thomasm1.maestas@gmail.com",
        "address": {
          "street": "5405 Stanton Ave.",
          "suite": "Apt. 3",
          "city": "Pittsburgh",
          "zipcode": "15206"
        }
      }
      """

    Given url 'http://localhost:8080/api/users'
    And request user
    When method post
    Then status 201

    * def id = response.id
    * print 'created id is: ', id

    # Given path id
    # When method get
    # Then status 200
    # And match response contains user
  