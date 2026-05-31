"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ContactForm() {
  return (
    <ScrollReveal delay={150}>
      <form
        className="card-premium p-8"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! This is a prototype — form submission is not connected.");
        }}
      >
        <h2 className="font-display text-2xl font-bold text-itc-slate dark:text-white">Send a Message</h2>
        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-itc-slate dark:text-white/80">
              Name
            </label>
            <input
              id="name"
              required
              className="mt-1 w-full rounded-xl border border-itc-green/15 bg-white px-4 py-3 text-sm outline-none ring-itc-green/30 focus:ring-2 dark:border-white/10 dark:bg-[#0a0f14] dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold text-itc-slate dark:text-white/80">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-itc-green/15 bg-white px-4 py-3 text-sm outline-none ring-itc-green/30 focus:ring-2 dark:border-white/10 dark:bg-[#0a0f14] dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-semibold text-itc-slate dark:text-white/80">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="mt-1 w-full resize-none rounded-xl border border-itc-green/15 bg-white px-4 py-3 text-sm outline-none ring-itc-green/30 focus:ring-2 dark:border-white/10 dark:bg-[#0a0f14] dark:text-white"
            />
          </div>
          <button type="submit" className="btn-primary w-full justify-center">
            Submit enquiry
          </button>
        </div>
      </form>
    </ScrollReveal>
  );
}
