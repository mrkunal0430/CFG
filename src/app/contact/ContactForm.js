'use client';

import { useState, useRef } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const btnRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  const handleRipple = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const circle = document.createElement('span');
    const diameter = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;
    circle.className = 'ripple-circle';
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <form className="flex flex-col gap-xl" onSubmit={handleSubmit} id="contact-form">
      <div className="grid grid-cols-2 gap-lg max-[768px]:grid-cols-1">
        <div className="floating-input-group">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder=" "
            className="floating-input"
            required
          />
          <label htmlFor="firstName" className="floating-label">First Name</label>
          <div className="floating-input-line" />
        </div>
        <div className="floating-input-group">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder=" "
            className="floating-input"
            required
          />
          <label htmlFor="lastName" className="floating-label">Last Name</label>
          <div className="floating-input-line" />
        </div>
      </div>

      <div className="floating-input-group">
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" "
          className="floating-input"
          required
        />
        <label htmlFor="email" className="floating-label">Email Address</label>
        <div className="floating-input-line" />
      </div>

      <div className="floating-input-group">
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder=" "
          className="floating-input"
        />
        <label htmlFor="subject" className="floating-label">Subject</label>
        <div className="floating-input-line" />
      </div>

      <div className="floating-input-group">
        <textarea
          id="message"
          name="message"
          placeholder=" "
          className="floating-input min-h-[140px] resize-y"
          required
        />
        <label htmlFor="message" className="floating-label">Your Message</label>
        <div className="floating-input-line" />
      </div>

      <div className="self-start">
        <button
          ref={btnRef}
          type="submit"
          className="btn btn-primary btn-ripple min-w-[180px]"
          id="contact-submit"
          onClick={handleRipple}
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center gap-sm">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              Sending...
            </span>
          ) : submitted ? (
            <span className="flex items-center gap-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="checkmark-svg" />
              </svg>
              Message Sent
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
    </form>
  );
}
