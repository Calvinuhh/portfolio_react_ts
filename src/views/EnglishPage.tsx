import "./index.css";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import AboutMe from "../components/AboutMe/AboutMe";
import Technologies from "../components/Technologies/Technologies";
import Section from "../components/Section/Section";

const EnglishPage = () => {
  useEffect(() => {
    document.title = "Portfolio Calvin Howard";
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header btn_text="ES" seniority="Backend Junior Developer" route="/es" />
      <AboutMe
        title="About me"
        text1="Junior Backend Developer, experience and projects in PERN and MERN Stack, JWT and Mercado Pago API , I am constantly updating myself about new trends and technologies in web development, constantly deepening the technologies that I already master, I consider that I can contribute great value in the Backend development, especially with Express.js since it is the framework with which I have practiced and developed projects the most."
        text2="I realized that the market increasingly demands more TypeScript, so I am working on projects like APIs in TypeScript to improve my skills and scalability of my applications."
        strong={["PERN", "MERN", "JWT", "Mercado Pago API"]}
      />
      <Technologies title="Technologies" />

      <Section
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Experience"
        corp="My Cleaning Solutions"
        btn_text="Details"
        date_range="dec. 2023 - jan. 2024"
        position="Web Developer (freelance work)"
        description="Development of a website for a cleaning company in United States with the framework Astro"
      />
      <Section
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title="Education"
        corp="Soy Henry"
        btn_text="Details"
        date_range="oct. 2023 - jun. 2024"
        position="Full Stack Developer Bootcamp"
        description="Programming bootcamp focused on javascript technologies such as Node.js, React and Express."
      />

      <Section
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        corp="National Learning Service (SENA)"
        btn_text="Details"
        date_range="sep. 2024 - currently"
        position="Software Programming Technician"
        description="Technical career focused on learning programming languages, web development tools, frontend, backend, databases, agile methodologies"
      />

      <Footer />
    </>
  );
};

export default EnglishPage;
