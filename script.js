describe("Increment Counter Tests", () => {
  it("should increment counter and display correct initial value", () => { 
    cy.visit(baseUrl); 
    cy.on('window:alert', alertText => { 
      const counterValue = parseInt(alertText.replace('Current Counter Value: ', ''));
      expect(counterValue).to.equal(0); 
    }); 
    cy.get('#incrementBtn').click(); 
    cy.get('#counter').should('have.text', '1'); 
  });

  it("should increment counter correctly multiple times", () => { 
    cy.visit(baseUrl); 
    cy.get('#incrementBtn').click(); 
    cy.get('#counter').should('have.text', '1'); 
    cy.get('#incrementBtn').click(); 
    cy.get('#counter').should('have.text', '2'); 
    cy.get('#incrementBtn').click(); 
    cy.get('#counter').should('have.text', '3'); 
  });
});
