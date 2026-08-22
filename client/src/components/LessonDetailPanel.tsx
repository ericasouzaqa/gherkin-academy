/**
 * Direção visual: Laboratório Neon Editorial.
 * Papel: ensinar, permitir experimentar e devolver uma orientação estrutural imediata.
 */
import { CheckCircle2, ExternalLink, Lightbulb, TriangleAlert } from "lucide-react";
import { LessonContent } from "@/content/lessonContent";

type Props = {
  lesson: LessonContent;
  completed: boolean;
  draft: string;
  onDraftChange: (value: string) => void;
  onToggleCompleted: () => void;
};

function validateDraft(lesson: LessonContent, draft: string) {
  const value = draft.trim();
  if (!value) return "Comece digitando uma tentativa. Use o exemplo ao lado como ponto de partida.";
  if (lesson.title.includes("Cypress")) {
    const missing = ["cy."].filter((token) => !value.includes(token));
    return missing.length ? "Ainda não encontrei um comando Cypress. Comece com cy.visit(), cy.get() ou cy.contains()." : "Estrutura reconhecida: há pelo menos um comando Cypress. Compare agora a ação e a asserção com o comportamento descrito.";
  }
  if (lesson.title.includes("Terminal") || lesson.title.includes("Node.js") || lesson.title.includes("package.json")) {
    return /node|npm|pnpm|yarn|cd |ls|pwd/.test(value) ? "Comando reconhecido. Execute-o no terminal e leia a saída antes de avançar." : "Não encontrei um comando de terminal ou Node.js. Tente node --version, npm install, cd ou ls.";
  }
  const hasFeature = /(?:Funcionalidade|Feature):/i.test(value);
  const hasScenario = /(?:Cenário|Scenario):/i.test(value);
  const hasStep = /(?:Dado|Given|Quando|When|Então|Then)\b/i.test(value);
  if (!hasFeature && !hasScenario && !hasStep) return "Ainda não encontrei a estrutura mínima. Comece com Funcionalidade:, Cenário: e pelo menos um passo.";
  if (!hasFeature) return "Encontrei parte da estrutura, mas falta Funcionalidade:.";
  if (!hasScenario) return "Encontrei a Funcionalidade, mas falta Cenário:.";
  if (!hasStep) return "Encontrei os títulos, mas falta um passo iniciado por Dado, Quando ou Então.";
  return "Estrutura mínima reconhecida. Agora leia o exemplo e revise se o comportamento está claro e observável.";
}

export default function LessonDetailPanel({ lesson, completed, draft, onDraftChange, onToggleCompleted }: Props) {
  const feedback = validateDraft(lesson, draft);
  const isReady = draft.trim().length > 0 && !feedback.startsWith("Ainda") && !feedback.startsWith("Não") && !feedback.startsWith("Encontrei parte") && !feedback.startsWith("Encontrei a Funcionalidade") && !feedback.startsWith("Encontrei os títulos");

  return (
    <article className="mt-6 overflow-hidden rounded-2xl border border-[#18d8e8]/20 bg-[#0d1115]">
      <div className="border-b border-[var(--app-border)] bg-[var(--app-cyan-head)] p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[.15em] text-[#18d8e8]">LIÇÃO / CONTEÚDO E PRÁTICA</div>
            <h3 className="mt-2 max-w-3xl font-display text-2xl font-semibold tracking-[-.03em]">{lesson.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--app-cyan-muted)]">{lesson.objective}</p>
          </div>
          <button type="button" onClick={onToggleCompleted} className={`inline-flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 font-mono text-[10px] uppercase tracking-[.1em] transition ${completed ? "border-[#18d8e8]/50 bg-[#18d8e8]/10 text-[#18d8e8]" : "border-[var(--app-border-strong)] bg-[var(--app-soft)] text-[var(--app-body-soft)] hover:border-[#18d8e8]/50 hover:text-[var(--app-text)]"}`} aria-pressed={completed}>
            {completed ? "Lição estudada" : "Marcar como estudada"}
          </button>
        </div>
      </div>
      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="text-sm leading-7 text-[var(--app-body-strong)]">{lesson.explanation}</p>
          <div className="mt-5 rounded-xl border border-[#ff9a72]/20 bg-[#191412] p-4">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-[var(--app-warm-accent)]"><Lightbulb className="h-3.5 w-3.5" /> Vocabulário desta lição</div>
            <p className="mt-2 text-xs leading-6 text-[var(--app-warm-text)]">{lesson.vocabulary}</p>
          </div>
          <p className="mt-5 text-sm leading-6 text-[var(--app-muted-strong)]"><strong className="text-[var(--app-heading-soft)]">Prática sugerida:</strong> {lesson.practice}</p>
          <div className="mt-6 rounded-xl border border-[#f34ba8]/25 bg-[var(--app-pink-panel)] p-4">
            <div className="font-mono text-[10px] uppercase tracking-[.13em] text-[#ff82c0]">ESPAÇO DE PRÁTICA</div>
            <p className="mt-2 text-xs leading-5 text-[var(--app-pink-light)]">Digite sua tentativa. A validação verifica apenas a estrutura necessária para esta lição.</p>
            <textarea value={draft} onChange={(event) => onDraftChange(event.target.value)} className="mt-4 min-h-[150px] w-full resize-y rounded-xl border border-[var(--app-border)] bg-[var(--app-code)] p-4 font-mono text-xs leading-6 text-[var(--app-code-strong)] outline-none placeholder:text-[var(--app-placeholder)] focus:border-[#18d8e8]" placeholder="Digite aqui sua tentativa..." spellCheck={false} aria-label={`Área de prática da lição ${lesson.title}`} />
            <div className={`mt-3 flex items-start gap-2 rounded-lg border p-3 text-xs leading-5 ${isReady ? "border-[#18d8e8]/30 bg-[#18d8e8]/10 text-[var(--app-success-text)]" : "border-[#ff9a72]/25 bg-[#ff9a72]/10 text-[var(--app-error-light)]"}`}>{isReady ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" /> : <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />}<span>{feedback}</span></div>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-xl border border-[var(--app-border)] bg-[var(--app-code-alt)]">
            <div className="border-b border-[var(--app-border)] px-4 py-2 font-mono text-[10px] uppercase tracking-[.12em] text-[var(--app-dim)]">{lesson.exampleLabel}</div>
            <pre className="max-h-[360px] overflow-auto p-4 font-mono text-xs leading-6 text-[var(--app-code-cyan)]"><code>{lesson.example}</code></pre>
          </div>
          <a href={lesson.source} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.11em] text-[#18d8e8] hover:text-[var(--app-text)]"><ExternalLink className="h-3.5 w-3.5" /> {lesson.sourceLabel}</a>
        </div>
      </div>
    </article>
  );
}
