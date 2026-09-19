"use client";

import { useState, type FormEvent } from "react";

const field =
  "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-brand focus:ring-2";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-mist p-8 text-center">
        <p className="text-lg font-bold">Thanks for getting in touch.</p>
        <p className="mt-2 text-sm font-light text-ink/80">
          Our sales team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
          Name
        </label>
        <input id="name" name="name" required className={field} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
          Email Address
        </label>
        <input id="email" name="email" type="email" required className={field} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
          Message
        </label>
        <textarea id="message" name="message" rows={6} required className={field} />
      </div>
      <button
        type="submit"
        className="rounded-full bg-brand px-8 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
      >
        Submit
      </button>
    </form>
  );
}
