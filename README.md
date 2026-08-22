# Gherkin Academy

Plataforma web para aprender Gherkin e praticar a escrita de testes com Cypress.

## Objetivo

A Gherkin Academy ajuda iniciantes a entender a sintaxe do Gherkin, escrever cenários e conhecer o caminho básico até a automação de testes de regressão com Cypress.

Acesse a plataforma em [ericasouzaqa.github.io/gherkin-academy](https://ericasouzaqa.github.io/gherkin-academy/). O conteúdo é baseado nas documentações oficiais do [Cucumber](https://cucumber.io/docs/gherkin/reference/) e do [Cypress](https://docs.cypress.io/).

## O que existe na plataforma

- Trilha de aprendizagem de Gherkin, do básico ao avançado.
- Exercícios de Gherkin com correção determinística.
- Área para inserir uma história da P.O. e escrever uma especificação `.feature`.
- Suporte às palavras-chave de Gherkin em português e inglês.
- Aulas introdutórias de terminal, Node.js e Cypress.
- Exemplos de seletores, asserções, fixtures, interceptação e execução de regressão.
- Persistência local de progresso, rascunhos, respostas e preferência de tema.

## Limites

A plataforma não executa testes Cypress reais e não usa IA para corrigir atividades. Ela oferece conteúdo, exemplos, exercícios e validações estruturais locais. A execução real dos testes acontece no projeto Cypress da pessoa, no terminal ou em uma integração contínua configurada por ela.

## Execução local

Requer Node.js e pnpm. Na raiz do projeto:

```bash
pnpm install
pnpm dev
```

Para validar o projeto:

```bash
pnpm check
pnpm build
```

## Fontes principais

- [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/)
- [Gherkin Languages](https://cucumber.io/docs/gherkin/languages/)
- [Cypress Installation](https://docs.cypress.io/app/get-started/install-cypress)
- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress GitHub Actions](https://docs.cypress.io/app/continuous-integration/github-actions)
