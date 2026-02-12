"use client";

import { motion } from "motion/react";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // Laad het Tally popup script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Opruimen bij unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center py-20 px-5">
      <div className="flex flex-col items-center justify-center gap-10 w-full max-w-[1500px]">
        {/* Bovenste rij: profielfoto + introductie */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-15 w-full flex-wrap">
          {/* Profielfoto */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          >
            <motion.img
              src="/profielfoto.jpg"
              alt="Profielfoto"
              className="w-[283px] h-[390px] rounded-[50px] object-cover shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />

            {/* Cirkel Hoi */}
            <motion.div
              className="absolute -top-10 -right-10 w-[125px] h-[125px] bg-[#FE26BD] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                type: "spring",
                bounce: 0.5,
              }}
            >
              Hoi
            </motion.div>
          </motion.div>

          {/* Introductie tekstblok */}
          <motion.div
            className="flex-1 min-w-[300px] h-auto bg-gradient-to-br from-[#FFEBF9] to-[#FFE4F2] rounded-xl p-6 md:p-10 text-[#3B0A3E] flex flex-col shadow-lg overflow-hidden"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
              Afstudeerproject: Samen aan een Digitaal Vraagstuk
            </h3>
            <p className="text-base md:text-lg mb-4 leading-relaxed">
              Mijn naam is <span className="font-semibold">Nairobi Goeloe</span>{" "}
              en de laatste fases van mijn HBO-ICT opleiding zijn aangebroken.{" "}
              <span className="font-semibold text-[#FE26BD]">
                In september start ik met mijn afstudeerproject!
              </span>{" "}
              Ter voorbereiding op mijn afstuderen ben ik per direct op zoek
              naar een project waarin ik samen met een opdrachtgever werk aan
              een digitaal eindproduct.
            </p>

            <p className="text-base md:text-lg mb-4 leading-relaxed">
              De projectperiode loopt van{" "}
              <span className="font-semibold">
                23 februari tot en met 23 juni 2026
              </span>
              . Voor dit project werk ik volledig zelfstandig aan een digitaal
              vraagstuk dat door de opdrachtgever wordt aangeleverd. Dit doe ik
              onder begeleiding van twee coaches vanuit mijn opleiding.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Het gaat hierbij niet om een traditionele stage- of werkplek, maar
              om een{" "}
              <span className="font-semibold">
                projectmatige samenwerking rondom een concreet digitaal
                vraagstuk
              </span>
              . Een stage- of werkplek is uiteraard zeer welkom, maar voor dit
              moment niet noodzakelijk.
            </p>
          </motion.div>
        </div>

        {/* Onderste sectie */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Waar ben ik naar op zoek */}
          <motion.div
            className="bg-[#E8C4FF] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 text-[#3B0A3E]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold tracking-tight mb-6">
              Waar ben ik naar op zoek?
            </h4>
            <ul className="space-y-4 text-[15.5px] leading-relaxed text-[#3B0A3E]/90">
              <li>
                Ik werk graag samen met een bedrijf, start-up, stichting of
                organisatie die een digitaal vraagstuk wil laten onderzoeken en
                verbeteren.
              </li>
              <li>
                Mijn focus ligt op{" "}
                <span className="font-bold">UX/UI Design</span>: het verbeteren
                van digitale producten vanuit het perspectief van de gebruiker.
                Daarnaast sta ik ook open voor front-end of softwaregerichte
                opdrachten.
              </li>
            </ul>
          </motion.div>

          {/* 2. Denk bijvoorbeeld aan */}
          <motion.div
            className="bg-[#E8C4FF] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 text-[#3B0A3E]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold tracking-tight mb-6">
              Denk bijvoorbeeld aan...
            </h4>

            <motion.ul
              className="space-y-4 text-[15.5px] leading-relaxed text-[#3B0A3E]/90"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {[
                "Website of app die niet goed werkt of onduidelijk is.",
                "Interne systemen of processen die omslachtig zijn.",
                "Digitale dienstverlening die gebruiksvriendelijker kan.",
                "Idee van start-up of stichting dat nog geen uitgewerkt digitaal ontwerp heeft.",
                "Verbeteringen of uitbreiding van bestaande applicaties.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="pl-2"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }} // subtiele hover beweging
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* 3. Wat kun je van mij verwachten */}
          <motion.div
            className="bg-[#D0A2FF] rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 text-[#3B0A3E]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold tracking-tight mb-6">
              Wat kun je van mij verwachten?
            </h4>

            <motion.ul
              className="space-y-4 text-[15.5px] leading-relaxed text-[#3B0A3E]/90"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08, // subtiele volgorde animatie
                  },
                },
              }}
            >
              {[
                "Gestructureerde en professionele aanpak",
                "Heldere communicatie en duidelijke documentatie",
                "Focus op gebruikers en praktische toepasbaarheid",
                "Professioneel advies gebaseerd op onderzoek en best practices",
                "Projectniveau passend bij een HBO-afstudeertraject",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 pl-1"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4 }} // subtiele hover beweging
                >
                  <span className="text-[#D326FE] font-bold mt-[3px]">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact knop */}
          <motion.button
            className="bg-gradient-to-br from-[#D326FE] to-[#9F1ED9] rounded-xl text-white font-bold text-2xl shadow-lg hover:scale-105 transition-transform py-8 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
              type: "spring",
              stiffness: 120,
            }}
            data-tally-open="A7L05l" // <- Vervang door jouw Tally ID
            data-tally-width="500"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Ik heb interesse!
          </motion.button>
        </div>
      </div>
    </div>
  );
}
