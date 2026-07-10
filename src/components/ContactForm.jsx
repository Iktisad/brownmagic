import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { brand, budgetRanges, eventTypes } from "../data/content";
import { submitInquiry } from "../lib/submitInquiry";

const initialStatus = { state: "idle", error: "" };

export default function ContactForm() {
  const [status, setStatus] = useState(initialStatus);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus({ state: "submitting", error: "" });
    try {
      const result = await submitInquiry(formData);
      if (!result?.ok) throw new Error("Submission failed");
      setStatus({ state: "success", error: "" });
      form.reset();
    } catch (err) {
      setStatus({ state: "error", error: "Something went wrong — please email us directly." });
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Let's Create Something Unforgettable"
            title="Your Guests Will Talk About It Long After the Event Ends"
            description="Tell us about your event and we'll get back to you within 24 hours."
          />

          <div className="flex flex-col gap-4 text-bone/70">
            <a href={`tel:${brand.phone}`} className="flex items-center gap-3 transition hover:text-gold">
              <span className="text-gold">☎</span> {brand.phoneDisplay}
            </a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-3 transition hover:text-gold">
              <span className="text-gold">✉</span> {brand.email}
            </a>
            <p className="flex items-center gap-3">
              <span className="text-gold">⌂</span> {brand.location}
            </p>
            <p className="flex items-center gap-3">
              <span className="text-gold">◎</span> {brand.instagram} (Instagram &amp; TikTok)
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-panel/60 p-8"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Event Name" name="event" />
            <Field label="Event Date" name="date" type="date" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SelectField label="Event Type" name="eventType" options={eventTypes} />
            <SelectField label="Budget Range" name="budget" options={budgetRanges} />
          </div>

          <label className="flex flex-col gap-1.5 text-sm text-bone/70">
            Message
            <textarea
              name="message"
              rows={4}
              required
              className="rounded-lg border border-white/15 bg-ink px-4 py-3 text-bone outline-none transition focus:border-gold"
            />
          </label>

          <button
            type="submit"
            disabled={status.state === "submitting"}
            className="mt-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-gold-soft disabled:opacity-60"
          >
            {status.state === "submitting" ? "Sending…" : "Send Inquiry"}
          </button>

          {status.state === "success" && (
            <p className="text-sm text-emerald-400">Inquiry sent — we'll be in touch within 24 hours.</p>
          )}
          {status.state === "error" && <p className="text-sm text-red-400">{status.error}</p>}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm text-bone/70">
      {label}
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-lg border border-white/15 bg-ink px-4 py-3 text-bone outline-none transition focus:border-gold"
      />
    </label>
  );
}

function SelectField({ label, name, options }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm text-bone/70">
      {label}
      <select
        name={name}
        defaultValue=""
        className="rounded-lg border border-white/15 bg-ink px-4 py-3 text-bone outline-none transition focus:border-gold"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
