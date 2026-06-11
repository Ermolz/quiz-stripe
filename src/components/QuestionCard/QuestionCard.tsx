import type { QuizQuestion } from "../../types/quiz";
import { AnswerOption } from "../AnswerOption/AnswerOption";

type QuestionCardProps = {
  question: QuizQuestion;
  selectedOptionId: string | null;
  onSelectOption: (optionId: string) => void;
};

export function QuestionCard({
  question,
  selectedOptionId,
  onSelectOption,
}: QuestionCardProps) {
  return (
    <section aria-labelledby={`question-${question.id}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">
        Choose one answer
      </p>
      <h2
        id={`question-${question.id}`}
        className="text-2xl font-bold leading-tight text-slate-950 sm:text-3xl"
      >
        {question.question}
      </h2>

      <div className="mt-7 space-y-3">
        {question.options.map((option) => (
          <AnswerOption
            key={option.id}
            option={option}
            isSelected={selectedOptionId === option.id}
            onSelect={onSelectOption}
          />
        ))}
      </div>
    </section>
  );
}
