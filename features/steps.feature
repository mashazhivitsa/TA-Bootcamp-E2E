Feature: Bootcamp E2E

    Background: 
    Given I am on the online shop page
    * I close the promo banner if it appears

  Scenario Outline: Search bar
    When I enter the <word> into the search bar
    And I click the search button
    Then I see that at least one search result

      Examples:
          | word    |
          | Windows | 

  Scenario: Internet shop logo button

    Given I open Today Best Deals tab
    When I click the Internet shop logo
    Then Main page is opened

