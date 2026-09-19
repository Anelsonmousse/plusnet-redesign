"use client";

import { useState, type FormEvent } from "react";

type Mode = "login" | "signup" | "reset";

const field =
  "w-full rounded-lg border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-brand focus:ring-2";
const btn =
  "w-full rounded-full bg-brand py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark";
const link = "font-semibold text-brand hover:underline";

export default function AuthPanel() {
  const [mode, setMode] = useState<Mode>("login");
  const [notice, setNotice] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice(
      mode === "reset"
        ? "If that address is registered, a reset link is on its way."
        : "Account services are not connected yet — please contact support."
    );
  }

  function switchTo(m: Mode) {
    setMode(m);
    setNotice(null);
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <p className="text-center text-sm font-light text-ink/80">
        Please login or create an account to access the Customer Support Portal
      </p>

      {notice && (
        <p className="mt-5 rounded-lg bg-mist p-3 text-center text-xs">{notice}</p>
      )}

      {mode === "login" && (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="login-user" className="mb-1.5 block text-sm font-semibold">
              Username or Email Address
            </label>
            <input id="login-user" required className={field} />
          </div>
          <div>
            <label htmlFor="login-pass" className="mb-1.5 block text-sm font-semibold">
              Password
            </label>
            <input id="login-pass" type="password" required className={field} />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-brand" /> Remember Me
          </label>
          <button type="submit" className={btn}>Log in</button>
          <p className="text-center text-xs text-ink/70">
            Not registered?{" "}
            <button type="button" onClick={() => switchTo("signup")} className={link}>
              Create an Account
            </button>
          </p>
          <p className="text-center text-xs text-ink/70">
            Forgot your password?{" "}
            <button type="button" onClick={() => switchTo("reset")} className={link}>
              Reset Password
            </button>
          </p>
        </form>
      )}

      {mode === "signup" && (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="su-first" className="mb-1.5 block text-sm font-semibold">First name</label>
              <input id="su-first" required className={field} />
            </div>
            <div>
              <label htmlFor="su-last" className="mb-1.5 block text-sm font-semibold">Last Name</label>
              <input id="su-last" required className={field} />
            </div>
          </div>
          <div>
            <label htmlFor="su-user" className="mb-1.5 block text-sm font-semibold">Username</label>
            <input id="su-user" required className={field} />
          </div>
          <div>
            <label htmlFor="su-email" className="mb-1.5 block text-sm font-semibold">Email Address</label>
            <input id="su-email" type="email" required className={field} />
          </div>
          <div>
            <label htmlFor="su-pass" className="mb-1.5 block text-sm font-semibold">Password</label>
            <input id="su-pass" type="password" required className={field} />
          </div>
          <button type="submit" className={btn}>Signup</button>
          <p className="text-center text-xs text-ink/70">
            Already have an account?{" "}
            <button type="button" onClick={() => switchTo("login")} className={link}>
              Login
            </button>
          </p>
        </form>
      )}

      {mode === "reset" && (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="rs-email" className="mb-1.5 block text-sm font-semibold">Email Address</label>
            <input id="rs-email" type="email" required className={field} />
          </div>
          <button type="submit" className={btn}>Reset Password</button>
          <p className="text-center text-xs text-ink/70">
            <button type="button" onClick={() => switchTo("login")} className={link}>
              Back to login
            </button>
          </p>
        </form>
      )}
    </div>
  );
}
