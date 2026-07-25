'use client';

import Link from 'next/link';

const inputClasses =
  'py-3.5 px-lg bg-white/[0.03] border border-border-subtle rounded-md text-text-primary text-sm transition-all duration-200 ease-out placeholder:text-text-muted focus:border-warm-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.15)] focus:bg-warm-gold/[0.02]';

export default function CreateAccountPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Account creation will be connected to your authentication backend.');
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

        <h1 className="text-2xl font-bold text-text-primary text-center mb-xs">Create Account</h1>
        <p className="text-sm text-text-muted text-center mb-2xl">
          Join the Cosmos investor community and access exclusive opportunities.
        </p>

        <form className="flex flex-col gap-lg" onSubmit={handleSubmit} id="register-form">
          <div className="grid grid-cols-2 gap-lg max-[480px]:grid-cols-1">
            <div className="flex flex-col gap-xs">
              <label htmlFor="reg-firstName" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                First Name
              </label>
              <input
                type="text"
                id="reg-firstName"
                name="firstName"
                placeholder="John"
                className={inputClasses}
                required
                autoComplete="given-name"
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label htmlFor="reg-lastName" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
                Last Name
              </label>
              <input
                type="text"
                id="reg-lastName"
                name="lastName"
                placeholder="Doe"
                className={inputClasses}
                required
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className="flex flex-col gap-xs">
            <label htmlFor="reg-email" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              id="reg-email"
              name="email"
              placeholder="you@company.com"
              className={inputClasses}
              required
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col gap-xs">
            <label htmlFor="reg-phone" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
              Phone (Optional)
            </label>
            <input
              type="tel"
              id="reg-phone"
              name="phone"
              placeholder="+91 99999 99999"
              className={inputClasses}
              autoComplete="tel"
            />
          </div>

          <div className="flex flex-col gap-xs">
            <label htmlFor="reg-password" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
              Password
            </label>
            <input
              type="password"
              id="reg-password"
              name="password"
              placeholder="Create a strong password"
              className={inputClasses}
              required
              autoComplete="new-password"
              minLength={8}
            />
          </div>

          <p className="text-xs text-text-muted leading-normal">
            By creating an account, you agree to our Terms of Service and Privacy Policy.
            This site is protected by reCAPTCHA.
          </p>

          <button type="submit" className="btn btn-primary w-full mt-sm" id="register-submit">
            Create Account
          </button>
        </form>

        <div className="text-center mt-xl text-sm text-text-muted">
          Already have an account?{' '}
          <Link href="/investors-login" className="text-warm-gold font-semibold hover:text-[#e8c876]">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
