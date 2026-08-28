# Gherkin Academy

Plataforma offline para aprender Gherkin, praticar a escrita de cenários e estudar o caminho introdutório até testes E2E com Cypress.

## Objetivo

A Gherkin Academy ajuda pessoas iniciantes a entender a sintaxe do Gherkin, transformar histórias de usuário em especificações `.feature` e reconhecer como um cenário pode ser conectado a um teste Cypress.

A aplicação é **estática, local e independente**. Ela não usa inteligência artificial, não chama APIs do Manus, não exige autenticação, não envia o progresso para um servidor e não executa testes Cypress reais dentro da plataforma. A validação dos exercícios é determinística e ocorre no navegador.

## O que está incluído

A plataforma contém uma trilha progressiva com cinco módulos, lições de Gherkin, perguntas de verificação, prática de escrita livre, bancada para história da pessoa responsável pelo produto, suporte às palavras-chave em português e inglês, importação de texto de PDF, exportação de `.feature`, glossário de Cypress, exemplos de CI e dois projetos Cypress para download.

O progresso, os rascunhos, a história, a especificação e o tema são armazenados apenas no `localStorage` do navegador. Se o armazenamento estiver corrompido, a aplicação descarta o valor inválido e utiliza o estado inicial.

## Funcionamento offline

Depois que a aplicação ou o executável é baixado, o fluxo principal funciona sem internet. O JavaScript, CSS, worker do PDF.js e os projetos Cypress são empacotados localmente. Os links para a documentação oficial, LinkedIn e YouTube são referências opcionais e naturalmente exigem conexão para abrir.

A aplicação não contém chamadas de rede no runtime principal. O PDF é processado localmente no navegador; PDFs escaneados, que não possuem camada de texto, não são submetidos a OCR.

## Executável para computador

A [Release mais recente](https://github.com/ericasouzaqa/gherkin-academy/releases/latest) disponibiliza o arquivo `gherkin-academy-linux-macos`. Ele requer Python 3 instalado no computador, abre um servidor HTTP local e não baixa dependências durante a execução.

No Linux ou macOS, baixe o arquivo, conceda permissão e execute:

```bash
chmod +x gherkin-academy-linux-macos
./gherkin-academy-linux-macos
```

A janela do terminal precisa permanecer aberta enquanto a plataforma estiver em uso. O endereço padrão é `http://127.0.0.1:4173/gherkin-academy/`. Para usar outra porta, defina `GHERKIN_PORT` antes de executar.

O executável é um launcher portátil para Linux e macOS, não um binário nativo. Windows não faz parte do artefato atual.

## GitHub Pages

O workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) gera o site com a base `/gherkin-academy/` e publica o conteúdo de `dist/public`. No GitHub, a configuração de Pages deve estar em **Settings → Pages → Build and deployment → Source: GitHub Actions**. A URL esperada é:

<https://ericasouzaqa.github.io/gherkin-academy/>

A publicação só deve ser anunciada depois de abrir essa URL e confirmar que ela mostra a interface da aplicação, e não o README do repositório. O workflow verde, sozinho, não é evidência suficiente.

## Desenvolvimento local

Requer Node.js 22 ou compatível e pnpm. Na raiz do projeto:

```bash
pnpm install
pnpm dev
```

Para validar tipagem e builds:

```bash
pnpm check
pnpm build
pnpm build:pages
```

Para gerar o launcher portátil após o build:

```bash
python3 scripts/make_portable_launcher.py
```

O arquivo é criado em `dist/gherkin-academy-linux-macos`.

## Downloads de prática

Os dois projetos Cypress são arquivos versionados em `client/public/downloads/` e entram no build sem depender de armazenamento externo. Eles contêm README, `package.json`, specs e, no projeto de regressão, uma fixture local.

A plataforma ensina instalação e execução do Cypress, mas os projetos baixados dependem da instalação do Cypress no computador da pessoa. A aplicação de aprendizagem em si continua funcionando offline sem instalar Cypress.

## Fontes educacionais

O conteúdo foi conferido contra a [referência oficial do Gherkin](https://cucumber.io/docs/gherkin/reference/), a [localização de palavras-chave do Gherkin](https://cucumber.io/docs/gherkin/languages/) e a [documentação oficial do Cypress](https://docs.cypress.io/).

## Licença

Este projeto é distribuído sob a licença MIT.
