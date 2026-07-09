import { ArrowRight, Mail, MapPin, Send } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { LandingLayout } from "@/app/layouts";
import {
  Badge3D,
  Container,
  DiscoverBento,
  GlassCard,
  OrbitField,
  OrbitInput,
  OrbitTextarea,
  SectionHeading,
  SplitBox,
  type DiscoverCard,
} from "@/components/orbit";
import communityImage from "@/assets/community.jpg";
import { heroBadge, socialProofDots } from "@/features/landing/data/hero";

export default function App() {
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const [preloaderMounted, setPreloaderMounted] = useState(true);

  useEffect(() => {
    const finishLoading = () => {
      window.setTimeout(() => setPreloaderVisible(false), 650);
    };

    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    window.addEventListener("load", finishLoading, { once: true });
    return () => window.removeEventListener("load", finishLoading);
  }, []);

  useEffect(() => {
    if (!preloaderVisible) {
      const timeout = window.setTimeout(() => setPreloaderMounted(false), 520);
      return () => window.clearTimeout(timeout);
    }
  }, [preloaderVisible]);

  return (
    <LandingLayout>
      {preloaderMounted ? <Preloader exiting={!preloaderVisible} /> : null}
      <main className="pt-20" aria-busy={preloaderVisible}>
        <Hero />
        <AboutSection />
        <Discover />
        <PartnersSection />
        <ContactSection />
      </main>
    </LandingLayout>
  );
}

const DISCOVER_CARDS = [
  {
    tag: "Hackathon",
    tone: "violet",
    title: "Fintech hackathon komandası",
    description:
      "Ödəniş, risk və data ideyaları üçün komanda qur, mentorlarla sprintə gir və prototipini səhnəyə çıxar.",
    meta: { icon: "date", label: "Dec 15–17" },
    cta: "Səyahətə başla",
    image: communityImage,
    featured: true,
  },
  {
    tag: "Networking",
    tone: "cyan",
    title: "Open Office Night at PASHA Tech",
    description:
      "Founderlar, product komandaları və tələbələr üçün sakit, fokuslu tanışlıq gecəsi.",
    meta: { icon: "time", label: "19:00 · Oct 24" },
    cta: "Qoşul",
  },
  {
    tag: "Campus",
    tone: "mint",
    title: "Öz universitetini seç və sosyallaş",
    description:
      "Campus circle-larda layihə partnyoru tap, sual ver və eyni maraqlı insanlarla tanış ol.",
    meta: { icon: "live", label: "1.2k active" },
    cta: "Dairəyə bax",
  },
  {
    tag: "Bootcamp",
    tone: "amber",
    title: "AzSoftware-də təlim proqramı",
    description:
      "Real məhsul tapşırıqları, mentor feedback-i və junior roluna hazırlıq üçün intensiv proqram.",
    meta: { icon: "deadline", label: "Deadline: Nov 1" },
    cta: "Ətraflı",
  },
  {
    tag: "Startup role",
    tone: "coral",
    title: "Səni gözləyən startap komandaları",
    description: "Frontend, design və growth rolları açıqdır. Uyğun komandaları bir baxışda tap.",
    meta: { icon: "live", label: "Urgent" },
    cta: "Tələs!",
  },
] satisfies DiscoverCard[];

const ABOUT_BLOCKS = [
  {
    index: "01",
    eyebrow: "Haqqımızda",
    title: "Gənclərin ideyadan hərəkətə keçdiyi vahid məkan.",
    body: "DevJourney gənc qurucular, tələbələr, mentorlar və universitet icmaları üçün vahid koordinasiya məkanıdır. Burada ideya sadəcə paylaşılmır, düzgün insanlarla böyüyür.",
    chips: ["Komanda", "Mentorluq", "İcma"],
  },
  {
    index: "02",
    eyebrow: "Vizyonumuz",
    title: "İstedadın təsadüfdən yox, sistemli əlaqələrdən böyüdüyü ekosistem.",
    body: "Biz gələcəyin istedadlarının sistemli şəkildə formalaşdığı bir mühit qurmaq istəyirik. Bir tələbənin ideyası dəftərdə qalan qeyddən ibarət olmasın; komanda tapsın, inkişaf etsin, dəstək qazansın və real dünyada qarşılıq görsün.",
    chips: ["Event", "Kurs", "Karyera"],
  },
  {
    index: "03",
    eyebrow: "Nəyi həll edirik?",
    title: "Fürsətləri itən mesajlardan çıxarıb aydın marşrutlara çeviririk.",
    body: "DevJourney kimlə işləmək, harada öyrənmək və hansı addımı atmaq suallarını bir məhsul təcrübəsində cavablayır. Ayrı-ayrı kanallar əvəzinə, tələbə, mentor, universitet və şirkət eyni inkişaf xəttində görüşür.",
    chips: ["İdeya bankı", "Networkinglər", "Korporativ"],
  },
] as const;

const PARTNER_LOGOS = [
  "AzTU",
  "PASHA Tech",
  "SABAH",
  "Code Academy",
  "SUP VC",
  "AzSoftware",
  "Tech.az",
  "Baku ID",
] as const;

