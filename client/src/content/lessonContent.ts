/**
 * Conteúdo didático em português do Brasil.
 * Cada lição deve explicar o conceito antes do comando, mostrar um exemplo mínimo,
 * propor uma prática verificável e apontar a documentação oficial correspondente.
 */
export type LessonContent = {
  title: string;
  objective: string;
  explanation: string;
  vocabulary: string;
  example: string;
  exampleLabel: string;
  practice: string;
  source: string;
  sourceLabel: string;
};

export const lessonContent: Record<string, LessonContent> = {
  "fundamentos-0": {
    title: "O que é Gherkin e o que é uma especificação executável",
    objective: "Entender a finalidade do Gherkin antes de escrever palavras-chave.",
    explanation: "Gherkin é uma linguagem estruturada para descrever o comportamento esperado de um sistema em uma forma que pessoas e ferramentas de teste conseguem ler. Uma especificação organiza uma funcionalidade em exemplos concretos. Ela não é o teste automatizado por si só: descreve o comportamento que poderá ser ligado a uma implementação.",
    vocabulary: "Gherkin: linguagem de especificação. Feature ou Funcionalidade: comportamento maior que será descrito. Cenário: exemplo concreto desse comportamento.",
    example: "# language: pt\n\nFuncionalidade: Busca de produtos\n  Cenário: Encontrar um produto existente\n    Dado que estou na página de busca\n    Quando procuro por \"caderno\"\n    Então vejo o produto \"Caderno\"",
    exampleLabel: "arquivo / busca.feature",
    practice: "Leia o exemplo e identifique qual linha nomeia a funcionalidade e quais linhas descrevem um exemplo executável.",
    source: "https://cucumber.io/docs/gherkin/reference/",
    sourceLabel: "Referência oficial do Gherkin",
  },
  "fundamentos-1": {
    title: "Funcionalidade, descrição, Cenário e Exemplo",
    objective: "Montar a hierarquia básica de um arquivo .feature.",
    explanation: "Um arquivo de feature normalmente começa com uma Funcionalidade, seguida por uma descrição opcional. Depois vêm um ou mais Cenários, também chamados de Examples na documentação. Cada cenário deve exemplificar um comportamento observável, e não apenas repetir detalhes de implementação.",
    vocabulary: "Descrição: texto livre que explica o contexto. Cenário: conjunto de passos de um exemplo. Passo: linha iniciada por uma palavra-chave de comportamento.",
    example: "Funcionalidade: Login\n  Permite que uma pessoa acesse sua conta\n\n  Cenário: Login com credenciais válidas\n    Dado que existe uma conta ativa\n    Quando informo usuário e senha válidos\n    Então acesso a área inicial",
    exampleLabel: "arquivo / login.feature",
    practice: "Escreva uma Funcionalidade com um Cenário e três passos que descrevam uma ação real do sistema.",
    source: "https://cucumber.io/docs/gherkin/reference/",
    sourceLabel: "Feature, Scenario e Steps",
  },
  "fundamentos-2": {
    title: "Dado, Quando, Então, E e Mas",
    objective: "Escolher a palavra-chave de cada parte do comportamento.",
    explanation: "Dado descreve o estado inicial ou contexto conhecido. Quando descreve a ação ou evento. Então descreve o resultado esperado. E e Mas continuam o tipo do passo anterior e ajudam a evitar repetição. Essas palavras explicam o comportamento; não devem ser usadas para narrar detalhes internos que a pessoa usuária não observa.",
    vocabulary: "Contexto: estado necessário antes da ação. Ação: evento que provoca mudança. Resultado: comportamento que pode ser verificado.",
    example: "Dado que tenho um produto no carrinho\n  E estou na página de revisão\nQuando removo o produto\nEntão o carrinho fica vazio\n  Mas o histórico do pedido permanece disponível",
    exampleLabel: "passos / leitura do comportamento",
    practice: "Classifique cada frase como contexto, ação ou resultado antes de transformá-la em Dado, Quando ou Então.",
    source: "https://cucumber.io/docs/gherkin/reference/",
    sourceLabel: "Given, When, Then",
  },
  "estrutura-0": {
    title: "Regra e agrupamento de exemplos",
    objective: "Relacionar cenários a uma regra de negócio específica.",
    explanation: "Regra, chamada Rule na sintaxe inglesa, representa uma regra de negócio que a Funcionalidade precisa cumprir. Ela agrupa cenários que ilustram essa mesma regra. Use uma Regra quando o agrupamento acrescentar entendimento; não a use como uma divisão arbitrária de telas ou arquivos.",
    vocabulary: "Regra de negócio: condição que o produto precisa respeitar. Agrupamento: reunião de cenários com a mesma intenção.",
    example: "Funcionalidade: Desconto\n\n  Regra: Desconto para compras acima do limite\n    Cenário: Aplicar desconto elegível\n      Dado que o carrinho supera R$ 100\n      Quando avanço para o resumo\n      Então vejo o desconto aplicado",
    exampleLabel: "arquivo / desconto.feature",
    practice: "Crie uma Regra e dois Cenários que comprovem comportamentos diferentes da mesma regra.",
    source: "https://cucumber.io/docs/gherkin/reference/",
    sourceLabel: "Rule",
  },
  "estrutura-1": {
    title: "Contexto e preparação compartilhada",
    objective: "Usar Contexto para evitar repetição sem esconder a intenção do cenário.",
    explanation: "Contexto, chamado Background na sintaxe inglesa, contém passos executados antes de cada cenário do bloco em que aparece. Ele deve representar um contexto curto e relevante para todos os cenários. Se o texto ficar extenso ou difícil de lembrar, considere tornar a preparação parte explícita de cada cenário.",
    vocabulary: "Contexto: preparação comum. Cenário: exemplo que recebe essa preparação. Legibilidade: facilidade de entender o exemplo sem voltar muitas linhas.",
    example: "Funcionalidade: Área administrativa\n\n  Contexto:\n    Dado que estou autenticado como administrador\n\n  Cenário: Listar usuários\n    Quando abro a lista de usuários\n    Então vejo os usuários cadastrados",
    exampleLabel: "arquivo / administracao.feature",
    practice: "Identifique quais passos são realmente comuns a todos os cenários antes de movê-los para Contexto.",
    source: "https://cucumber.io/docs/gherkin/reference/",
    sourceLabel: "Background",
  },
  "estrutura-2": {
    title: "Descrições, comentários, dois-pontos e indentação",
    objective: "Escrever um arquivo legível e reconhecido pelo parser do Gherkin.",
    explanation: "A descrição ajuda pessoas a entenderem a intenção. Comentários começam com # quando você precisa registrar uma observação que não é um passo. Os elementos primários usam dois-pontos, como Funcionalidade: e Cenário:. A indentação ajuda a leitura, mas a estrutura depende principalmente das palavras-chave e da ordem permitida.",
    vocabulary: "Parser: componente que lê a sintaxe. Comentário: anotação ignorada pela execução. Elemento primário: item estrutural como Funcionalidade ou Cenário.",
    example: "# language: pt\n# Este cenário cobre o caminho principal\nFuncionalidade: Cadastro\n  Cenário: Criar uma conta\n    Dado que estou no formulário de cadastro\n    Quando preencho os dados obrigatórios\n    Então a conta é criada",
    exampleLabel: "arquivo / cadastro.feature",
    practice: "Encontre no exemplo o comentário, o elemento primário e os dois-pontos que delimitam seus títulos.",
    source: "https://cucumber.io/docs/gherkin/reference/",
    sourceLabel: "Reference e comentários",
  },
  "dados-0": {
    title: "Esquema do Cenário e Exemplos",
    objective: "Executar a mesma estrutura com diferentes dados declarados.",
    explanation: "Esquema do Cenário, chamado Scenario Outline em inglês, permite escrever uma estrutura uma vez e substituir parâmetros pelos valores de cada linha da tabela Exemplos. Os parâmetros ficam entre < e >. Cada linha de Exemplos representa uma execução do cenário.",
    vocabulary: "Parâmetro: marcador que recebe um valor. Exemplos: tabela de valores. Esquema: cenário reutilizável com dados variáveis.",
    example: "Esquema do Cenário: Validar mensagem de login\n  Quando informo <usuário> e <senha>\n  Então vejo <mensagem>\n\n  Exemplos:\n    | usuário | senha | mensagem |\n    | ana     | 123   | Acesso permitido |\n    | ana     |       | Senha obrigatória |",
    exampleLabel: "tabela / dados de entrada",
    practice: "Adicione uma linha de Exemplos que represente mais uma combinação válida ou inválida.",
    source: "https://cucumber.io/docs/gherkin/reference/",
    sourceLabel: "Scenario Outline e Examples",
  },
  "dados-1": {
    title: "Tabelas de Dados e Doc Strings",
    objective: "Passar conjuntos de dados e textos longos para um passo.",
    explanation: "Uma Tabela de Dados usa barras verticais para organizar vários valores relacionados ao passo. Uma Doc String usa três aspas duplas para transportar um bloco de texto. São formas de dados do passo, diferentes de parâmetros de Exemplos, que variam o cenário inteiro.",
    vocabulary: "Tabela de Dados: valores tabulares de um passo. Doc String: texto multilinha associado a um passo. Cabeçalho: primeira linha que nomeia colunas.",
    example: "Dado que cadastro os seguintes produtos:\n  | nome      | quantidade |\n  | Caderno   | 2          |\n  | Caneta    | 1          |\n\nQuando envio a descrição:\n  \"\"\"\n  Pedido para presente\n  \"\"\"",
    exampleLabel: "passo / dados estruturados",
    practice: "Escolha entre Tabela de Dados e Doc String para representar uma lista de produtos e uma mensagem longa.",
    source: "https://cucumber.io/docs/gherkin/reference/",
    sourceLabel: "Data Tables e Doc Strings",
  },
  "dados-2": {
    title: "Tags, cenários independentes e critérios observáveis",
    objective: "Organizar e selecionar exemplos sem criar dependência entre cenários.",
    explanation: "Tags começam com @ e podem ser colocadas antes de uma Funcionalidade, Regra ou Cenário para agrupamento e seleção. Cada cenário deve poder ser entendido e executado de forma independente. Um bom critério descreve algo observável no comportamento, não uma classe, endpoint ou seletor específico.",
    vocabulary: "Tag: marcador iniciado por @. Independência: um cenário não depende do estado deixado por outro. Critério observável: resultado que pode ser conferido.",
    example: "@regressao @checkout\nFuncionalidade: Finalização de compra\n\n  @pagamento-aprovado\n  Cenário: Finalizar com cartão válido\n    Dado que tenho itens no carrinho\n    Quando informo um cartão válido\n    Então vejo a confirmação do pedido",
    exampleLabel: "arquivo / tags de seleção",
    practice: "Escolha tags que expressem finalidade ou regra, evitando tags que descrevam apenas detalhes de implementação.",
    source: "https://cucumber.io/docs/gherkin/reference/",
    sourceLabel: "Tags e exemplos",
  },
  "terminal-0": {
    title: "Terminal, pastas, caminhos e comandos",
    objective: "Navegar até um projeto e executar um comando com segurança.",
    explanation: "O terminal é um programa que recebe comandos de texto. Um caminho aponta para uma pasta ou arquivo. Para praticar, primeiro descubra onde está, liste o conteúdo e entre na pasta do projeto. Execute um comando por vez e leia a saída antes de continuar.",
    vocabulary: "Terminal: interface de comandos. Diretório: outra forma de chamar uma pasta. Caminho: endereço de uma pasta ou arquivo. Saída: resposta exibida pelo comando.",
    example: "pwd\nls\ncd meu-projeto\nls",
    exampleLabel: "terminal / navegação inicial",
    practice: "Abra o terminal, identifique a pasta atual com pwd e entre na pasta do projeto usando cd.",
    source: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
    sourceLabel: "Introdução oficial ao Node.js",
  },
  "terminal-1": {
    title: "Node.js, gerenciadores e versões",
    objective: "Diferenciar Node.js de npm, pnpm e yarn.",
    explanation: "Node.js executa JavaScript fora do navegador. npm acompanha a instalação do Node.js e administra pacotes. pnpm e yarn também são gerenciadores de pacotes. Eles instalam dependências e executam scripts, mas cada projeto deve declarar qual gerenciador e qual versão espera usar.",
    vocabulary: "Node.js: ambiente de execução. Pacote: código distribuído para reutilização. Gerenciador: ferramenta que instala pacotes e executa scripts.",
    example: "node --version\nnpm --version\npnpm --version\nyarn --version",
    exampleLabel: "terminal / conferir ferramentas",
    practice: "Execute os comandos de versão e compare a mensagem exibida com as versões esperadas pelo projeto.",
    source: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
    sourceLabel: "Node.js: introdução",
  },
  "terminal-2": {
    title: "package.json, scripts e instalação de dependências",
    objective: "Instalar o projeto e executar um script declarado no package.json.",
    explanation: "O package.json descreve um projeto JavaScript, incluindo scripts e dependências. npm install instala as dependências declaradas. npm run nome-do-script executa o script correspondente. Com pnpm ou yarn, a forma do comando muda, mas o objetivo é o mesmo: usar o script definido no projeto.",
    vocabulary: "Dependência: pacote necessário para o projeto. Script: atalho nomeado no package.json. node_modules: pasta local onde dependências instaladas ficam disponíveis.",
    example: "{\n  \"scripts\": {\n    \"test\": \"cypress run\"\n  }\n}\n\nnpm install\nnpm run test",
    exampleLabel: "package.json + terminal",
    practice: "Abra um package.json, encontre o nome de um script e execute-o com o gerenciador escolhido pelo projeto.",
    source: "https://docs.npmjs.com/cli/v11/using-npm/scripts",
    sourceLabel: "Scripts oficiais do npm",
  },
  "cypress-0": {
    title: "Pré-requisitos, instalação, abertura e primeiro teste",
    objective: "Criar um projeto Cypress E2E e localizar a primeira spec.",
    explanation: "Comece com Node.js instalado. Na pasta do projeto, instale o Cypress como dependência de desenvolvimento e abra o aplicativo. No Launchpad, escolha o tipo de teste E2E, confirme a configuração e crie uma spec vazia. A spec é o arquivo em que os testes ficam escritos.",
    vocabulary: "E2E: teste de ponta a ponta. Spec: arquivo de especificação do teste. Launchpad: tela inicial de configuração do Cypress.",
    example: "npm install cypress --save-dev\nnpx cypress open\n\n// cypress/e2e/primeiro-teste.cy.js\ndescribe('Primeiro teste', () => {\n  it('visita a aplicação', () => {\n    cy.visit('/')\n  })\n})",
    exampleLabel: "terminal + cypress/e2e/primeiro-teste.cy.js",
    practice: "Instale o Cypress, abra o Launchpad, escolha E2E e crie uma spec com a extensão .cy.js.",
    source: "https://docs.cypress.io/app/get-started/install-cypress",
    sourceLabel: "Instalação oficial do Cypress",
  },
  "cypress-1": {
    title: "Seletores, comandos, ações e asserções",
    objective: "Transformar um comportamento Gherkin em uma cadeia legível de comandos Cypress.",
    explanation: "Uma conversão prática costuma seguir preparação, ação e verificação. cy.visit() abre uma página; cy.get() consulta por seletor; cy.contains() consulta texto; click() e type() interagem; should() cria uma asserção. Prefira seletores dedicados como data-cy quando a aplicação oferece esse contrato, evitando acoplar o teste a classes de estilo.",
    vocabulary: "Seletor: expressão que localiza elemento. Comando: operação Cypress encadeável. Asserção: verificação do estado esperado.",
    example: "describe('Carrinho', () => {\n  it('adiciona um produto', () => {\n    cy.visit('/produtos')\n    cy.get('[data-cy=adicionar-produto]').click()\n    cy.get('[data-cy=carrinho]').should('be.visible')\n  })\n})",
    exampleLabel: "cypress/e2e/carrinho.cy.js",
    practice: "Converta Dado, Quando e Então em cy.visit(), uma ação e uma asserção observável.",
    source: "https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test",
    sourceLabel: "Seu primeiro teste E2E",
  },
  "cypress-2": {
    title: "Fixtures, interceptação, organização e regressão",
    objective: "Separar dados, controlar respostas e escolher o que executar novamente.",
    explanation: "Fixtures guardam dados estáticos em cypress/fixtures. cy.fixture() carrega esse conteúdo. cy.intercept() observa ou controla requisições e pode receber um alias para ser aguardado com cy.wait(). Organize specs por comportamento e mantenha cenários independentes. Uma suíte de regressão é uma seleção repetível de cenários importantes para verificar mudanças.",
    vocabulary: "Fixture: arquivo de dados de teste. Interceptação: observação ou controle de uma requisição. Regressão: repetição de testes para verificar se mudanças quebraram comportamentos existentes.",
    example: "cy.fixture('produto.json').then((produto) => {\n  cy.intercept('GET', '/api/produtos', { body: [produto] }).as('produtos')\n})\ncy.visit('/produtos')\ncy.wait('@produtos').its('response.statusCode').should('eq', 200)",
    exampleLabel: "cypress/e2e/produtos.cy.js",
    practice: "Escolha um dado estático, coloque-o em fixtures e associe uma interceptação à requisição que o usa.",
    source: "https://docs.cypress.io/api/commands/intercept",
    sourceLabel: "Interceptação oficial do Cypress",
  },
};

export function getLessonContent(moduleId: string, index: number) {
  return lessonContent[`${moduleId}-${index}`];
}
