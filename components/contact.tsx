"use client";

import React from "react";
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <section
      ref={ref}
      id="contact"
      aria-labelledby="contact-heading"
      className="page py-24 md:py-32 scroll-mt-24"
    >
      <SectionHeading index="04" eyebrow="Say hello">
        <span id="contact-heading">
          The door is open.
        </span>
      </SectionHeading>

      <div className="grid grid-cols-12 gap-6 md:gap-10 rule-top pt-12 md:pt-16">
        <div className="col-span-12 md:col-span-5">
          <p className="measure text-lg leading-relaxed text-ink-2 mb-10">
            For app builds, engineering collaborations, or quiet coffees in
            Ankara — send a note. I read everything.
          </p>

          <dl className="flex flex-col gap-5 label tabular">
            <div className="grid grid-cols-[4.5rem_1fr] gap-x-4 items-baseline">
              <dt className="text-ink-3">Email</dt>
              <dd>
                <a
                  href="mailto:ali.a.mardan@gmail.com"
                  className="link-underline normal-case tracking-normal text-base"
                >
                  ali.a.mardan@gmail.com
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[4.5rem_1fr] gap-x-4 items-baseline">
              <dt className="text-ink-3">Phone</dt>
              <dd>
                <a
                  href="tel:+905342038326"
                  className="link-underline normal-case tracking-normal text-base"
                >
                  +90 534 203 83 26
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[4.5rem_1fr] gap-x-4 items-baseline">
              <dt className="text-ink-3">Place</dt>
              <dd className="text-ink-2 normal-case tracking-normal text-base">
                Ankara, Türkiye
              </dd>
            </div>
            <div className="grid grid-cols-[4.5rem_1fr] gap-x-4 items-baseline">
              <dt className="text-ink-3">Hours</dt>
              <dd className="text-ink-2 normal-case tracking-normal text-base">
                Mon – Fri, 09:00 – 19:00 UTC+3
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex items-center gap-6 label tabular">
            <a
              href="https://github.com/Alifatlawi"
              target="_blank"
              rel="noopener noreferrer"
              className="link-reveal py-2 -my-2 inline-flex items-center"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alfatlawi/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-reveal py-2 -my-2 inline-flex items-center"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <form
          className="col-span-12 md:col-span-7"
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Message sent. I'll get back to you.");
          }}
        >
          <fieldset className="flex flex-col gap-8">
            <legend className="sr-only">Contact form</legend>

            <label className="flex flex-col gap-2">
              <span className="label tabular text-ink-3">Your email</span>
              <input
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="you@studio.com"
                className="bg-transparent border-0 border-b border-rule px-0 py-3 text-lg text-ink placeholder:text-muted focus:outline-none focus:border-b-2 focus:border-accent transition-[border-color,border-bottom-width] duration-base ease-out-quart"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="label tabular text-ink-3">Message</span>
              <textarea
                name="message"
                required
                maxLength={5000}
                rows={6}
                placeholder="Tell me about the idea, the timeline, or just say hi."
                className="bg-transparent border-0 border-b border-rule px-0 py-3 text-lg text-ink placeholder:text-muted focus:outline-none focus:border-b-2 focus:border-accent transition-[border-color,border-bottom-width] duration-base ease-out-quart resize-none"
              />
            </label>

            <div className="flex items-center justify-between gap-6 pt-2">
              <p className="label tabular text-ink-3">
                Replies within 24 hrs (on weekdays)
              </p>
              <SubmitBtn />
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
