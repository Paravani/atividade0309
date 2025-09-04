describe('Deve fazer login na conta', () => {
  it('Deve fazer o login na conta', ()=> {

    cy.visit('https://idp.azerionconnect.com/auth/realms/spil/protocol/openid-connect/auth?client_id=39c6f0dd-0ace-42db-aa86-b9dd1907764a&extra_data&redirect_uri=https%3A%2F%2Fwww.gamesgames.com%2Fusers%2Fauth%2Fgamesgamesconnect%2Fcallback&response_type=code&state=6e3438317c96556ae9b5431de459dfca0ba8875683a30425')
    
    cy.get('#username').type('a3d0d5f3b1@webxios.pro')

    cy.get('#password').type('Senha1234')
    
    cy.get('button[type="submit"][name="login"]').click()

    cy.url().should('include', 'gamesgames.com/')
   
  });
});