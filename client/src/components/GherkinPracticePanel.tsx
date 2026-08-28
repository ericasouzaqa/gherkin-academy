/**
 * Direção visual: Laboratório Neon Editorial.
 * Papel: oferecer prática independente, objetiva e determinística de Gherkin.
 * Toda resposta é comparada localmente com critérios explícitos e fontes oficiais.
 */
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, CheckCircle2, ExternalLink, RotateCcw, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

type Result = "correct" | "incorrect" | null;

type ChoiceExercise = {
  id: "sequence" | "rule" | "outline";
  number: string;
  title: string;
  prompt: string;
  options: { id: string; label: string; text: string }[];
  answer: string;
  rationale: string;
  source: string;
};

const choiceExercises: ChoiceExercise[] = [
  {
    id: "sequence",
    number: "01",
    title: "Contexto, ação e resultado",
    prompt: "Qual ordem representa melhor um comportamento em Gherkin?",
    options: [
      { id: "a", label: "A", text: "Então, Quando, Dado" },
      { id: "b", label: "B", text: "Dado, Quando, Então" },
      { id: "c", label: "C", text: "Quando, Então, Dado" },
      { id: "d", label: "D", text: "Dado, Então, Quando" },
    ],
    answer: "b",
    rationale: "Dado estabelece o contexto, Quando descreve a ação e Então declara o resultado observável.",
    source: "https://cucumber.io/docs/gherkin/reference/",
  },
  {
    id: "rule",
    number: "02",
    title: "Agrupando exemplos",
    prompt: "Qual palavra-chave agrupa exemplos que ilustram a mesma regra de negócio?",
    options: [
      { id: "a", label: "A", text: "Background / Contexto" },
      { id: "b", label: "B", text: "Rule / Regra" },
      { id: "c", label: "C", text: "Examples / Exemplos" },
      { id: "d", label: "D", text: "Scenario / Cenário" },
    ],
    answer: "b",
    rationale: "Rule, chamada Regra em português, fornece informação adicional sobre a funcionalidade e agrupa exemplos relacionados a uma regra de negócio.",
    source: "https://cucumber.io/docs/gherkin/reference/",
  },
  {
    id: "outline",
    number: "03",
    title: "Repetindo com dados",
    prompt: "Qual combinação permite executar a mesma estrutura com diferentes valores?",
    options: [
      { id: "a", label: "A", text: "Scenario Outline / Esquema do Cenário com Examples / Exemplos" },
      { id: "b", label: "B", text: "Background / Contexto com tags" },
      { id: "c", label: "C", text: "Rule / Regra com comentários" },
      { id: "d", label: "D", text: "Feature / Funcionalidade com Doc String" },
    ],
    answer: "a",
    rationale: "Scenario Outline usa parâmetros entre sinais de menor e maior e uma seção Examples para gerar execuções com diferentes valores.",
    source: "https://cucumber.io/docs/gherkin/reference/",
  },
];

function dailyOrder<T extends { id: string }>(items: T[]) {
  const day = Math.floor(Date.now() / 86_400_000);
  return [...items].sort((left, right) => {
    const score = (id: string) => {
      let hash = day;
      for (const character of id) hash = (hash * 31 + character.charCodeAt(0)) | 0;
      return hash;
    };
    return score(left.id) - score(right.id);
  });
}

function normalize(value: string) {
  return value.trim().replace(/\r/g, "").replace(/[ \t]+/g, " ");
}

function validateScenario(value: string) {
  const checks = [
    { label: "Funcionalidade:", test: /(?:^|\n)\s*(?:Funcionalidade|Feature):/i },
    { label: "Cenário:", test: /(?:^|\n)\s*(?:Cenário|Scenario):/i },
    { label: "Dado", test: /(?:^|\n)\s*(?:Dado|Given)\b/i },
    { label: "Quando", test: /(?:^|\n)\s*(?:Quando|When)\b/i },
    { label: "Então", test: /(?:^|\n)\s*(?:Então|Then)\b/i },
  ];
  const missing = checks.filter((item) => !item.test.test(value)).map((item) => item.label);
  return missing.length === 0
    ? { result: "correct" as const, message: "Estrutura mínima reconhecida. O bloco contém uma funcionalidade, um cenário e o fluxo Dado, Quando, Então." }
    : { result: "incorrect" as const, message: `Ainda falta incluir: ${missing.join(", ")}. Use uma palavra-chave por etapa e revise a indentação.` };
}

