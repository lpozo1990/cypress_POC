Feature: duckduckgo.com
  Scenario: visiting the frontpage
    When I go to eventsdev url
    Then I click on the host btn
    Then I should see the login page
    Then I should enter username and password
    Then I should see the host page