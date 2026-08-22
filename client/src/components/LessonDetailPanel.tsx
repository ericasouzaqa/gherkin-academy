/**
 * Direção visual: Laboratório Neon Editorial.
 * Papel: transformar cada item da trilha em uma lição completa, legível e praticável.
 */
import { ExternalLink, Lightbulb } from "lucide-react";
import { LessonContent } from "@/content/lessonContent";

type Props = {
  lesson: LessonContent;
  completed: boolean;
  onToggleCompleted: () => void;
};

export default function LessonDetailPanel({ lesson, completed, onToggleCompleted }: Props) {
  return (
    <article className="mt-6 overflow-hidden rounded-2xl border border-[#18d8e8]/20 bg-[#0d1115]">
      <div className="border-b border-white/10 bg-[#121a1d] p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[.15em] text-[#18d8e8]">LIÇÃO / CONTEÚDO GUIADO</div>
            <h3 className="mt-2 max-w-3xl font-display text-2xl font-semibold tracking-[-.03em]">{lesson.title}</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#b7c7c9]">{lesson.objective}</p>
          </div>
          <button type="button" onClick={onToggleCompleted} className={`inline-flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 font-mono text-[10px] uppercase tracking-[.1em] transition ${completed ? "border-[#18d8e8]/50 bg-[#18d8e8]/10 text-[#18d8e8]" : "border-white/15 bg-white/5 text-[#c6c1cd] hover:border-[#18d8e8]/50 hover:text-white"}`} aria-pressed={completed}>
            {completed ? "Lição estudada" : "Marcar como estudada"}
          </button>
        </div>
      </div>
      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="text-sm leading-7 text-[#d1ccd8]">{lesson.explanation}</p>
          <div className="mt-5 rounded-xl border border-[#ff9a72]/20 bg-[#191412] p-4">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-[#ffb095]"><Lightbulb className="h-3.5 w-3.5" /> Vocabulário desta lição</div>
            <p className="mt-2 text-xs leading-6 text-[#d8c4bc]">{lesson.vocabulary}</p>
          </div>
          <p className="mt-5 text-sm leading-6 text-[#aaa5b2]"><strong className="text-[#f2edf7]">Prática sugerida:</strong> {lesson.practice}</p>
        </div>
        <div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080a0e]">
            <div className="border-b border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[.12em] text-[#777380]">{lesson.exampleLabel}</div>
            <pre className="max-h-[360px] overflow-auto p-4 font-mono text-xs leading-6 text-[#cbd9dd]"><code>{lesson.example}</code></pre>
          </div>
          <a href={lesson.source} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.11em] text-[#18d8e8] hover:text-white"><ExternalLink className="h-3.5 w-3.5" /> {lesson.sourceLabel}</a>
        </div>
      </div>
    </article>
  );
}
