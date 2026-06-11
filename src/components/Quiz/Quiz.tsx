import { useState } from "react";
import { quizQuestions } from "../../data/quizQuestions";
import type { UserAnswer } from "../../types/quiz";
import { QuestionCard } from "../QuestionCard/QuestionCard";
import { ResultScreen } from "../ResultScreen/ResultScreen";
import { WelcomeScreen } from "../WelcomeScreen/WelcomeScreen";

type QuizStage = "welcome" | "questions" | "result";

export function Quiz() {
  const [stage, setStage] = useState<QuizStage>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleNext = () => {
    if (!selectedOptionId) {
      return;
    }

    const nextAnswers = [
      ...answers,
      {
        questionId: currentQuestion.id,
        optionId: selectedOptionId,
      },
    ];

    setAnswers(nextAnswers);
    setSelectedOptionId(null);

    if (isLastQuestion) {
      setStage("result");
      return;
    }

    setCurrentQuestionIndex((index) => index + 1);
  };

  return (
    <main className="w-full max-w-2xl">
      <div className="overflow-hidden rounded-3xl border border-white/80 bg-white/95 shadow-2xl shadow-slate-300/40 backdrop-blur">
        {stage === "questions" && (
          <header className="border-b border-slate-100 px-6 py-5 sm:px-10">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-slate-700">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm font-medium text-slate-400">
                {Math.round(progress)}%
              </span>
            </div>
            <div
              className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100"
              role="progressbar"
              aria-label="Quiz progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
            >
              <div
                className="h-full rounded-full bg-indigo-600 transition-[width] duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </header>
        )}

        <div className="p-6 sm:p-10">
          {stage === "welcome" && (
            <WelcomeScreen
              questionCount={quizQuestions.length}
              onStart={() => setStage("questions")}
            />
          )}

          {stage === "questions" && (
            <>
              <QuestionCard
                question={currentQuestion}
                selectedOptionId={selectedOptionId}
                onSelectOption={setSelectedOptionId}
              />
              <button
                type="button"
                className="mt-8 w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
                disabled={!selectedOptionId}
                onClick={handleNext}
              >
                {isLastQuestion ? "See My Result" : "Next Question"}
              </button>
            </>
          )}

          {stage === "result" && <ResultScreen answers={answers} />}
        </div>
      </div>
      <p className="mt-6 text-center text-sm text-slate-400">
        Your answers stay private and are used only for this experience.
      </p>
    </main>
  );
}
