import { useState } from "react";

import genaiPlanet from "./assets/Planets/genai.png";
import melaniePlanet from "./assets/Planets/melanieplanet.png";
import mobilePlanet from "./assets/Planets/mobile.png";
import projectsPlanet from "./assets/Planets/projects.png";
import resumePlanet from "./assets/Planets/resume.png";
import skillsPlanet from "./assets/Planets/skills.png";
import contactPlanet from "./assets/Planets/contact.png";
import duckGif from "./assets/dino-dinosaur.gif";

function App() {
  const [selected, setSelected] = useState("about");

  const sections = {
    genai: {
      label: "GenAI",
      title: "GenAI Systems",
      subtitle: "Legal Holds + AI Workflows",
      text: "Member of Target's Generative AI team supporting Legal Holds and enterprise AI initiatives. Designed and maintained API routes that retrieve ChatGPT Enterprise user data and project artifacts for compliance and audit workflows. Built custom export services that package conversations and related content into structured ZIP archives. Collaborated with Microsoft 365 Agents and AI-driven productivity tools to improve internal workflows, data retrieval, and enterprise usability.",
      image: genaiPlanet,
      position: "top-28 left-[8%]",
      size: "w-36 h-36",
      labelRotate: "rotate-6",
    },
    skills: {
      label: "Skills",
      title: "Technical Skills",
      subtitle: "Coding Inventory",
      text: "Languages: Java, Kotlin, Python, JavaScript, SQL, HTML, and CSS. Mobile: Android, Jetpack Compose, Firebase, Android Studio, and mobile testing. Backend/API: REST APIs, data retrieval, Postman, Insomnia, and API integrations. Infrastructure: Terraform, Fastly, VCL, Kibana, and production routing. Tools: Git, Jira, IntelliJ, VS Code, Microsoft Suite, Google Suite, and Agile workflows.",
      image: skillsPlanet,
      position: "top-16 left-[25%]",
      size: "w-32 h-32",
      labelRotate: "-rotate-3",
    },
    about: {
      label: "About Me",
      title: "About Me",
      subtitle: "Software Engineer",
      text: "Software Engineer with experience across enterprise software, Generative AI systems, backend APIs, Android development, cloud infrastructure, and production support. Currently supporting Target's enterprise technology ecosystem, including AI-driven workflows, compliance tooling, and large-scale internal platforms serving hundreds of thousands of users. Passionate about building technology that is reliable, scalable, and meaningful while continuously learning new technologies and solving complex problems.",
      image: melaniePlanet,
      position: "top-10 left-1/2 -translate-x-1/2",
      size: "w-60 h-60",
      labelRotate: "",
    },
    projects: {
      label: "Projects",
      title: "Projects",
      subtitle: "Community Creations",
      text: "Developed projects ranging from enterprise AI tooling and Android applications to infrastructure routing systems and hackathon-winning software. Notable work includes the FIXI roadside assistance application, Pokémon API mobile projects, financial literacy applications, social media platforms, and enterprise backend services. Experience spans both professional software engineering and rapid innovation environments.",
      image: projectsPlanet,
      position: "top-16 right-[25%]",
      size: "w-32 h-32",
      labelRotate: "rotate-3",
    },
    mobile: {
      label: "Mobile",
      title: "Mobile Development",
      subtitle: "Kotlin + Android",
      text: "Worked on Android applications including Target MyDay and the FIXI roadside assistance platform using Kotlin, Jetpack Compose, Firebase, Git, and Agile development practices. Contributed to application enhancements, Spanish localization efforts, debugging, testing, and feature implementation. Focused on delivering reliable user experiences while collaborating closely with product owners, designers, and engineering teams.",
      image: mobilePlanet,
      position: "top-28 right-[8%]",
      size: "w-36 h-36",
      labelRotate: "-rotate-6",
    },
    resume: {
      label: "Resume",
      title: "Adventure Book",
      subtitle: "Experience Overview",
      text: "Professional experience includes Software Engineer at Target Corporation, Software Engineer at Omega One Developers, Target Technology Leadership Program participant, Android development, backend API engineering, cloud infrastructure, AI systems, and production support. Technical expertise includes Java, Kotlin, Python, JavaScript, SQL, REST APIs, Terraform, Fastly, VCL, Firebase, Git, and Agile methodologies.",
      image: resumePlanet,
      position: "top-[340px] left-[20%]",
      size: "w-28 h-28",
      labelRotate: "rotate-6",
    },
    contact: {
      label: "Contact",
      title: "Contact",
      subtitle: "Let’s Connect",
      text: "Email: melaniejnunez@gmail.com. LinkedIn: linkedin.com/in/melaniejnunez. GitHub: github.com/MelNunez02. Open to software engineering roles involving backend systems, AI integrations, Android development, API engineering, enterprise tools, and platform support.",
      image: contactPlanet,
      position: "top-[340px] right-[18%]",
      size: "w-28 h-28",
      labelRotate: "-rotate-6",
    },
  };

  const current = sections[selected];

  const planetOrder = [
    "genai",
    "skills",
    "about",
    "projects",
    "mobile",
    "resume",
    "contact",
  ];

  const currentIndex = planetOrder.indexOf(selected);

  const nextPlanet = () => {
    const next = (currentIndex + 1) % planetOrder.length;
    setSelected(planetOrder[next]);
  };

  const previousPlanet = () => {
    const prev =
      (currentIndex - 1 + planetOrder.length) % planetOrder.length;

    setSelected(planetOrder[prev]);
  };

  const stars = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    size: `${Math.random() * 3 + 1}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    opacity: Math.random() * 0.8 + 0.2,
    duration: `${2 + Math.random() * 5}s`,
  }));

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.2),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.18),transparent_35%),#020617]" />

      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 min-h-screen flex items-center justify-center px-6 py-8">
        <div className="relative w-full max-w-6xl min-h-[980px] rounded-[3rem] border-[18px] border-[#5b4634] bg-[#0b1020]/80 shadow-2xl overflow-hidden px-8 py-8">
          <div className="absolute inset-4 rounded-[2rem] border-4 border-dashed border-[#d8b98c]/60 pointer-events-none" />

          <header className="relative z-20 text-center mb-6">
            <p className="inline-block rounded-full bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-300 px-5 py-1 text-xs font-black tracking-[0.3em] uppercase text-black">
              Portfolio
            </p>

            <h1 className="mt-4 text-6xl md:text-7xl font-black text-white drop-shadow-lg">
              Melanie Nunez
            </h1>

            <p className="mt-2 text-sm md:text-base text-gray-300">
              Software Engineer • AI Systems • Mobile Development • Enterprise Applications
            </p>
          </header>

          <section
            className="
              relative
              z-20
              h-[540px]
              rounded-[2rem]
              border-2
              border-dashed
              border-[#d8b98c]/60
              overflow-hidden
              bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.18),transparent_55%),#070b22]
            "
          >
            <div className="absolute top-0 left-[13%] h-32 w-[3px] bg-[#8b6b4a]" />
            <div className="absolute top-0 left-[31%] h-28 w-[3px] bg-[#8b6b4a]" />
            <div className="absolute top-0 left-1/2 h-24 w-[3px] bg-[#8b6b4a]" />
            <div className="absolute top-0 right-[31%] h-28 w-[3px] bg-[#8b6b4a]" />
            <div className="absolute top-0 right-[13%] h-32 w-[3px] bg-[#8b6b4a]" />

            {Object.entries(sections).map(([key, item]) => {
              const isSelected = selected === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className={`absolute ${item.position} text-center group transition-all duration-700 ${
                    isSelected ? "z-50" : "z-10"
                  }`}
                >
                  <div className="relative">

                    {isSelected && (
                      <div
                        className="
                          absolute
                          inset-0
                          scale-[1.6]
                          rounded-full
                          bg-sky-300/20
                          blur-3xl
                          animate-pulse
                          pointer-events-none
                        "
                      />
                    )}

                    <img
                      src={item.image}
                      alt={item.label}
                      className={`${item.size}
                        rounded-full
                        object-cover
                        border-0
                        transition-all
                        duration-700
                        animate-[floatPlanet_4s_ease-in-out_infinite]

                        ${
                          isSelected
                            ? `
                              scale-[1.35]
                              -translate-y-6
                              brightness-110
                              opacity-100
                              drop-shadow-[0_0_120px_rgba(125,211,252,1)]
                            `
                            : `
                              scale-[0.82]
                              opacity-35
                              brightness-50
                              blur-[1px]
                              drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]
                            `
                        }

                        group-hover:scale-[1.45]
                        group-hover:-translate-y-10
                        group-hover:brightness-125
                        group-hover:opacity-100
                      `}
                    />

                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse pointer-events-none" />

                    <div className="absolute -top-3 left-1/2 text-yellow-300 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none">
                      ✦
                    </div>

                    <div className="absolute top-4 -right-3 text-sky-300 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none">
                      ✦
                    </div>

                    <div className="absolute bottom-2 -left-3 text-pink-300 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none">
                      ✦
                    </div>
                  </div>

                  <p
                    className={`mt-3 text-xl font-black ${item.labelRotate} transition-all duration-500 ${
                      isSelected
                        ? "text-sky-300 scale-125 drop-shadow-[0_0_15px_rgba(125,211,252,1)]"
                        : "text-white opacity-70"
                    }`}
                  >
                    {item.label}
                  </p>
                </button>
              );
            })}
          </section>

          <section className="relative z-30 w-[85%] mx-auto -mt-10 bg-[#120d32]/95 backdrop-blur-md text-white rounded-[2rem] border-2 border-dashed border-cyan-300/70 px-8 py-7 shadow-2xl">
            <p className="text-xs font-black text-cyan-300 uppercase tracking-[0.35em]">
              Selected Level
            </p>

            <h2 className="text-4xl font-black mt-2 text-white drop-shadow-lg">
              {current.title}
            </h2>

            <h3 className="text-lg font-bold text-pink-300 mt-1">
              {current.subtitle}
            </h3>

            <p className="mt-5 text-base font-medium leading-8 text-gray-100">
              {current.text}
            </p>
          </section>

          <nav className="relative z-20 mt-6 flex flex-col items-center">
            <img
              key={selected}
              src={duckGif}
              alt="Duck Guide"
              className="
                w-24
                h-24
                object-contain
                mb-3
                animate-bounce
                transition-all
                duration-500
              "
            />

            <div className="flex items-center gap-5">
              <button
                onClick={previousPlanet}
                className="rounded-full border-4 border-white bg-black/70 px-8 py-3 text-sm font-black text-white hover:bg-sky-400 hover:text-black hover:scale-105 transition"
              >
                ← Previous
              </button>

              <button
                onClick={nextPlanet}
                className="rounded-full border-4 border-white bg-white px-8 py-3 text-sm font-black text-black hover:bg-sky-300 hover:scale-105 transition"
              >
                Next →
              </button>
            </div>
          </nav>

          <footer className="relative z-20 mt-8 text-center text-xs tracking-[0.45em] text-[#d8b98c]/80 uppercase">
            ✦ Stitched With Care ✦
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;