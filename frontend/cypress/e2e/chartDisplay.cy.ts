import { commentResponse } from "../fixtures/getCommentThreads";

describe("Chart Display", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("loads the chart when data is present.", () => {
    cy.getByTestId("recharts-wrapper").should("exist");
  });

  it("should not load anything if no data is available.", () => {
    cy.intercept("GET", /8000\/chart\/data/, {});
    cy.getByTestId("recharts-wrapper").should("not.exist");
    cy.getByTestId("no-data-card").should("exist");
  });

  it("should have all major chart elements", () => {
    cy.getByTestId("recharts-wrapper").find(".recharts-legend-wrapper");
    cy.getByTestId("recharts-wrapper").find(".recharts-xAxis");
    cy.getByTestId("recharts-wrapper").find(".recharts-yAxis");
    cy.getByTestId("recharts-wrapper").find(".recharts-bar-rectangle");
  });

  it("should not render a comment bubble if none exist", () => {
    cy.intercept("GET", /8000\/chart\/comment_threads/, []);
    cy.getByTestId("comment-bubble").should("not.exist");
  });

  it("should display the correct number of comment bubbles if comments exist", () => {
    cy.intercept("GET", /8000\/chart\/comment_threads/, commentResponse);
    cy.getByTestId("comment-bubble").should("have.length", 3);
  });
});

export {};