function Feedback({ result, children }: { result: Result; children: React.ReactNode }) {
  if (!result) return null;
  const positive = result === "correct";
  return (
    <div className={`mt-4 flex items-start gap-2 rounded-lg border p-3 text-sm leading-6 ${positive ? "border-[#18d8e8]/30 bg-[#18d8e8]/10 text-[var(--app-success-text)]" : "border-[#ff9a72]/30 bg-[#ff9a72]/10 text-[var(--app-error-light)]"}`} role="status">
      {positive ? <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" /> : <TriangleAlert className="mt-1 h-4 w-4 shrink-0" />}
      <span>{children}</span>
    </div>
  );
}

export default function GherkinPracticePanel({ onBack }: { onBack: () => void }) {
  const [choices, setChoices] = useState<Record<string, string>>({});
  const [choiceResults, setChoiceResults] = useState<Record<string, Result>>({});
  const [scenario, setScenario] = useState("");
  const [scenarioResult, setScenarioResult] = useState<Result>(null);
  const [scenarioMessage, setScenarioMessage] = useState("");
  const orderedExercises = useMemo(() => dailyOrder(choiceExercises), []);


  useEffect(() => {
    const saved = localStorage.getItem("gherkin-practice-state");
    if (!saved) return;
    try {
      const state = JSON.parse(saved) as { choices?: Record<string, string>; choiceResults?: Record<string, Result>; scenario?: string; scenarioResult?: Result; scenarioMessage?: string };
      setChoices(state.choices ?? {});
      setChoiceResults(state.choiceResults ?? {});
      setScenario(state.scenario ?? "");
      setScenarioResult(state.scenarioResult ?? null);
      setScenarioMessage(state.scenarioMessage ?? "");
    } catch {
      localStorage.removeItem("gherkin-practice-state");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gherkin-practice-state", JSON.stringify({ choices, choiceResults, scenario, scenarioResult, scenarioMessage }));
  }, [choices, choiceResults, scenario, scenarioResult, scenarioMessage]);

  const completedCount = useMemo(() => Object.values(choiceResults).filter((value) => value === "correct").length + (scenarioResult === "correct" ? 1 : 0), [choiceResults, scenarioResult]);

  const checkChoice = (exercise: ChoiceExercise) => {
    setChoiceResults((items) => ({ ...items, [exercise.id]: choices[exercise.id] === exercise.answer ? "correct" : "incorrect" }));
  };

  const checkScenario = () => {
    const validation = validateScenario(scenario);
    setScenarioResult(validation.result);
    setScenarioMessage(validation.message);
  };

  const reset = () => {
    setChoices({});
    setChoiceResults({});
    setScenario("");
    setScenarioResult(null);
    setScenarioMessage("");
  };

  return (
    <section className="mx-auto max-w-[1180px] px-5 py-10 lg:px-10" aria-labelledby="practice-heading">
      <button type="button" onClick={onBack} className="mb-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-[var(--app-dim)] hover:text-[var(--app-text)]">
        <ArrowLeft className="h-3 w-3" /> Início
      </button>
      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          <div className="eyebrow">PRÁTICA / GHERKIN</div>
          <h1 id="practice-heading" className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl">Escreva, escolha, <span className="text-[#f34ba8]">verifique.</span></h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--app-body-muted)]">Uma seção de treino rápido para revisar a estrutura oficial do Gherkin. A correção acontece no navegador, com critérios objetivos e sem interpretação automática.</p>
        </div>
        <aside className="rounded-2xl border border-[#18d8e8]/25 bg-[var(--app-cyan-panel)] p-5" aria-label="Resumo da prática">
          <div className="font-mono text-[10px] uppercase tracking-[.15em] text-[#18d8e8]">SEU RESUMO</div>
          <div className="mt-4 flex items-end gap-2"><strong className="font-display text-4xl">{completedCount}</strong><span className="pb-1 font-mono text-xs text-[var(--app-muted)]">/ 04 corretos</span></div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--app-soft)]"><div className="h-full rounded-full bg-[#18d8e8] transition-all duration-300" style={{ width: `${completedCount * 25}%` }} /></div>
          <p className="mt-4 text-xs leading-5 text-[var(--app-cyan-soft)]">Você pode tentar novamente quantas vezes quiser. O resultado serve para orientar seu estudo.</p>
          <Button type="button" variant="outline" onClick={reset} className="mt-5 gap-2 border-[#18d8e8]/30 bg-transparent text-[#18d8e8] hover:bg-[#18d8e8]/10 hover:text-[#18d8e8]"><RotateCcw className="h-3.5 w-3.5" /> Reiniciar prática</Button>
        </aside>
      </div>

      <div className="mt-10 space-y-5">
        {orderedExercises.map((exercise) => {
          const result = choiceResults[exercise.id] ?? null;
          return (
            <article key={exercise.id} className="rounded-2xl border border-[var(--app-border)] bg-[var(--app-panel)] p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3"><div><div className="font-mono text-[10px] uppercase tracking-[.14em] text-[#18d8e8]">EXERCÍCIO {exercise.number}</div><h2 className="mt-2 font-display text-xl font-semibold">{exercise.title}</h2></div><span className="font-mono text-[10px] text-[var(--app-dim)]">escolha uma resposta</span></div>
              <p className="mt-4 text-sm leading-6 text-[var(--app-body)]">{exercise.prompt}</p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {exercise.options.map((option) => <label key={option.id} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${choices[exercise.id] === option.id ? "border-[#f34ba8]/60 bg-[var(--app-pink-panel)]" : "border-[var(--app-border)] bg-[var(--app-panel-deep)] hover:border-[var(--app-border-strong)]"}`}><input type="radio" name={exercise.id} value={option.id} checked={choices[exercise.id] === option.id} onChange={(event) => setChoices((items) => ({ ...items, [exercise.id]: event.target.value }))} className="mt-1 accent-[#f34ba8]" /><span><strong className="font-mono text-xs text-[#f34ba8]">{option.label}</strong><span className="ml-2 text-sm text-[var(--app-code-text)]">{option.text}</span></span></label>)}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4"><Button type="button" size="sm" onClick={() => checkChoice(exercise)} disabled={!choices[exercise.id]} className="bg-[#f34ba8] text-[var(--app-primary-foreground)] hover:bg-[#ff74bc]">Verificar resposta</Button><a href={exercise.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.1em] text-[#18d8e8] hover:underline">Consultar referência <ExternalLink className="h-3 w-3" /></a></div>
              <Feedback result={result}>{result === "correct" ? `Correto. ${exercise.rationale}` : `Ainda não. ${exercise.rationale}`}</Feedback>
            </article>
          );
        })}

        <article className="rounded-2xl border border-[#f34ba8]/30 bg-[var(--app-pink-panel)] p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3"><div><div className="font-mono text-[10px] uppercase tracking-[.14em] text-[#ff82c0]">EXERCÍCIO 04 / ESCRITA LIVRE</div><h2 className="mt-2 font-display text-xl font-semibold">Monte um cenário mínimo</h2></div><span className="font-mono text-[10px] text-[var(--app-pink-light)]">validação estrutural</span></div>
          <p className="mt-4 text-sm leading-6 text-[var(--app-pink-text)]">Escreva uma tentativa em português contendo <strong className="text-[var(--app-heading-soft)]">Funcionalidade</strong>, <strong className="text-[var(--app-heading-soft)]">Cenário</strong>, <strong className="text-[var(--app-heading-soft)]">Dado</strong>, <strong className="text-[var(--app-heading-soft)]">Quando</strong> e <strong className="text-[var(--app-heading-soft)]">Então</strong>. O sistema verifica somente a presença dessas estruturas.</p>
          <textarea value={scenario} onChange={(event) => { setScenario(event.target.value); setScenarioResult(null); setScenarioMessage(""); }} className="mt-5 min-h-[220px] w-full resize-y rounded-xl border border-[var(--app-border)] bg-[var(--app-code)] p-4 font-mono text-xs leading-6 text-[var(--app-code-strong)] outline-none placeholder:text-[var(--app-placeholder)] focus:border-[#18d8e8]" placeholder={'Funcionalidade: Carrinho\n\n  Cenário: Adicionar produto\n    Dado que estou na página de produtos\n    Quando adiciono um produto\n    Então vejo o produto no carrinho'} spellCheck={false} aria-label="Escrita livre de um cenário Gherkin" />
          <div className="mt-5 flex flex-wrap items-center gap-4"><Button type="button" size="sm" onClick={checkScenario} className="bg-[#f34ba8] text-[var(--app-primary-foreground)] hover:bg-[#ff74bc]">Verificar estrutura</Button><a href="https://cucumber.io/docs/gherkin/reference/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.1em] text-[#18d8e8] hover:underline">Ver regras do Gherkin <ExternalLink className="h-3 w-3" /></a></div>
          <Feedback result={scenarioResult}>{scenarioMessage}</Feedback>
        </article>
      </div>
    </section>
  );
}
