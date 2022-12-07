describe("/ route path", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("find welcome message", () => {
    cy.get("h1").should("contain", "Welcome to Google Place");
  });
});