type ContactType = "individual" | "company";

const contactTypes = [
  { value: "individual", label: "Fiziki Şəxs" },
  { value: "company", label: "Şirkət" },
] satisfies { value: ContactType; label: string }[];

const contactFields = {
  individual: [
    {
      name: "gmail",
      label: "Gmail",
      type: "email",
      autoComplete: "email",
      placeholder: "tunar.novruzzada@gmail.com",
    },
    {
      name: "fullName",
      label: "Surname and Name",
      type: "text",
      autoComplete: "name",
      placeholder: "Tunar Novruzzada",
    },
  ],
  company: [
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      autoComplete: "organization",
      placeholder: "PASHA Tech",
    },
    {
      name: "role",
      label: "Your Role inside the company",
      type: "text",
      placeholder: "Innovation Program Manager",
    },
    {
      name: "industry",
      label: "Company Working Field / Industry sector",
      type: "text",
      placeholder: "Fintech və digital products",
    },
    {
      name: "companyContact",
      label: "Company Mail or Phone",
      type: "text",
      placeholder: "partnerships@pashatech.az / +994 50 123 45 67",
    },
  ],
} as const;

const contactMessagePlaceholders: Record<ContactType, string> = {
  individual: "İdeya bankı xüsusiyyəti bizim universitətə gəlsin.",
  company: "Şirkət olaraq tələbələr üçün bootcamp və networking əməkdaşlığı qurmaq istəyirik.",
};

