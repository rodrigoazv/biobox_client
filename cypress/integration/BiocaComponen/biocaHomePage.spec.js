describe("Teste homepage SearchBar", () => {
    it("Should return true when searchbar show map products", () => {
      cy.visit("/");
  
      cy.get("[data-cy=increment-button]").click({multiple: true});
      cy.get("[data-cy=value-quantity]").should("to.have", 2);
    });
  });