import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

When("I go to eventsdev url", () => {
  cy.visit("https://eventsdev.superquickquestion.com/");
});

Then("I click on the host btn", () => {
  cy.get('[href="/host"]').click();
});

Then("I should see the login page", () => {
  cy.get("#localAccountForm > .intro > h2").should(
    "contain",
    "Sign in with your email address"
  );
});
