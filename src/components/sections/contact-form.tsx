"use client";

import { useState } from "react";
import { submitForm } from "@/lib/forms";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const fields = Object.fromEntries(formData.entries()) as Record<string, string>;

    try {
      const { ok } = await submitForm({
        form: "callback-request",
        fields,
      });

      if (ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(`Unable to submit request right now. Please call us directly at ${site.phone}.`);
      }
    } catch {
      setStatus("error");
      setErrorMessage(`Something went wrong. Please call us directly at ${site.phone} or email ${site.email}.`);
    }
  }

  return (
    <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-space-lg md:p-space-xl card-elevation-1">
      <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-on-surface tracking-tight mb-2">Request a Service Call</h3>
      <p className="text-body-sm font-body-sm text-secondary mb-space-lg">
        Fill out the quick request details below. Average callback time is under 15 minutes.
      </p>

      {status === "success" ? (
        <div className="p-space-lg rounded-xl bg-primary-container/10 border border-primary-container/30 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-primary-container/20 text-primary-container mx-auto flex items-center justify-center">
            <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          </div>
          <h4 className="text-headline-sm font-bold text-on-surface">Request Received!</h4>
          <p className="text-body-md text-secondary max-w-md mx-auto">
            Thank you! Our on-duty dispatcher is reviewing your details and will call you shortly. For immediate emergency dispatch, call{" "}
            <a href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`} className="font-bold text-primary hover:underline">
              {site.phone}
            </a>.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 text-label-md font-bold text-primary hover:text-primary-container underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-space-md">
          {status === "error" && (
            <div className="p-3.5 rounded-lg bg-error-container text-on-error-container text-body-sm flex items-start gap-2">
              <span className="material-symbols-outlined text-[20px] shrink-0">error</span>
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div>
              <label className="block text-label-md font-label-md font-semibold text-on-surface mb-1" htmlFor="full_name">
                Full Name *
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"
                id="full_name"
                name="name"
                placeholder="e.g. Sarah Jenkins"
                required
                type="text"
                disabled={status === "submitting"}
              />
            </div>
            <div>
              <label className="block text-label-md font-label-md font-semibold text-on-surface mb-1" htmlFor="phone_number">
                Phone Number *
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"
                id="phone_number"
                name="phone"
                placeholder="e.g. (555) 000-0000"
                required
                type="tel"
                disabled={status === "submitting"}
              />
            </div>
          </div>

          <div>
            <label className="block text-label-md font-label-md font-semibold text-on-surface mb-1" htmlFor="service_type">
              Service Required *
            </label>
            <select
              className="w-full h-12 px-4 rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface text-body-md focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"
              id="service_type"
              name="service_type"
              required
              defaultValue=""
              disabled={status === "submitting"}
            >
              <option disabled value="">Select service type...</option>
              <option value="emergency">Emergency Plumbing</option>
              <option value="leak">Leak Detection &amp; Repair</option>
              <option value="drain">Drain Cleaning &amp; Unclogging</option>
              <option value="fixture">Fixture Installation &amp; Replacement</option>
              <option value="water_heater">Water Heater Maintenance</option>
              <option value="other">Other Plumbing Concern</option>
            </select>
          </div>

          <div>
            <label className="block text-label-md font-label-md font-semibold text-on-surface mb-1" htmlFor="description">
              Brief Description of the Problem
            </label>
            <textarea
              className="w-full p-4 rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface placeholder:text-outline text-body-md focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all"
              id="description"
              name="message"
              placeholder="Please describe symptoms, leaks, sounds, or preferred inspection time..."
              rows={4}
              disabled={status === "submitting"}
            />
          </div>

          <div className="pt-space-xs">
            <button
              className="w-full h-12 bg-primary-container hover:bg-tertiary text-on-primary rounded-lg text-label-lg font-label-lg font-bold transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-space-xs disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                  <span>Sending Request...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">send</span>
                  <span>Request a Callback</span>
                </>
              )}
            </button>
          </div>

          <p className="text-center text-label-md font-label-md text-secondary mt-space-sm">
            🔒 Your personal information is protected. We never share your data.
          </p>
        </form>
      )}
    </div>
  );
}
