'use client';

import { useState } from 'react';
import Link from 'next/link';

const inputClasses =
  'py-3.5 px-lg bg-white/[0.03] border border-border-subtle rounded-md text-text-primary text-sm transition-all duration-200 ease-out placeholder:text-text-muted focus:border-warm-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.15)] focus:bg-warm-gold/[0.02]';

export default function InvestorsLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only — no backend
    alert('Login functionality will be connected to your authentication backend.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(160deg,#0a0e0a_0%,#0f1a0e_30%,#0a100a_60%,#0a0e0a_100%)] relative overflow-hidden py-xl px-xl pt-[80px]">
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,168,76,0.04)_0%,transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(201,168,76,0.03)_0%,transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative z-[2] w-full max-w-[440px] bg-[linear-gradient(145deg,rgba(21,28,20,0.7),rgba(10,14,10,0.95))] backdrop-blur-[20px] border border-border-glass rounded-xl p-3xl animate-[fadeInUp_0.6s_ease_both] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-[linear-gradient(135deg,#d4a843,#e8c876,#d4a843)] before:rounded-t-xl max-[480px]:p-xl max-[480px]:rounded-lg">
        {/* Logo */}
        <div className="text-center mb-xl">
          <span className="text-3xl text-warm-gold block mb-xs [filter:drop-shadow(0_0_12px_rgba(201,168,76,0.4))]">✦</span>
          <span className="text-lg font-extrabold tracking-wider bg-[linear-gradient(90deg,#d4a843,#f0dca0,#d4a843)] bg-clip-text text-transparent">COSMOS</span>
        </div>

        <h1 className="text-2xl font-bold text-text-primary text-center mb-xs">Investors Login</h1>
        <p className="text-sm text-text-muted text-center mb-2xl">
          Access your investor portal, portfolio, and exclusive insights.
        </p>

        <form className="flex flex-col gap-lg" onSubmit={handleSubmit} id="login-form">
          <div className="flex flex-col gap-xs">
            <label htmlFor="login-email" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              id="login-email"
              name="email"
              placeholder="you@company.com"
              className={inputClasses}
              required
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col gap-xs">
            <label htmlFor="login-password" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="login-password"
              name="password"
              placeholder="••••••••"
              className={inputClasses}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-sm" id="login-submit">
            Sign In
          </button>
        </form>

        <div className="text-center relative my-lg before:content-[''] before:absolute before:left-0 before:right-0 before:top-1/2 before:h-px before:bg-border-subtle">
          <span className="relative bg-[#14182e] px-md text-xs text-text-muted">or</span>
        </div>

        <div className="flex justify-center gap-lg flex-wrap">
          <button
            type="button"
            className="text-sm text-warm-gold font-medium transition-colors duration-200 hover:text-[#e8c876]"
            onClick={() =>
              alert('Password reset flow will be connected to your authentication backend.')
            }
            id="reset-password"
          >
            Reset Password
          </button>
        </div>

        <div className="text-center mt-xl text-sm text-text-muted">
          Don&apos;t have an account?{' '}
          <Link href="/create-account" className="text-warm-gold font-semibold hover:text-[#e8c876]">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}
