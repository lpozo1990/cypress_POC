import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

When("I go to duckduckgo.com", () => {
  cy.visit("https://duckduckgo.com/");
});

Then("I should see a search bar", () => {
  cy.get("#searchbox_input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );

  assert.deepEqual({}, {});
});
