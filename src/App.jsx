import { useState } from "react";

import genaiPlanet from "./assets/Planets/genai.png";
import melaniePlanet from "./assets/Planets/melanieplanet.png";
import mobilePlanet from "./assets/Planets/mobile.png";
import projectsPlanet from "./assets/Planets/projects.png";
import resumePlanet from "./assets/Planets/resume.png";
import skillsPlanet from "./assets/Planets/skills.png";
import contactPlanet from "./assets/Planets/contact.png";

function App() {
  const [selected, setSelected] = useState("about");

  const sections = {
    genai: {
      label: "GenAI",
      title: "GenAI Systems",
      subtitle: "Legal Holds + AI Workflows",
      text: "Built API routes to export ChatGPT Enterprise user data into structured ZIP archives for legal hold, compliance, audit readiness, and internal AI workflows. Worked with enterprise data retrieval patterns and AI-powered productivity tools.",
      image: genaiPlanet,
      position: "top-36 left-[8%]",
      size: "w-48 h-48",
      labelRotate: "rotate-6",
    },
    skills: {
      label: "Skills",
      title: "Technical Skills",
      subtitle: "Coding Inventory",
      text: "Java, Python, Kotlin, JavaScript, SQL, REST APIs, Postman, Firebase, Terraform, Fastly, VCL, Kibana, Android, Jetpack Compose, Git, Agile, and AI workflow development.",
      image: skillsPlanet,
      position: "top-28 left-[25%]",
      size: "w-40 h-40",
      labelRotate: "-rotate-3",
    },
    about: {
      label: "MelaniePlanet",
      title: "Melanie Nunez",
      subtitle: "Software Engineer",
      text: "Software Engineer with experience building enterprise tools, backend APIs, Android applications, AI-powered workflows, and internal productivity systems. I enjoy solving practical problems, improving user experiences, and creating clean technical solutions.",
      image: melaniePlanet,
      position: "top-8 left-1/2 -translate-x-1/2",
      size: "w-80 h-80",
      labelRotate: "",
    },
    projects: {
      label: "Projects",
      title: "Projects",
      subtitle: "Community Creations",
      text: "Featured work includes a GenAI data export tool for compliance workflows, Target MyDay Android development, FIXI roadside assistance app, Pokémon API Android app, and infrastructure/API work involving Fastly, VCL, Terraform, and production routing.",
      image: projectsPlanet,
      position: "top-28 right-[25%]",
      size: "w-40 h-40",
      labelRotate: "rotate-3",
    },
    mobile: {
      label: "Mobile",
      title: "Mobile Development",
      subtitle: "Kotlin + Android",
      text: "Worked on Android applications including Target MyDay and FIXI using Kotlin, Firebase, Jetpack Compose, mobile testing, and modern development practices. Built app features with attention to usability, reliability, and clean UI behavior.",
      image: mobilePlanet,
      position: "top-36 right-[8%]",
      size: "w-48 h-48",
      labelRotate: "-rotate-6",
    },
    resume: {
      label: "Resume",
      title: "Adventure Book",
      subtitle: "Experience Overview",
      text: "Experience spans Target enterprise software engineering, GenAI legal hold workflows, Android development, CDN/API infrastructure, Fastly/VCL/Terraform work, mobile app development, Agile collaboration, debugging, testing, and production support.",
      image: resumePlanet,
      position: "top-[380px] left-[15%]",
      size: "w-36 h-36",
      labelRotate: "rotate-6",
    },
    contact: {
      label: "Contact",
      title: "Contact",
      subtitle: "Let’s Connect",
      text: "Email: melaniejnunez@gmail.com. Add your LinkedIn, GitHub, and resume links here so recruiters can quickly view your work, technical background, and software engineering experience.",
      image: contactPlanet,
      position: "top-[380px] right-[15%]",
      size: "w-36 h-36",
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
        <div className="relative w-full max-w-6xl h-[920px] rounded-[3rem] border-[18px] border-[#5b4634] bg-[#0b1020]/80 shadow-2xl overflow-hidden">
          <div className="absolute inset-4 rounded-[2rem] border-4 border-dashed border-[#d8b98c]/60" />

          <div className="absolute top-0 left-[13%] h-40 w-[3px] bg-[#8b6b4a]" />
          <div className="absolute top-0 left-[31%] h-32 w-[3px] bg-[#8b6b4a]" />
          <div className="absolute top-0 left-1/2 h-28 w-[3px] bg-[#8b6b4a]" />
          <div className="absolute top-0 right-[31%] h-32 w-[3px] bg-[#8b6b4a]" />
          <div className="absolute top-0 right-[13%] h-40 w-[3px] bg-[#8b6b4a]" />

          {Object.entries(sections).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className={`absolute ${item.position} text-center group`}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.label}
                  className={`${item.size} rounded-full object-cover border-0 transition-all duration-500 animate-[floatPlanet_4s_ease-in-out_infinite] ${
                    selected === key
                      ? "scale-135 drop-shadow-[0_0_100px_rgba(125,211,252,1)]"
                      : "drop-shadow-[0_0_22px_rgba(255,255,255,0.65)]"
                  } group-hover:scale-135 group-hover:brightness-125 group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.9)]`}
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
                className={`mt-3 text-2xl font-black ${item.labelRotate} ${
                  selected === key ? "text-sky-300" : "text-white"
                }`}
              >
                {item.label}
              </p>
            </button>
          ))}

          <section className="absolute left-1/2 -translate-x-1/2 top-[590px] w-[82%] max-w-4xl bg-[#080b22]/90 backdrop-blur-md text-white rounded-[2rem] border-4 border-sky-300 px-6 py-5 shadow-2xl z-20">
            <p className="text-xs font-black text-cyan-300 uppercase tracking-[0.25em]">
              Selected Planet
            </p>

            <h1 className="text-2xl font-black mt-1">{current.title}</h1>

            <h2 className="text-sm font-bold text-pink-300 mt-1">
              {current.subtitle}
            </h2>

            <p className="mt-2 text-xs font-medium leading-6 text-gray-100">
              {current.text}
            </p>
          </section>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-40 flex flex-col items-center">
          <div className="flex items-center gap-10 mb-2">
            <button
              onClick={previousPlanet}
              className="
                text-4xl
                text-sky-300
                hover:text-white
                hover:scale-125
                transition
              "
            >
              ◀
            </button>

            <div className="text-5xl leading-none">
              🧸
            </div>

            <button
              onClick={nextPlanet}
              className="
                text-4xl
                text-sky-300
                hover:text-white
                hover:scale-125
                transition
              "
            >
              ▶
            </button>
          </div>

          <p className="text-sm text-sky-300 tracking-[0.2em] font-black uppercase">
            Planet Navigator
          </p>
        </div>
        </div>
      </main>
    </div>
  );
}

export default App;