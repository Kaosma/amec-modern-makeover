import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Mail, Check } from "lucide-react";
import { z } from "zod";

const helpOptions = [
  "Löpande redovisning",
  "Lön",
  "Bokslut",
  "Deklaration",
  "Annat",
];

const schema = z.object({
  name: z.string().trim().min(1, "Namn krävs").max(100),
  email: z.string().trim().email("Ogiltig e-postadress").max(255),
  subject: z.string().trim().min(1, "Ämne krävs").max(200),
  message: z.string().trim().min(1, "Meddelande krävs").max(2000),
});

type InquiryFormData = z.infer<typeof schema>;

type LocationState = {
  subject?: string;
  message?: string;
};

export default function InquiryForm() {
  const { state } = useLocation() as {
    state?: LocationState;
  };

  const [form, setForm] = useState<InquiryFormData>({
    name: "",
    email: "",
    subject: state?.subject ?? "",
    message: state?.message ?? "",
  });

  const [help, setHelp] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const change = (key: keyof InquiryFormData, value: string) => {
    setForm((previous) => ({
      ...previous,
      [key]: value,
    }));

    if (errors[key]) {
      setErrors((previous) => ({
        ...previous,
        [key]: "",
      }));
    }
  };

  const toggle = (option: string) => {
    setHelp((previous) =>
      previous.includes(option)
        ? previous.filter((item) => item !== option)
        : [...previous, option]
    );
  };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = schema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.errors.forEach((error) => {
        const field = error.path[0];

        if (field) {
          fieldErrors[String(field)] = error.message;
        }
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...result.data,
          help,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.error ||
          "Kunde inte skicka meddelandet. Försök igen senare."
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Inquiry submission error:", error);

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Något gick fel när meddelandet skulle skickas. Försök igen eller kontakta oss via e-post."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-border/50 bg-card px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary";

  return (
    <section className="section-padding side-page-top">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-widest text-primary">
            Formulär
          </p>

          <h1 className="text-3xl font-display md:text-5xl">
            {form.subject || (
              <>
                Skicka en{" "}
                <span className="text-gradient-gold">förfrågan</span>
              </>
            )}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {submitted ? (
            <div className="rounded-2xl border border-primary/30 bg-card p-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-8 w-8 text-primary" />
              </div>

              <h2 className="mb-2 text-xl font-display font-semibold">
                Tack för ditt meddelande!
              </h2>

              <p className="text-muted-foreground">
                Vi har tagit emot din förfrågan och återkommer så snart vi kan.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5" noValidate>
              {[
                {
                  key: "name" as const,
                  label: "Namn",
                  type: "text",
                  autoComplete: "name",
                },
                {
                  key: "email" as const,
                  label: "E-post",
                  type: "email",
                  autoComplete: "email",
                },
                {
                  key: "subject" as const,
                  label: "Ämne",
                  type: "text",
                  autoComplete: "off",
                },
              ].map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={field.key}
                    className="mb-1.5 block text-sm font-medium"
                  >
                    {field.label} *
                  </label>

                  <input
                    id={field.key}
                    name={field.key}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    value={form[field.key]}
                    onChange={(event) =>
                      change(field.key, event.target.value)
                    }
                    aria-invalid={Boolean(errors[field.key])}
                    aria-describedby={
                      errors[field.key]
                        ? `${field.key}-error`
                        : undefined
                    }
                    className={inputCls}
                  />

                  {errors[field.key] && (
                    <p
                      id={`${field.key}-error`}
                      className="mt-1 text-xs text-destructive"
                      role="alert"
                    >
                      {errors[field.key]}
                    </p>
                  )}
                </div>
              ))}

              <fieldset>
                <legend className="mb-3 block text-sm font-medium">
                  Vad vill du ha hjälp med?
                </legend>

                <div className="grid gap-3 sm:grid-cols-2">
                  {helpOptions.map((option) => {
                    const selected = help.includes(option);

                    return (
                      <label
                        key={option}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition-colors ${selected
                            ? "border-primary bg-primary/10"
                            : "border-border/50 bg-card hover:border-primary/30"
                          }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={selected}
                          onChange={() => toggle(option)}
                        />

                        <span
                          className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded ${selected
                              ? "bg-primary"
                              : "border border-border"
                            }`}
                        >
                          {selected && (
                            <Check className="h-3 w-3 text-primary-foreground" />
                          )}
                        </span>

                        <span className="text-sm font-medium">
                          {option}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Meddelande *
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  value={form.message}
                  onChange={(event) =>
                    change("message", event.target.value)
                  }
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`${inputCls} resize-none`}
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-xs text-destructive"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {submitError && (
                <p
                  className="rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
                  role="alert"
                >
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-gold py-4 font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Skickar..." : "Skicka meddelande"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}