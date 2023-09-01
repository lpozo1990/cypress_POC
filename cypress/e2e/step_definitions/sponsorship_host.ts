import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

When("I go to eventsdev url", () => {
  cy.visit(Cypress.env("sponsorship_url"));
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

Then("I should enter username and password", () => {
  const username = Cypress.env("username");
  const password = Cypress.env("password");
  cy.get("#signInName").type(username);
  cy.get("#password").type(password);
  cy.get("#next").click();
});

Then("I should see the host page", () => {
  cy.url().should("eq", "https://eventsdev.superquickquestion.com/host");
});
