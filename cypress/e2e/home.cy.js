//
describe('Home Page test',()=>{
    it('Check the Input field',()=>{
        cy.visit('/');
        cy.get('input').type('Deadpool')
        cy.get('button#uwu').should('be.visible')
        cy.get('button#uwu').click();
        cy.contains('Welcome,Deadpool')
        cy.get('input').should('have.value','Deadpool')
    })
})