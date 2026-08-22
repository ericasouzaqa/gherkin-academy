# Gherkin Academy

A Gherkin Academy é uma plataforma de estudo e prática para quem quer aprender Gherkin e começar a escrever testes de regressão com Cypress. O conteúdo foi pensado para quem está no início: primeiro apresenta os conceitos, depois mostra exemplos e então propõe atividades de verificação.

## O que a plataforma oferece

Na entrada, há dois caminhos. **Aprender Gherkin** apresenta a linguagem em uma sequência que vai dos fundamentos até a automação. **Criar testes com Gherkin** oferece uma área para inserir a história da P.O., escrever uma especificação e exportá-la para um arquivo `.feature`.

A trilha de aprendizagem aborda a estrutura de uma `Funcionalidade`, cenários, regras de negócio, contexto comum, exemplos parametrizados, tabelas, doc strings, tags e comentários. A atividade de verificação aparece depois do conteúdo. As respostas são comparadas com critérios explícitos e cada resultado mostra a justificativa da regra utilizada, além do link para a fonte correspondente.

O módulo avançado apresenta o caminho do primeiro teste Cypress: pré-requisitos, instalação, abertura do projeto, localização dos arquivos, seletores, assertions, fixtures, interceptação, organização da suíte e execução. Há exemplos copiáveis, links para a documentação oficial e uma simulação visual de uma execução de regressão.

## Como usar

Comece por **Aprender Gherkin** e siga os módulos na ordem. Leia as lições e marque o conteúdo como estudado para liberar a atividade de verificação. Depois, abra **Criar testes com Gherkin**, cole ou importe a história da P.O., escreva a `Funcionalidade`, escolha português ou inglês, verifique a estrutura e exporte o arquivo.

No módulo Cypress, comece pelos pré-requisitos e pelo primeiro teste. Em seguida, entenda seletores, ações e asserções, como o `Então` se transforma em uma verificação no código, como dados de teste ficam em fixtures e como uma requisição pode ser observada ou controlada com `cy.intercept()`. O botão de copiar coloca cada exemplo no clipboard para você testar no seu próprio projeto.

## Execução local

Você precisa de Node.js instalado. Na raiz do projeto, instale as dependências e inicie o servidor de desenvolvimento:

```bash
pnpm install
pnpm dev
```

Para verificar a tipagem e gerar a versão de produção:

```bash
pnpm check
pnpm build
```

O projeto é um frontend React com Vite, TypeScript, Tailwind CSS e componentes shadcn/ui. O progresso, a história da P.O. e a feature são mantidos no armazenamento local do navegador nesta versão.

## Estrutura principal

| Caminho | Responsabilidade |
| --- | --- |
| `client/src/pages/Home.tsx` | Entrada, trilha de Gherkin e bancada de criação |
| `client/src/components/CypressLearningPanel.tsx` | Aulas, exemplos, workflow e simulação de regressão |
| `client/src/components/LessonDetailPanel.tsx` | Objetivo, explicação, exemplo, prática e fonte de cada lição |
| `client/src/content/lessonContent.ts` | Conteúdo detalhado da trilha, em português, com referências oficiais |
| `client/src/components/ui/` | Componentes de interface reutilizáveis |
| `client/src/index.css` | Tokens visuais e estilos globais |
| `content-sources.md` | Fontes oficiais e critérios usados no conteúdo |
| `ideas.md` | Decisões da identidade visual |

## Conteúdo e fontes

O conteúdo de Gherkin segue a referência e a página de idiomas do Cucumber. O conteúdo de Cypress utiliza as páginas oficiais de instalação, organização, comandos e integração contínua. Os links aparecem também dentro da plataforma para permitir a leitura do material original.

As principais referências são:

- [Gherkin Reference](https://cucumber.io/docs/gherkin/reference/)
- [Gherkin Languages](https://cucumber.io/docs/gherkin/languages/)
- [Cypress Installation](https://docs.cypress.io/app/get-started/install-cypress)
- [Writing and Organizing Tests](https://docs.cypress.io/app/core-concepts/writing-and-organizing-tests)
- [Cypress Introduction](https://docs.cypress.io/app/core-concepts/introduction-to-cypress)
- [cy.get()](https://docs.cypress.io/api/commands/get)
- [cy.should()](https://docs.cypress.io/api/commands/should)
- [cy.fixture()](https://docs.cypress.io/api/commands/fixture)
- [cy.intercept()](https://docs.cypress.io/api/commands/intercept)
- [Cypress with GitHub Actions](https://docs.cypress.io/app/continuous-integration/github-actions)
- [GitHub Actions schedule](https://docs.github.com/actions/using-workflows/events-that-trigger-workflows#schedule)

## Limites atuais

Esta versão não executa testes Cypress reais dentro da plataforma. Ela ensina a preparação e a escrita, oferece exemplos e apresenta uma simulação para ajudar a interpretar resultados. A execução real acontece no projeto da pessoa, no terminal ou em um serviço de integração contínua configurado por ela.

O texto da história da P.O. é usado como contexto de escrita. A plataforma não interpreta o significado do texto nem inventa cenários. A correção dos exercícios utiliza apenas respostas esperadas e critérios definidos no conteúdo.
