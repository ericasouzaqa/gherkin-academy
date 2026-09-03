describe("Fluxos críticos da Gherkin Academy", () => {
  const validFeature = [
    "# language: pt",
    "",
    "Funcionalidade: Carrinho de compras",
    "  Cenário: Adicionar produto disponível",
    "    Dado que estou na página de produtos",
    "    Quando adiciono um produto ao carrinho",
    "    Então vejo o produto no carrinho",
  ].join("\n");

  const invalidFeature = [
    "# language: pt",
    "",
    "Funcionalidade: Carrinho de compras",
    "  Cenário: Adicionar produto disponível",
  ].join("\n");

  function openCreateTests() {
    cy.contains("button", "Criar testes").click();
    cy.contains("h1", "Crie testes").should("be.visible");
    cy.contains("Escreva sua feature").should("be.visible");
  }

  function featureEditor() {
    return cy.get("textarea").last();
  }

  it("exibe a aplicação na página inicial", () => {
    cy.visit("/");

    cy.title().should("eq", "Gherkin Academy — Aprendizado verificável");
    cy.get("#root").should("contain.text", "Gherkin").and("contain.text", "ACADEMY");
    cy.contains("h1", "Aprenda a escrever.").should("be.visible");
  });

  it("navega para Aprender e exibe o conteúdo educacional", () => {
    cy.visit("/");

    cy.contains("button", "Aprender").click();

    cy.contains("h1", "Primeiro o conteúdo.").should("be.visible");
    cy.contains("Fundamentos do Gherkin").should("be.visible");
    cy.contains("O que é Gherkin e o que é uma especificação executável").should(
      "be.visible",
    );
  });

  it("navega para Criar Testes e exibe o editor", () => {
    cy.visit("/");

    openCreateTests();

    featureEditor().should("be.visible");
    cy.contains("button", "Exportar .feature").should("be.visible");
    cy.contains("button", "Verificar estrutura").should("be.visible");
  });

  it("aceita uma feature válida com Dado, Quando e Então", () => {
    cy.visit("/");
    openCreateTests();

    featureEditor().clear().type(validFeature, { parseSpecialCharSequences: false });
    cy.contains("button", "Verificar estrutura").click();

    cy.contains("Estrutura mínima em português encontrada.").should("be.visible");
    cy.contains("Revise a estrutura em português").should("not.exist");
  });

  it("exibe erro para uma feature sem Dado, Quando ou Então", () => {
    cy.visit("/");
    openCreateTests();

    featureEditor().clear().type(invalidFeature, { parseSpecialCharSequences: false });
    cy.contains("button", "Verificar estrutura").click();

    cy.contains("Revise a estrutura em português: falta Dado, Quando, Então.").should(
      "be.visible",
    );
  });
});

