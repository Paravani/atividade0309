describe("Tela de login", function () {
  beforeEach(function () {
    cy.visit("https://forum.adrenaline.com.br");
    cy.contains("Log in").click(); // Corrigido para abrir o modal de login
  });

  it("Deve entrar com o login ", function () {
    cy.get('input[name="login"]').type("jogino9459@skateru.com");
    cy.get('input[name="password"]').type("123456teste");
    cy.get('button[class="button button--icon button--icon--login button--primary"]').click();

  });

  it("Deve falhar o login com e-mail errado", function () {
    cy.get('input[name="login"]').type("usuario_errado@skateru.com");
    cy.get('input[name="password"]').type("123456teste");
    cy.get('button[class="button button--icon button--icon--login button--primary"]').click();

    cy.contains("O usuário solicitado 'usuario_errado@skateru.com' não pode ser encontrado.").should("be.visible");
  });


  it("Deve falhar o login com a senha errado", function () {
    cy.get('input[name="login"]').type("jogino9459@skateru.com");
    cy.get('input[name="password"]').type("123456");
    cy.get('button[class="button button--icon button--icon--login button--primary"]').click();

    cy.contains("Senha errada. Tente novamente.").should("be.visible");
  });
});