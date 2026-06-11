import type { QuizOption } from "../../types/quiz";

type AnswerOptionProps = {
  option: QuizOption;
  isSelected: boolean;
  onSelect: (optionId: string) => void;
};

export function AnswerOption({
  option,
  isSelected,
  onSelect,
}: AnswerOptionProps) {
  const baseClasses =
    "group flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-100 sm:px-5";
  const stateClasses = isSelected
    ? "border-indigo-500 bg-indigo-50 text-indigo-950 shadow-sm"
    : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md";

  return (
    <button
      type="button"
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={isSelected}
      onClick={() => onSelect(option.id)}
    >
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
          isSelected
            ? "border-indigo-600 bg-indigo-600"
            : "border-slate-300 group-hover:border-indigo-400"
        }`}
        aria-hidden="true"
      >
        {isSelected && <span className="size-2 rounded-full bg-white" />}
      </span>
      <span className="font-medium">{option.text}</span>
    </button>
  );
}
