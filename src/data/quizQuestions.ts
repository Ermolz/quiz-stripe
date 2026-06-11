import type { QuizQuestion } from "../types/quiz";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "goal",
    question: "What is your main goal?",
    options: [
      { id: "learn", text: "Learn new skills" },
      { id: "build", text: "Build a real project" },
      { id: "consult", text: "Get expert guidance" },
    ],
  },
  {
    id: "experience",
    question: "How experienced are you with this topic?",
    options: [
      { id: "beginner", text: "I am just getting started" },
      { id: "intermediate", text: "I know the fundamentals" },
      { id: "advanced", text: "I have hands-on experience" },
    ],
  },
  {
    id: "result",
    question: "What type of result do you expect?",
    options: [
      { id: "roadmap", text: "A clear step-by-step roadmap" },
      { id: "outcome", text: "A finished, practical outcome" },
      { id: "confidence", text: "More confidence and direction" },
    ],
  },
];
