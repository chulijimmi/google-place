import "../fixtures/googleMapResponse.json";
describe("app should render welcome text", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("find welcome message", () => {
    cy.get("h1").should("contain", "Welcome to Google Place");
  });
});

describe("app should navigate to feed", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("route to /feed", () => {
    cy.get('[data-testid="btn-feed"]').click();
    cy.intercept("/feed");
  });
});

describe("app should navigate to setting", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("route to /setting", () => {
    cy.get('[data-testid="btn-setting"]').click();
    cy.intercept("/setting");
  });
});

describe("app theme should change to dark and light", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("theme should change to dark and light", () => {
    cy.get('[data-testid="btn-setting"]').click();
    cy.get('[data-testid="rg-theme"]').should("be.visible");
    cy.get('[data-testid="fc-dark"]')
      .click()
      .find("span")
      .should("have.class", "Mui-checked");
    cy.get('[data-testid="fc-light"]')
      .click()
      .find("span")
      .should("have.class", "Mui-checked");
  });
});

describe("app theme should able to search place", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("visit /feed and search place", () => {
    cy.get('[data-testid="btn-feed"]').click();
    cy.get('[data-testid="input-place"]').type("Ja");
    cy.fixture("googleMapResponse.json").then((googleMaps) => {
      cy.intercept("GET", "/maps/api/place/autocomplete/json", {
        body: googleMaps
      }).as("googleMaps");
      cy.wait(500);
    });
    cy.get('[data-testid="item-place"]')
      .should("have.length", 5)
      .each(($el, index) => {
        if (index === 0) {
          cy.wrap($el).click();
        }
      })
      .then(($el) => {
        expect($el).to.have.length(0);
      });
  });
});
