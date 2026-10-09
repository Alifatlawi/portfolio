import Link from "next/link";
import clsx from "clsx";
import {
  APP_STORE_URL,
  SUPPORT_EMAIL,
  TERMS_URL,
  localize,
  murafaContent,
  type MurafaCopy,
  type MurafaLang,
} from "@/lib/murafa";
import { murafaPath } from "./murafa-document";
import Faq from "./faq";
import Icon from "./icon";
import Logo from "./logo";

// Note: the portfolio's tailwind config overrides text-xs…text-4xl with its own
// CSS variables, which aren't defined here. Use arbitrary sizes (text-[15px]).

const SESSION_TONE = {
  attended: "text-murafa-green bg-murafa-mint",
  postponed: "text-murafa-amber bg-murafa-amber-soft",
  upcoming: "text-murafa-ink bg-murafa-stone",
} as const;

const FEATURE_TONE = {
  green: "text-murafa-green bg-murafa-mint",
  amber: "text-murafa-amber bg-murafa-amber-soft",
  ink: "text-murafa-ink bg-murafa-stone",
} as const;

const NOTE_TONE = {
  attended: "text-murafa-green",
  postponed: "text-murafa-amber",
  upcoming: "text-murafa-ink",
} as const;

const section = "mx-auto max-w-[1160px] px-6 scroll-mt-20";
const h2 = "m-0 text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.3] m-balance";

