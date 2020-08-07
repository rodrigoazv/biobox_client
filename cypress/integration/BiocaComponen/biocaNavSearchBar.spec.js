describe("Teste homepage SearchBar", () => {
  it("Should return true when searchbar show map products", () => {
    cy.visit("/");

    cy.get("[data-cy=input-task]").type("Alface");
    cy.get("[data-cy=product-rows]").should("to.have.length", 1);
    cy.contains("Alface").should("to.have.length", 1);
  });
  it("Should return true when searchbar show one Product ", () => {
    cy.visit("/");

    cy.get("[data-cy=input-task]").type("Coentro");
    cy.get("[data-cy=product-rows]").should("to.have.length", 1);
    cy.contains("Coentro").should("to.have.length", 1);
  });
});

describe("Teste homepage SearchBar return all products or nothing", () => {
  it("Should return all products when searchbar clicked", () => {
    cy.visit("/");

    cy.get("[data-cy=input-task]").type(" ");
    cy.get("[data-cy=product-rows]").should("to.have.length.be.gt", 1);
  });

  it("Should return 0 products when search not exist ", () => {
    cy.visit("/");

    cy.get("[data-cy=input-task]").type("Not exist");
    cy.get("[data-cy=product-rows]").should("to.have.length", 0);
  });
});
