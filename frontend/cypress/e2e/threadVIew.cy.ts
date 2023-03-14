describe("Thread functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("doesn't show any threads if none are selected.", () => {
    cy.getByTestId("thread-no-selection").should("exist");
    cy.getByTestId("thread-content").should("not.exist");
  });

  it("should show a thread with comments when one is selected.", () => {
    cy.getByTestId("comment-bubble").first().click();
    cy.getByTestId("thread-no-selection").should("not.exist");
    cy.getByTestId("thread-content").should("exist");
    cy.getByTestId("comment-form").should("exist");
    cy.getByTestId("thread-title").should("exist");
    cy.getByTestId("comment-card").should("exist");
    cy.getByTestId("no-messages").should("not.exist");
  });

  it("should show an empty thread if a bar without comments is selected.", () => {
    cy.intercept("GET", /8000\/chart\/comment_threads/, []);
    cy.get(".recharts-bar-rectangle").first().click();
    cy.getByTestId("thread-no-selection").should("not.exist");
    cy.getByTestId("thread-content").should("exist");
    cy.getByTestId("comment-form").should("exist");
    cy.getByTestId("thread-title").should("exist");
    cy.getByTestId("comment-card").should("not.exist");
    cy.getByTestId("no-messages").should("exist");
  });
});

export {};
