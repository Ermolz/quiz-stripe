import { useState } from "react";
import { redirectToStripeCheckout } from "../../services/stripe";
import type { UserAnswer } from "../../types/quiz";

type ResultScreenProps = {
  answers: UserAnswer[];
};

export function ResultScreen({ answers }: ResultScreenProps) {
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const handleCheckout = () => {
    setCheckoutError(null);

    try {
      redirectToStripeCheckout();
    } catch (error) {
      setCheckoutError(
        error instanceof Error
          ? error.message
          : "Unable to continue to checkout.",
      );
    }
  };

  return (
    <section className="text-center" aria-labelledby="result-heading">
      <div
        className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700"
        aria-hidden="true"
      >
        ✓
      </div>
      <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
        Quiz complete
      </p>
      <h1
        id="result-heading"
        className="mt-3 text-3xl font-bold tracking-tight text-slate-950"
      >
        Your next step is ready
      </h1>
      <p className="mx-auto mt-4 max-w-md leading-7 text-slate-600">
        We saved all {answers.length} of your answers. Continue to checkout to
        unlock the personalized experience.
      </p>

      <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-slate-500">Questions answered</span>
          <span className="font-bold text-slate-900">{answers.length}</span>
        </div>
        <div className="mt-3 flex items-center justify-between gap-4 border-t border-slate-200 pt-3">
          <span className="text-sm text-slate-500">Status</span>
          <span className="font-semibold text-emerald-700">Complete</span>
        </div>
      </div>

      {checkoutError && (
        <p
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          role="alert"
        >
          {checkoutError}
        </p>
      )}

      <button
        type="button"
        className="mt-7 w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
        onClick={handleCheckout}
      >
        Continue to Checkout
      </button>
      <p className="mt-4 text-xs leading-5 text-slate-400">
        You will be redirected securely to Stripe Checkout.
      </p>
    </section>
  );
}
