//client->cypress->e2e->example.cy.js
//e2e test case is written here
describe('Open Home Page',()=>{
    it('Open Home Page',()=>{
        cy.visit('/') //visit('url') to visit a url
        cy.contains("Welcome") //if a text is present in the document
    })
})