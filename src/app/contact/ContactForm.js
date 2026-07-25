'use client';

import { useState } from 'react';

const inputClasses =
  'py-3.5 px-lg bg-white/[0.03] border border-border-subtle rounded-md text-text-primary text-sm transition-all duration-200 ease-out placeholder:text-text-muted focus:border-warm-gold focus:shadow-[0_0_0_3px_rgba(201,168,76,0.15)] focus:bg-warm-gold/[0.02]';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form className="flex flex-col gap-lg" onSubmit={handleSubmit} id="contact-form">
      <div className="grid grid-cols-2 gap-lg max-[768px]:grid-cols-1">
        <div className="flex flex-col gap-xs">
          <label htmlFor="firstName" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            className={inputClasses}
            required
          />
        </div>
        <div className="flex flex-col gap-xs">
          <label htmlFor="lastName" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            className={inputClasses}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="email" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="john@company.com"
          className={inputClasses}
          required
        />
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="subject" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="How can we help?"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-xs">
        <label htmlFor="message" className="text-xs font-semibold text-text-secondary uppercase tracking-wide">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or inquiry..."
          className={`${inputClasses} min-h-[140px] resize-y`}
          required
        />
      </div>

      <div className="self-start">
        <button type="submit" className="btn btn-primary" id="contact-submit">
          {submitted ? '✓ Message Sent' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
