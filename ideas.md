# Direção visual — Gherkin Academy

## Abordagens consideradas

### Abordagem 1 — Laboratório Neon Editorial
Uma interface de laboratório digital com fundo escuro, acentos magenta e ciano, e linguagem visual inspirada em terminais, sintaxe e anotações de QA. A intenção é transmitir energia, domínio técnico e descoberta sem cair em uma estética gamer genérica.

**Probabilidade:** 0,08

### Abordagem 2 — Caderno de Especificações
Uma experiência clara, editorial e documental, com papel texturizado, tipografia serifada para conceitos e blocos monoespaçados para Gherkin. A intenção é aproximar o aprendizado de uma documentação profissional anotada.

**Probabilidade:** 0,04

### Abordagem 3 — Oficina Coral de Qualidade
Uma interface luminosa e calorosa, com coral, creme e grafite, organizada como uma oficina prática com cartões, checklists e pequenos desafios. A intenção é tornar o estudo acessível e menos intimidante para iniciantes.

**Probabilidade:** 0,06

## Abordagem escolhida — Laboratório Neon Editorial

### Design Movement
Neo-editorial técnico: uma combinação de estética de laboratório de software, interfaces de ferramentas de desenvolvimento e composição editorial assimétrica. O visual deve equilibrar precisão de engenharia com incentivo humano ao aprendizado.

### Core Principles
1. **Aprender fazendo:** o exercício e o resultado ocupam o centro da experiência, não longas páginas de teoria.
2. **Precisão visível:** estados de acerto, erro, tentativa e progresso devem ser claros e semanticamente distinguíveis.
3. **Contraste com propósito:** o fundo escuro cria foco; magenta indica expressão/linguagem e ciano indica execução/validação.
4. **Complexidade progressiva:** a interface começa simples, mas revela camadas de detalhe conforme o nível aumenta.

### Color Philosophy
O grafite quase preto reduz ruído visual e remete a um ambiente de desenvolvimento. O magenta elétrico representa a autoria da especificação e a criatividade na escrita; o ciano representa a execução verificável; o coral é reservado a alertas, falhas e pontos de atenção. A cor própria da marca será **Rosa Syntax**, `#F34BA8`, usada com parcimônia em títulos, marcadores e ações primárias.

### Layout Paradigm
A plataforma usará uma moldura persistente com trilha lateral de níveis e um palco de conteúdo assimétrico. O conteúdo teórico ficará em uma coluna editorial estreita, enquanto o exercício ocupará um painel de trabalho maior, como um laboratório. Em telas menores, a trilha vira uma barra horizontal contextual.

### Signature Elements
1. **Linha de sintaxe:** uma linha fina ciano/magenta que conecta progresso, tópicos e estados de validação.
2. **Cartões de evidência:** painéis escuros com pequenos rótulos como `REGRA`, `EXEMPLO`, `RESULTADO` e `REFERÊNCIA OFICIAL`.
3. **Marca cucumber-chevron:** símbolo geométrico sem texto, combinando uma fatia de pepino, um chevron de terminal e um check.

### Interaction Philosophy
Cada ação deve responder como uma ferramenta de prova: selecionar, editar e enviar são ações explícitas; a correção aparece somente após a submissão; o feedback explica o critério oficial aplicado, sem IA ou avaliação probabilística. O usuário sempre poderá revisar a regra antes de tentar novamente.

### Animation
As transições devem ser curtas, precisas e funcionais. Entradas de painéis usam opacidade e deslocamento mínimo; o progresso percorre a linha de sintaxe em até 240 ms; acertos fazem um brilho ciano breve; erros usam um deslocamento horizontal discreto e coral, sem efeitos punitivos. Toda animação não essencial deve respeitar `prefers-reduced-motion`.

### Typography System
Headlines usam **Space Grotesk**, com pesos 600–700 e espaçamento levemente compacto. Texto de leitura usa **DM Sans**, em 400–500. Trechos de Gherkin, comandos e indicadores usam **JetBrains Mono**, em 400–600. A hierarquia separa claramente conceito, instrução, código e feedback.

### Brand Essence
**Posicionamento:** uma academia prática para quem quer transformar escrita de Gherkin em especificações testáveis e automação de regressão com Cypress, sem atalhos de IA e com critério oficial.

**Personalidade:** rigorosa, encorajadora, exploratória.

### Brand Voice
As manchetes são diretas e orientadas a ação. CTAs usam verbos concretos e microcopy explica o porquê de cada regra. Evitar promessas genéricas e linguagem de marketing vazio.

Exemplo de headline: **Escreva a intenção. Prove o comportamento.**

Exemplo de CTA: **Submeter resposta e verificar critério**.

### Wordmark & Logo
O wordmark será tipográfico, com “Gherkin” em Space Grotesk semibold e “Academy” em JetBrains Mono com tracking amplo. O símbolo independente será uma forma de pepino geométrico aberta por um chevron de terminal, fechada por um check mínimo; ele aparecerá no cabeçalho e no favicon, sem escrever o nome dentro do ícone.

### Signature Brand Color
**Rosa Syntax — `#F34BA8`**. É o acento proprietário da plataforma, usado para destacar escrita, autoria e avanço de nível, sempre apoiado por grafite, ciano e branco para preservar legibilidade.

## Style Decisions

- A linha de sintaxe será tratada como sistema estrutural: ela conectará hero, níveis, prova, critério oficial e próximos passos.
- O protagonismo visual permanecerá nos artefatos de especificação, nos painéis de validação e no símbolo cucumber-chevron; a imagem humana será apenas atmosfera secundária.
- O símbolo cucumber-chevron terá presença recorrente e discreta, sempre com forma legível antes de efeitos luminosos.
- As seções inferiores usarão rótulos de evidência, estados técnicos e divisórias de sintaxe para evitar a aparência de cards SaaS genéricos.
- A voz reforçará critérios, submissão, evidência, regra oficial e regressão verificável.
