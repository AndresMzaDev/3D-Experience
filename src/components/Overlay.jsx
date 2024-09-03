import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hey, I'm Andres Meza
          </h1>
          <p className="text-gray-500">Welcome to my word</p>
          <ul className="leading-9">
            <li>🧑‍💻 Developer</li>
            <li>🧑‍🏫 Designer UX/UI</li>
            <li>📦 3D Modeler</li>
          </ul>
          <p className="  mt-6">More than 4 years of experience.</p>
          <p>
            Developer, designer, illustrator, writer, teacher|apprentice, As a
            frontend developer, and my strong background in design, I try to
            create the best product possible.
          </p>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my skillsets 🔥
          </h1>
          <p className="text-gray-500">Always learning</p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>Swift</li>
            <li>VueJS</li>
            <li>Tailwind</li>
            <li>Git</li>
            <li>NextJS</li>
            <li>ThreeJS</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>NodeJS</li>
            <li>Firebase</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 We work together?
          </h1>
          <p className="text-gray-500">Write me!</p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            <ul className="leading-9">
              <li>
                {" "}
                <a href="https://www.figma.com/@andresmzadev" target="_blank">
                  {" "}
                  🔴 Figma{" "}
                </a>
              </li>

              <li>
                <a href="https://lnkd.in/ea5rJx25" target="_blank">
                  {" "}
                  🏀 Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/andres-meza-dev/"
                  target="_blank"
                >
                  {" "}
                  🛜 LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/AndresMzaDev" target="_blank">
                  {" "}
                  😼 GitHub
                </a>
              </li>
            </ul>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
