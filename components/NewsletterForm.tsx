"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <p className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold">
        Success! You&apos;re subscribed.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Email"
        className="min-w-0 flex-1 rounded-full border-0 bg-white px-5 py-3 text-sm text-ink outline-none ring-brand placeholder:text-ink/50 focus:ring-2"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-brand px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
      >
        Subscribe
      </button>
    </form>
  );
}
