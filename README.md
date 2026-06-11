# React Quiz with Stripe Checkout Redirect

[![Build and Deploy](https://github.com/Ermolz/quiz-stripe/actions/workflows/pages.yml/badge.svg)](https://github.com/Ermolz/quiz-stripe/actions/workflows/pages.yml)

[Live demo](https://ermolz.github.io/quiz-stripe/)

## Overview

A small, polished quiz application built as a React test assignment. Users
answer three questions, review a completion summary, and continue to a
configured Stripe Checkout page.

The project keeps quiz data, types, UI components, and the checkout redirect
logic in separate modules to make the flow easy to understand and extend.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- ESLint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

On Windows PowerShell systems that block npm scripts, use `npm.cmd` instead of
`npm`, for example `npm.cmd run dev`.

## Environment Variables

Copy `.env.example` to `.env` and configure the public Stripe Checkout URL:

```env
VITE_STRIPE_CHECKOUT_URL=https://checkout.stripe.com/c/test_mock_url
```

Restart the Vite development server after changing environment variables.

Only a public Checkout URL belongs in this frontend variable. Never expose a
Stripe Secret Key or other private credentials in client-side code.

## Quiz Flow

1. The welcome screen introduces the quiz.
2. The user answers three single-choice questions.
3. The Next button stays disabled until an option is selected.
4. A label and progress bar show the current position.
5. The result screen displays a short completion summary.
6. Continue to Checkout redirects the browser to Stripe.

## Stripe Checkout

The redirect logic is located in `src/services/stripe.ts`. It validates that
`VITE_STRIPE_CHECKOUT_URL` exists and is a valid HTTPS URL before redirecting.
If configuration is missing or invalid, the result screen displays an error
instead of leaving the page.

For production, create a Stripe Payment Link or a Checkout Session on a secure
backend and replace the mock URL in `.env` with the resulting public Checkout
URL.

## GitHub Pages Deployment

The `.github/workflows/pages.yml` workflow runs ESLint and creates a production
build for every pull request targeting `master`. Pushes to `master` run the
same checks and deploy the generated `dist` directory to GitHub Pages.

In the GitHub repository:

1. Open **Settings > Pages** and select **GitHub Actions** as the source.
2. Open **Settings > Secrets and variables > Actions > Variables**.
3. Add `VITE_STRIPE_CHECKOUT_URL` with the public Stripe Checkout URL.

If the repository variable is not configured, the workflow uses the mock URL
from `.env.example`. The workflow status badge at the top of this README links
to the latest lint, build, and deployment run.
