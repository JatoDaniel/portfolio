import { useState } from "react";
import {
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import headerbackground from "./assets/images/header background.jpg";
import KingsMassage from "./assets/images/Kings Massage.jpg";
import CoupleMassage from "./assets/images/Couple-Massage.jpg";
import SwedishMassage from "./assets/images/Swedish-Massage.jpg";
import AromatherapyMassage from "./assets/images/Aromatherapy-Massage.jpg";
import DeepTissueMassage from "./assets/images/Deep-Tissue-Massage.jpg";
import Bodyscrub from "./assets/images/Body scrub & Sauna Steam.jpg";

function App() {
  // Dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // WhatsApp booking
  const whatsappLink = "https://wa.me/2348061118674";

  // Services
  const services = [
    {
      image: KingsMassage,
      title: "Kings Massage",
      description:
        "Experience our signature 4-hands massage performed by two skilled therapists working in perfect harmony. Choose any massage style for this premium treatment.",
    },
    {
      image: CoupleMassage,
      title: "Couple Massage",
      description:
        "Share a relaxing experience with your loved one. Enjoy a massage of your choice together in the same room on separate massage beds.",
    },
    {
      image: SwedishMassage,
      title: "Swedish Massage",
      description:
        "Our classic relaxation massage reduces stress, improves blood circulation, and relieves muscle pain. Perfect for escaping the stress of Lagos life.",
    },
    {
      image: AromatherapyMassage,
      title: "Aromatherapy Massage",
      description:
        "Enhance your relaxation with aromatic candles and essential oils that promote stress reduction and deep relaxation.",
    },
    {
      image: DeepTissueMassage,
      title: "Deep Tissue Massage",
      description:
        "Target deep muscle tension with precisely applied pressure. Alleviate chronic pain, improve mobility, and enhance blood circulation.",
    },
    {
      image: Bodyscrub,
      title: "Body Scrub & Sauna Steam",
      description:
        "Remove dead skin cells, brighten your complexion, and improve moisture retention. Enhance your skin's natural beauty and product absorption.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gray-950 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* ================= HEADER ================= */}
      <header
        className={`sticky top-0 z-50 border-b shadow-md backdrop-blur-md ${
          darkMode
            ? "border-gray-800 bg-gray-950/95"
            : "border-gray-200 bg-white/95"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">

          {/* Logo / Business Name */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold leading-tight text-[#D4AF37] sm:text-3xl lg:text-4xl">
              Prestige Pampering
            </h1>

            <p
              className={`text-sm font-medium sm:text-base ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Spa • Beauty Center • Academy
            </p>
          </div>

          {/* Header Buttons */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#D4AF37] px-4 py-2.5 text-sm font-bold text-white transition duration-300 hover:bg-[#C59B27] sm:px-6 sm:py-3 sm:text-base"
            >
              BOOK NOW
            </a>

            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 font-semibold transition ${
                darkMode
                  ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
              <span className="hidden sm:inline">
                {darkMode ? "Light" : "Dark"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative flex min-h-[550px] items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-20 sm:min-h-[600px] lg:min-h-[700px]"
        style={{
          backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.65)
          ), url("${headerbackground}")`,
        }}
      >
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-3 text-lg font-medium uppercase tracking-[0.3em] text-[#D4AF37] sm:text-xl">
            Welcome to
          </p>

          <h2 className="text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Experience
          </h2>

          <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ultimate Relaxation
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg lg:text-xl">
            Rejuvenate your body and mind with our premium spa treatments
            tailored to your needs.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-[#D4AF37] px-7 py-3.5 text-base font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-[#C59B27] sm:px-10 sm:py-4 sm:text-lg"
          >
            BOOK YOUR TREATMENT
          </a>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] sm:text-base">
            What We Offer
          </p>

          <h2
            className={`text-3xl font-bold sm:text-4xl lg:text-5xl ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Our Premium Services
          </h2>

          <p
            className={`mt-4 text-base sm:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Discover the perfect treatment for your wellness journey.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              darkMode={darkMode}
            />
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section
        className={`px-4 py-16 text-center sm:px-6 lg:px-8 ${
          darkMode ? "bg-gray-900" : "bg-[#faf8f2]"
        }`}
      >
        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Relax?
          </h2>

          <p
            className={`mt-4 text-base sm:text-lg ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Treat yourself to a premium spa experience. Book your appointment
            today.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-lg bg-[#D4AF37] px-8 py-3.5 font-bold text-white transition hover:bg-[#C59B27]"
          >
            BOOK NOW ON WHATSAPP
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className={`px-4 py-10 text-center ${
          darkMode ? "bg-gray-950" : "bg-gray-900"
        }`}
      >
        <h2 className="text-2xl font-bold text-[#D4AF37]">
          Prestige Pampering
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Spa • Beauty Center • Academy
        </p>

        <p className="mt-5 text-sm text-gray-500">
          © {new Date().getFullYear()} Prestige Pampering Spa. All rights
          reserved.
        </p>
      </footer>

      {/* ================= FLOATING SOCIAL BUTTONS ================= */}
      <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3">

        <a
          href="https://www.tiktok.com/@prestigepampering_spa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-xl text-white shadow-lg transition hover:scale-110"
        >
          <FaTiktok />
        </a>

        <a
          href="https://www.instagram.com/prestigepampering_spa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-xl text-pink-500 shadow-lg transition hover:scale-110"
        >
          <FaInstagram />
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-xl text-green-500 shadow-lg transition hover:scale-110"
        >
          <FaWhatsapp />
        </a>

      </div>
    </div>
  );
}

/* ================= SERVICE CARD ================= */

function ServiceCard({
  image,
  title,
  description,
  darkMode,
}) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
        darkMode
          ? "border-gray-800 bg-gray-900"
          : "border-gray-200 bg-white"
      }`}
    >
      {/* Image */}
      <div className="h-64 overflow-hidden sm:h-72">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className={`text-xl font-bold sm:text-2xl ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        <div className="my-3 h-1 w-12 rounded bg-[#D4AF37]" />

        <p
          className={`text-sm leading-7 sm:text-base ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        <a
          href="https://wa.me/2349061501911"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block font-semibold text-[#D4AF37] transition hover:text-[#C59B27]"
        >
          Book this treatment →
        </a>
      </div>
    </article>
  );
}

export default App;