function Preloader({ exiting }: { exiting: boolean }) {
  return (
    <div
      className={`devjourney-preloader ${exiting ? "devjourney-preloader--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="DevJourney is loading"
    >
      <div className="devjourney-preloader__mark">
        <img src="./assets/icon/logo.svg" alt="" aria-hidden="true" width={54} height={54} />
      </div>
      <p className="font-display text-lg font-semibold text-[#35374B]">DevJourney</p>
      <span className="devjourney-preloader__bar" aria-hidden="true" />
    </div>
  );
}

function Hero() {
  return (
    <Container
      id="home"
      as="section"
      width="wide"
      padding="tight"
      className="relative grid scroll-mt-28 items-center gap-8 pb-20 pt-2 sm:pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-14"
    >
      <div className="image-part order-1 relative flex min-h-[540px] items-center justify-center lg:order-2 lg:min-h-[620px]">
        <Badge3D {...heroBadge} className="-mt-8 sm:-mt-10 lg:-mt-12" />
      </div>

      <div className="text-part order-2 w-full max-w-3xl text-center lg:order-1 lg:text-left">
        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-normal text-[#35374B] sm:text-5xl md:text-6xl">
          Bir ideya ilə başla, bir ekosistemlə böyü
        </h1>

        <p className="mx-auto mt-6 w-full max-w-2xl text-lg font-medium leading-8 text-[#705DF2] sm:text-xl lg:mx-0">
          Devjourney sənin üçün komanda, mentorluq, event, kurs, university support və real karyera
          bağlantılarını bir platformada birləşdirir.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
          <a
            href="#contact"
            className="group inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-[8px] bg-[#35374B] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_10px_1px_rgba(0,0,0,0.25)] transition duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#124076] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#705DF2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EBEFF5] active:translate-y-0 active:scale-[0.99] sm:w-auto"
          >
            Dəvam edin
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 text-sm font-medium text-[#35374B]/75 sm:flex-row sm:gap-4 lg:justify-start">
          <div className="flex -space-x-3" aria-hidden="true">
            {socialProofDots.map((colorClass, index) => (
              <span
                key={colorClass}
                className={`grid h-9 w-9 place-items-center rounded-full border-2 border-[#EBEFF5] text-[10px] font-semibold text-white shadow-sm ${colorClass}`}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <span>Vahid platforma olaraq bir çox özəlliklər, tezliklə...</span>
        </div>
      </div>
    </Container>
  );
}

function AboutSection() {
  return (
    <Container id="about" as="section" width="wide" padding="tight" className="scroll-mt-28 py-20">
      <SectionHeading
        eyebrow="Haqqımızda"
        title={
          <>
            DevJourney <span className="brand-gradient-text">niyə var?</span>
          </>
        }
        description="DevJourney sadəcə bir veb platforma deyil. Bu, ideyası olan, amma doğru insanları, doğru mühiti və doğru fürsəti axtaran gənclər üçün qurulmuş canlı ekosistemdir. Burada tələbə, gənc developer, designer, startap komandası, mentor, universitet və şirkət eyni məkanda qarşılaşır. Məqsəd yalnız insanları bir-birinə bağlamaq deyil, onları hərəkətə keçirməkdir."
      />

      <div className="mt-10 space-y-5 lg:space-y-7">
        {ABOUT_BLOCKS.map((block, index) => (
          <SplitBox
            key={block.index}
            index={block.index}
            eyebrow={block.eyebrow}
            title={block.title}
            tone={index === 0 ? "violet" : index === 1 ? "amber" : "mint"}
          >
            <p className="text-base font-medium leading-8 text-[#35374B]/82">{block.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {block.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#FBA834]/35 bg-[#FBA834]/10 px-3 py-1 text-xs font-semibold text-[#B153E0]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </SplitBox>
        ))}
      </div>
    </Container>
  );
}

function Discover() {
  return (
    <Container
      id="discover"
      as="section"
      width="wide"
      padding="tight"
      className="scroll-mt-28 py-20"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Kəşf et"
          title="Fürsətlər, komandalar, insanlar bir platformada."
        />
        <a
          href="#contact"
          className="hidden cursor-pointer items-center gap-2 self-start rounded-lg border border-glass-border bg-glass px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-glass-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex"
        >
          Əlaqəyə keç
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <DiscoverBento cards={DISCOVER_CARDS} className="mt-12" />
    </Container>
  );
}

function PartnersSection() {
  const marqueeItems = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <Container
      id="partners"
      as="section"
      width="wide"
      padding="tight"
      className="scroll-mt-28 py-20"
    >
      <GlassCard
        variant="strong"
        padding="none"
        className="overflow-hidden border-white/45 bg-white/45 p-6 sm:p-8 lg:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.7fr] lg:items-center">
          <SectionHeading
            eyebrow="Partnyorlar"
            title={
              <>
                Ekosistem tək qurulmur,{" "}
                <span className="brand-gradient-text">birlikdə böyüyür.</span>
              </>
            }
            description="DevJourney universitetlər, mentorlar və karyera tərəfdaşları üçün birləşdirici məhsul qatıdır."
          />

          <div className="partner-marquee rounded-2xl border border-white/45 bg-white/35 p-3">
            <div className="partner-marquee__track" aria-label="DevJourney partners">
              {marqueeItems.map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="grid h-24 w-[190px] shrink-0 place-items-center rounded-2xl border border-white/50 bg-white/55 px-5 text-center font-display text-lg font-semibold text-[#35374B] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur"
                  aria-hidden={index >= PARTNER_LOGOS.length}
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </Container>
  );
}

function ContactSection() {
  const [contactType, setContactType] = useState<ContactType>("individual");
  const activeFields = contactFields[contactType];

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Container
      id="contact"
      as="section"
      width="wide"
      padding="tight"
      className="scroll-mt-28 pb-24 pt-20"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Əlaqə"
            title={
              <>
                DevJourney ilə <span className="brand-gradient-text">başlamağa hazırsan?</span>
              </>
            }
            description="İradlara və ya əməkdaşlıq təkliflərinə açığıq.. :)"
          />
          <div className="mt-8 space-y-3 text-sm font-medium text-[#35374B]/75">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#B153E0]" aria-hidden="true" />
              devjourney.contact@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#B153E0]" aria-hidden="true" />
              Baku, Azerbaijan, Azerbaijan Technical university
            </p>
          </div>
        </div>

        <GlassCard className="border-white/45 bg-white/50">
          <div className="mb-5 grid grid-cols-2 gap-2 rounded-xl border border-white/55 bg-white/45 p-1">
            {contactTypes.map((type) => {
              const active = contactType === type.value;
              return (
                <button
                  key={type.value}
                  type="button"
                  className={`min-h-11 cursor-pointer rounded-lg px-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#705DF2] ${
                    active
                      ? "bg-[#35374B] text-white shadow-[0_4px_10px_1px_rgba(0,0,0,0.18)]"
                      : "text-[#35374B]/70 hover:bg-white/55 hover:text-[#35374B]"
                  }`}
                  aria-pressed={active}
                  onClick={() => setContactType(type.value)}
                >
                  {type.label}
                </button>
              );
            })}
          </div>

          <form
            className="grid gap-4"
            aria-label="Contact DevJourney"
            onSubmit={handleContactSubmit}
          >
            {activeFields.map((field) => (
              <OrbitField key={field.name} label={field.label} className="text-[#35374B]">
                <OrbitInput
                  required
                  type={field.type}
                  name={field.name}
                  autoComplete={"autoComplete" in field ? field.autoComplete : undefined}
                  placeholder={field.placeholder}
                  className="min-h-12 border-white/55 bg-white/65 text-[#35374B] placeholder:text-[#35374B]/42 invalid:border-[#FF8080] focus:border-[#705DF2] focus:ring-[#705DF2]/25"
                />
              </OrbitField>
            ))}

            <OrbitField label="Your Message" className="text-[#35374B]">
              <OrbitTextarea
                required
                name="message"
                placeholder={contactMessagePlaceholders[contactType]}
                className="min-h-32 resize-none border-white/55 bg-white/65 text-[#35374B] placeholder:text-[#35374B]/42 invalid:border-[#FF8080] focus:border-[#705DF2] focus:ring-[#705DF2]/25"
              />
            </OrbitField>

            <button
              type="submit"
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-[8px] bg-[#35374B] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_10px_1px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-[#124076] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#705DF2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EBEFF5]"
            >
              Send message
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </GlassCard>
      </div>
    </Container>
  );
}
