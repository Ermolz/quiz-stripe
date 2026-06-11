import { Quiz } from "./components/Quiz/Quiz";

function App() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-10 sm:px-6">
      <div
        className="pointer-events-none absolute -left-28 top-10 size-80 rounded-full bg-indigo-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-sky-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full">
        <div className="mx-auto flex max-w-2xl justify-center">
          <Quiz />
        </div>
      </div>
    </div>
  );
}

export default App;
