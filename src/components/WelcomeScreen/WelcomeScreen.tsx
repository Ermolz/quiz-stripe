type WelcomeScreenProps = {
  questionCount: number;
  onStart: () => void;
};

export function WelcomeScreen({
  questionCount,
  onStart,
}: WelcomeScreenProps) {
  return (
    <section className="text-center">
      <div
        className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-indigo-100 text-2xl font-black text-indigo-700"
        aria-hidden="true"
      >
        Q
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
        Personal goal finder
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        Find your best next step
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-600">
        Answer {questionCount} quick questions to get a simple recommendation
        tailored to what you want to achieve.
      </p>
      <button
        type="button"
        className="mt-8 w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 sm:w-auto sm:min-w-48"
        onClick={onStart}
      >
        Start Quiz
      </button>
      <p className="mt-5 text-sm text-slate-400">Takes less than a minute</p>
    </section>
  );
}