export default function MurafaSite({ lang }: { lang: MurafaLang }) {
  const c = localize(murafaContent, lang);
  const t = c.t;
  const other: MurafaLang = lang === "ar" ? "en" : "ar";

  return (
    <div className="min-h-screen text-murafa-ink">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-murafa-ink focus:px-4 focus:py-2 focus:text-white"
      >
        {lang === "ar" ? "تخطَّ إلى المحتوى" : "Skip to content"}
      </a>

      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-murafa-rule bg-murafa-paper/[.92] backdrop-blur-md">
        <div className="mx-auto flex max-w-[1160px] items-center gap-3 px-4 py-3.5 sm:gap-6 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 text-murafa-ink">
            <Logo size={36} />
            <span className="text-[21px] font-bold">{t.name}</span>
          </a>
          <nav
            aria-label={lang === "ar" ? "الأقسام" : "Sections"}
            className="hidden flex-1 gap-[22px] text-[15px] font-medium md:flex"
          >
            {[
              ["#features", t.navF],
              ["#pricing", t.navP],
              ["#privacy", t.navS],
              ["#faq", t.navQ],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-murafa-ink-2 transition-colors hover:text-murafa-green-deep"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="ms-auto flex items-center gap-2 whitespace-nowrap sm:gap-2.5 md:ms-0">
            <Link
              href={murafaPath(other)}
              hrefLang={other}
              lang={other}
              className="rounded-full border border-murafa-border px-3 py-[7px] sm:px-3.5 text-[14px] font-semibold text-murafa-ink transition-colors hover:border-murafa-ink-3"
            >
              {t.switchTo}
            </Link>
            <a
              href="#download"
              className="rounded-full bg-murafa-green px-3.5 py-2 text-[14px] sm:px-4 font-semibold text-white transition-colors hover:bg-murafa-green-deep"
            >
              {t.download}
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          id="top"
          className={clsx(
            section,
            "grid items-center gap-14 pb-10 pt-12 md:pt-[72px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))]"
          )}
        >
          <div className="flex flex-col gap-[22px]">
            <p className="m-0 text-[15px] font-semibold text-murafa-green">
              {t.eyebrow}
            </p>
            <h1 className="m-0 text-[clamp(38px,5.4vw,62px)] font-bold leading-[1.18] m-balance">
              {t.h1}
            </h1>
            <p className="m-0 max-w-[520px] text-[19px] leading-[1.7] text-murafa-ink-2 m-pretty">
              {t.lead}
            </p>
            <div
              id="download"
              className="mt-1.5 flex scroll-mt-24 flex-wrap items-center gap-3.5"
            >
              <AppStoreBadge small={APP_STORE_URL ? t.dlSmall : t.dlSoonSmall} />
              <span className="text-[14px] text-murafa-ink-3">{t.dlNote}</span>
            </div>
          </div>
          <div className="flex justify-center">
            <PhoneMock c={c} />
          </div>
        </section>

        {/* Features */}
        <section id="features" className={clsx(section, "py-[72px]")}>
          <h2 className={clsx(h2, "mb-3.5")}>{t.fH}</h2>
          <p className="m-0 mb-11 max-w-[640px] text-[18px] leading-[1.7] text-murafa-ink-2">
            {t.fLead}
          </p>
          <ul className="grid list-none gap-5 p-0 grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))]">
            {c.features.map((f) => (
              <li
                key={f.h}
                className="flex flex-col gap-3 rounded-[22px] bg-white p-[30px]"
              >
                <div
                  className={clsx(
                    "flex h-[50px] w-[50px] items-center justify-center rounded-[14px]",
                    FEATURE_TONE[f.tone]
                  )}
                >
                  <Icon name={f.icon} className="text-[26px]" />
                </div>
                <h3 className="m-0 mt-2 text-[21px] font-bold">{f.h}</h3>
                <p className="m-0 text-[16px] leading-[1.7] text-murafa-ink-2">
                  {f.p}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Postponements */}
        <section className="bg-murafa-green text-white">
          <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-6 py-20 grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))]">
            <div className="flex flex-col gap-4">
              <p className="m-0 text-[15px] font-semibold text-murafa-gold-text">
                {t.pEyebrow}
              </p>
              <h2 className={h2}>{t.pH}</h2>
              <p className="m-0 text-[18px] leading-[1.7] text-white/90">
                {t.pLead}
              </p>
            </div>
            <PostponeMock c={c} />
          </div>
        </section>

        {/* Privacy */}
        <section
          id="privacy"
          className={clsx(
            section,
            "grid items-start gap-12 py-20 grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))]"
          )}
        >
          <div className="flex flex-col gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-murafa-ink text-murafa-teal">
              <Icon name="lock" className="text-[30px]" />
            </div>
            <h2 className={h2}>{t.sH}</h2>
            <p className="m-0 text-[18px] leading-[1.7] text-murafa-ink-2">
              {t.sLead}
            </p>
          </div>
          <ul className="m-0 list-none overflow-hidden rounded-[22px] bg-white p-0">
            {c.privacy.map((p) => (
              <li
                key={p.h}
                className="flex gap-3.5 border-b border-murafa-line px-6 py-5 last:border-b-0"
              >
                <Icon
                  name={p.icon}
                  className="text-[24px] leading-[1.2] text-murafa-green"
                />
                <div>
                  <h3 className="m-0 text-[17px] font-semibold">{p.h}</h3>
                  <p className="m-0 mt-[3px] text-[15px] leading-[1.6] text-murafa-ink-3">
                    {p.p}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 bg-murafa-sand">
          <div className="mx-auto max-w-[1160px] px-6 py-20">
            <h2 className={clsx(h2, "mb-3 text-center")}>{t.prH}</h2>
            <p className="mx-auto mb-11 mt-0 max-w-[600px] text-center text-[18px] leading-[1.7] text-murafa-ink-2">
              {t.prLead}
            </p>
            <ul className="mx-auto grid max-w-[980px] list-none gap-[18px] p-0 grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]">
              {c.plans.map((plan) => (
                <li
                  key={plan.name}
                  className={clsx(
                    "flex flex-col gap-3.5 rounded-[22px] bg-white p-7",
                    plan.badge && "ring-2 ring-inset ring-murafa-green"
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="m-0 text-[19px] font-bold">{plan.name}</h3>
                    {plan.badge ? (
                      <span className="rounded-full bg-murafa-mint px-2.5 py-[3px] text-[12.5px] font-bold text-murafa-green">
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="m-0">
                    <span className="text-[36px] font-bold">{plan.price}</span>{" "}
                    <span className="text-[15px] text-murafa-ink-3">
                      {plan.per}
                    </span>
                  </p>
                  <p className="m-0 min-h-[22px] text-[14px] text-murafa-ink-3">
                    {plan.note}
                  </p>
                  <div className="h-px bg-murafa-line" />
                  <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-[9px] text-[15px] leading-[1.5]"
                      >
                        <Icon
                          name="check"
                          className="text-[19px] leading-[1.3] text-murafa-green"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="mx-auto mb-0 mt-7 max-w-[720px] text-center text-[14px] leading-[1.7] text-murafa-ink-3">
              {t.prFine}
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="mx-auto max-w-[820px] scroll-mt-20 px-6 py-20"
        >
          <h2 className={clsx(h2, "mb-7")}>{t.qH}</h2>
          <Faq items={c.faq} />
        </section>
      </main>

      <footer className="border-t border-murafa-rule">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-5 px-6 py-9 text-[14.5px] text-murafa-ink-3">
          <div className="flex items-center gap-2.5">
            <Logo size={28} />
            <span>{t.copy}</span>
          </div>
          <nav
            aria-label={lang === "ar" ? "روابط" : "Links"}
            className="flex flex-wrap gap-[22px]"
          >
            {[
              ["#privacy", t.privacy],
              [TERMS_URL, t.terms],
              [`mailto:${SUPPORT_EMAIL}`, t.support],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-murafa-green transition-colors hover:text-murafa-green-deep"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}

function AppStoreBadge({ small }: { small: string }) {
  const inner = (
    <>
      <Icon name="phone_iphone" className="text-[28px]" />
      <span className="flex flex-col leading-[1.2]">
        <span className="text-[11.5px] opacity-80">{small}</span>
        <span
          lang="en"
          className="font-['IBM_Plex_Sans',sans-serif] text-[19px] font-semibold"
        >
          App Store
        </span>
      </span>
    </>
  );
  const cls =
    "flex items-center gap-2.5 rounded-xl bg-black px-5 py-2.5 text-white";

  if (!APP_STORE_URL) return <div className={cls}>{inner}</div>;
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(cls, "transition-opacity hover:opacity-90")}
    >
      {inner}
    </a>
  );
}

// Illustrative app screen. Hidden from assistive tech: it's a picture of the app,
// and everything it shows is described in the copy around it.
function PhoneMock({ c }: { c: MurafaCopy }) {
  const t = c.t;
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[330/680] w-[min(330px,calc(100vw-66px))] flex-none overflow-hidden rounded-[50px] bg-murafa-paper shadow-[0_0_0_9px_#151816,0_40px_80px_rgba(20,30,25,.25)]"
    >
      <div
        dir="ltr"
        className="relative flex h-[50px] items-center justify-between pe-7 ps-9 pt-1 font-['IBM_Plex_Sans',-apple-system,sans-serif] text-[14px] font-semibold"
      >
        <span>9:41</span>
        <div className="absolute left-1/2 top-2.5 h-[30px] w-[100px] -translate-x-1/2 rounded-2xl bg-black" />
        <Icon name="signal_cellular_alt" className="text-[16px]" />
      </div>
      <div className="px-3.5 pt-1">
        <div className="text-[11.5px] font-semibold text-murafa-ink-3">
          {t.date}
        </div>
        <div className="text-[28px] font-bold">{t.today}</div>
        <div className="mt-2.5 grid grid-cols-3 gap-[7px]">
          {[
            ["document_scanner", t.qa1, true],
            ["person_add", t.qa2, false],
            ["event", t.qa3, false],
          ].map(([icon, label, primary]) => (
            <div
              key={String(icon)}
              className={clsx(
                "flex h-[62px] flex-col justify-between rounded-xl p-[9px]",
                primary
                  ? "bg-murafa-green text-white"
                  : "bg-white text-murafa-green"
              )}
            >
              <Icon name={String(icon)} className="text-[21px]" />
              <span
                className={clsx(
                  "text-[12px] font-semibold",
                  !primary && "text-murafa-ink"
                )}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <div className="mx-0.5 mb-2 mt-4 text-[17px] font-bold">{t.todayS}</div>
        <div className="flex flex-col gap-[7px]">
          {c.sessions.map((s) => (
            <div
              key={s.client}
              className={clsx(
                "flex gap-[9px] rounded-[13px] bg-white px-[11px] py-2.5",
                s.next && "shadow-[inset_0_0_0_1.5px_#1D5A4C]"
              )}
            >
              <div className="w-[38px] flex-none text-center">
                <div className="text-[15px] font-bold">{s.time}</div>
                <div className="text-[10.5px] font-semibold text-murafa-ink-3">
                  {s.ap}
                </div>
              </div>
              <div className="w-px bg-murafa-rule" />
              <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                <div className="flex items-center justify-between gap-1.5">
                  <span className="truncate text-[11px] text-murafa-ink-3">
                    {s.court}
                  </span>
                  <span
                    className={clsx(
                      "flex-none rounded-full px-[7px] py-0.5 text-[10.5px] font-bold",
                      SESSION_TONE[s.status]
                    )}
                  >
                    {s.chip}
                  </span>
                </div>
                <div className="text-[14px] font-semibold">{s.client}</div>
                <div
                  className={clsx(
                    "text-[11.5px] font-semibold",
                    NOTE_TONE[s.status]
                  )}
                >
                  {s.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PostponeMock({ c }: { c: MurafaCopy }) {
  const t = c.t;
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-[420px] justify-self-center rounded-3xl bg-murafa-paper p-[22px] text-murafa-ink"
    >
      <div className="text-center text-[17px] font-semibold">{t.postT}</div>
      <div className="mx-1 mb-2 mt-[18px] text-[13px] font-semibold text-murafa-ink-3">
        {t.reason}
      </div>
      <div className="flex flex-wrap gap-2">
        {c.reasons.map((r, i) => (
          <span
            key={r}
            className={clsx(
              "rounded-[18px] px-[13px] py-2 text-[14.5px] font-semibold",
              i === 0
                ? "bg-murafa-green text-white"
                : "bg-white text-murafa-ink"
            )}
          >
            {r}
          </span>
        ))}
      </div>
      <div className="mx-1 mb-2 mt-[18px] text-[13px] font-semibold text-murafa-ink-3">
        {t.nextD}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {c.dates.map((d) => (
          <div
            key={d.rel}
            className={clsx(
              "rounded-xl px-3 py-[9px]",
              d.selected
                ? "bg-murafa-mint shadow-[inset_0_0_0_2px_#1D5A4C]"
                : "bg-white"
            )}
          >
            <div className="text-[12px] font-semibold text-murafa-ink-3">
              {d.rel}
            </div>
            <div className="text-[15.5px] font-bold">{d.date}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-[50px] items-center justify-center rounded-[13px] bg-murafa-green text-[16px] font-semibold text-white">
        {t.savePost}
      </div>
    </div>
  );
}
