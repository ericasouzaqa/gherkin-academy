# Fontes oficiais e critérios de conteúdo

## Gherkin / Cucumber

Fonte principal: [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/).

Critérios usados na plataforma: um arquivo `.feature` possui uma única `Feature`; a `Feature` começa com `Feature:` e agrupa cenários relacionados; `Rule` representa uma regra de negócio e agrupa exemplos; `Scenario` é sinônimo de `Example`; o exemplo segue contexto, evento e resultado; `Given` define o contexto inicial conhecido; `When` descreve a ação ou evento; `Then` descreve um resultado esperado observável; `And` e `But` melhoram a leitura de passos sucessivos; `Background` fornece contexto comum executado antes de cada cenário e deve vir antes dos cenários; `Scenario Outline` é usado com `Examples` para executar o mesmo fluxo com diferentes dados; tabelas de dados usam `|`; Doc Strings usam `\"\"\"`; tags usam `@`; comentários começam com `#`; blocos de comentários não são suportados; a indentação recomendada é de dois espaços; palavras-chave que exigem dois-pontos não devem receber dois-pontos indevidos.

A documentação também informa que palavras-chave são localizadas, que `Scenario` e `Example` são equivalentes e que `*` pode substituir palavras-chave de passos para listas. Os exercícios devem avaliar somente critérios explícitos, não estilo subjetivo.

## Cypress

Fonte principal: [Cypress Installation](https://docs.cypress.io/app/get-started/install-cypress).

Critérios usados na plataforma: Cypress é instalado localmente como dependência de desenvolvimento com `npm install cypress --save-dev`; a aplicação pode ser aberta com `npx cypress open`; o ambiente requer Node.js e um gerenciador de pacotes suportado. O conteúdo também deve ensinar cuidados com o download do binário e scripts de instalação quando aplicável ao gerenciador.

Fonte complementar: [Your First Cypress End-to-End Test](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test).

Critérios usados na plataforma: testes E2E podem ser estruturados em preparar o estado, executar uma ação e fazer uma asserção; no fluxo prático, `cy.visit()` visita a página, `cy.contains()` localiza conteúdo, `.click()` interage, `cy.url().should('include', ...)` valida URL, `cy.get()` seleciona elementos e `.type()` preenche campos; `describe` e `it` vêm do Mocha e `expect` vem do Chai; comandos do Cypress podem ter asserções implícitas e aguardam/repetem até encontrar condições esperadas.

## Política de conteúdo

A aplicação não usa IA, inferência, geração de respostas ou avaliação probabilística. O banco de questões será local e versionado no frontend. Cada item terá resposta esperada, justificativa, fonte oficial e regra de correção. A história da P.O. será apenas um contexto editável fornecido pela pessoa usuária; o sistema não interpretará semanticamente o texto. Nos exercícios de conversão, a correção será feita por padrões e elementos obrigatórios previamente definidos no gabarito.

## Atualização — idioma português do Gherkin

Fonte oficial: https://cucumber.io/docs/gherkin/languages/

A documentação oficial de localização informa que as palavras-chave do Gherkin podem ser traduzidas para vários idiomas e que as traduções são mantidas no repositório oficial do Gherkin. Para português (`pt`), a implementação reconhece as traduções oficiais de Feature, Background, Rule, Scenario, Scenario Outline, Examples, Given, When, Then, And e But. O arquivo `.feature` pode declarar o idioma com `# language: pt` no início.

## Atualização — guia de Cypress

Fontes oficiais: https://docs.cypress.io/app/get-started/open-the-app/ e https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests/

O percurso inicial usa `npx cypress open`, a escolha de E2E Testing no Launchpad, specs em `cypress/e2e` com o padrão `.cy.js`, fixtures em `cypress/fixtures`, suporte em `cypress/support` e configuração em `cypress.config.js`. A execução em terminal usa `npx cypress run`.
