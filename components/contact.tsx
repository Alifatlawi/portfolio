"use client";

import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import SectionHead from "./section-head";
import SubmitBtn from "./submit-btn";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { ArrowUpRight } from "./icons";

const details = [
  { term: "Email", value: "ali.a.mardan@gmail.com", href: "mailto:ali.a.mardan@gmail.com" },
  { term: "Phone", value: "+90 534 203 83 26", href: "tel:+905342038326" },
  { term: "Place", value: "Ankara, Türkiye" },
  { term: "Hours", value: "Mon – Fri, 09:00 – 19:00 UTC+3" },
];

const fieldClass =
  "w-full bg-transparent border-0 border-b border-field-ink-2 px-0 py-3 text-lg text-field-ink placeholder:text-field-ink-2 focus:outline-none focus-visible:outline-none focus:border-saffron focus:shadow-[0_1px_0_0_var(--saffron)] transition-[border-color,box-shadow] duration-base ease-out-quart";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  // Persistent live regions: screen readers announce text written into an
  // existing region far more reliably than a toast inserted already filled.
  const [status, setStatus] = useState("");
  const [errorText, setErrorText] = useState("");

  const fail = (reason?: string) => {
    const message = `Couldn't send${reason ? `: ${reason}` : ""}. Try again, or email me directly.`;
    setStatus("");
    setErrorText(message);
    toast.error(message, { duration: 8000 });
  };

  return (
    <section
      ref={ref}
      id="contact"
      aria-labelledby="contact-heading"
      className="field pt-24 md:pt-36 pb-20 md:pb-28"
    >
      <div className="page">
        <SectionHead id="contact-heading" titleAr="تواصل" onField>
          The door is open.
        </SectionHead>

        <div className="grid grid-cols-12 gap-x-[var(--gutter)] gap-y-14 pt-10 md:pt-14">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-xl leading-[1.55] text-field-ink max-w-[34ch]">
              For app builds, engineering collaborations, or quiet coffees in
              Ankara — send a note. I read everything.
            </p>

            <dl className="mt-10 grid grid-cols-[5rem_minmax(0,1fr)] text-[0.9375rem]">
              {details.map((d) => (
                <div key={d.term} className="contents">
                  <dt className="label text-field-ink-2 py-3 border-t border-field-rule">
                    {d.term}
                  </dt>
                  <dd className="py-3 border-t border-field-rule text-field-ink tabular">
                    {d.href ? (
                      <a href={d.href} className="link">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-8 flex items-center gap-6 text-sm">
              <li>
                <a
                  href="https://github.com/Alifatlawi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex items-center gap-1.5 py-2.5"
                >
                  GitHub
                  <ArrowUpRight size={13} />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/alfatlawi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex items-center gap-1.5 py-2.5"
                >
                  LinkedIn
                  <ArrowUpRight size={13} />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>

          <form
            ref={formRef}
            className="col-span-12 lg:col-span-6 lg:col-start-7"
            // Set in the discrete submit event so it is committed (and
            // announced) before the request starts.
            onSubmit={() => {
              setErrorText("");
              setStatus("Sending your message…");
            }}
            action={async (formData) => {
              // A failed request (offline, a stale tab after a deploy, a
              // server error) must never take the page down or lose the text.
              let result: Awaited<ReturnType<typeof sendEmail>> | undefined;
              try {
                result = await sendEmail(formData);
              } catch {
                fail();
                return;
              }
              if (!result || result.error) {
                fail(result?.error);
                return;
              }
              formRef.current?.reset();
              setStatus("Message sent. I'll get back to you.");
              toast.success("Message sent. I'll get back to you.");
            }}
          >
            <p role="status" className="sr-only">
              {status}
            </p>
            <p role="alert" className="sr-only">
              {errorText}
            </p>
            <fieldset className="flex flex-col gap-9">
              <legend className="sr-only">Send a message</legend>

              <label className="flex flex-col gap-1">
                <span className="label text-field-ink-2">Your email</span>
                <input
                  name="senderEmail"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={500}
                  placeholder="you@studio.com"
                  className={fieldClass}
                />
              </label>

              <label className="flex flex-col gap-1">
                <span className="label text-field-ink-2">Message</span>
                <textarea
                  name="message"
                  required
                  maxLength={5000}
                  rows={6}
                  placeholder="Tell me about the idea, the timeline, or just say hi."
                  className={`${fieldClass} resize-none`}
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-6 pt-1">
                <p className="label text-field-ink-2">
                  Replies within 24 hrs (on weekdays)
                </p>
                <SubmitBtn />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}
