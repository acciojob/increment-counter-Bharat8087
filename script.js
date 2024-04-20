/*let counter = 0;
document.getElementById("counter").textContent = counter;

document.getElementById("incrementBtn").addEventListener("click", function() {
    alert("Current Counter Value: " + counter);
    counter++;
    document.getElementById("counter").textContent = counter;
});*/
() => { 
  cy.visit(baseUrl); 
  cy.on('window:alert', alertText => { 
    const counterValue = parseInt(alertText.replace('Current Counter Value: ', ''));
    expect(counterValue).to.equal(0); 
  }); 
  cy.get('#incrementBtn').click(); 
}


