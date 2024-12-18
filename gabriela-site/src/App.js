import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  LucideBriefcase,
  LucideGraduationCap,
  LucideAward,
  LucideDownload,
} from "lucide-react";
import "./index.css";

// Configuração de idiomas
const LANGUAGES = {
  pt: {
    home: {
      title: "Gabriela Frajtag",
      subtitle: "Cientista e Pesquisadora",
      description:
        "Estudante de graduação na Ilum Escola de Ciência, fascinada pela intersecção entre biologia, ciência de dados e matemática.",
    },
    nav: {
      about: "Sobre Mim",
      experience: "Experiência",
      education: "Educação",
      contact: "Contato",
      curriculum: "Currículo",
    },
    contact: {
      heading: "Vamos trocar uma ideia?",
      send: "Enviar",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar mensagem. Tente novamente.",
    },
    experience: [
      {
        title: "Kupcinet-Getz - Instituto Weizmann",
        date: "Julho de 2024",
        description: `
          Atuou no <strong>Laboratório de Estrutura e Função dos Ribossomos</strong>, sob orientação da laureada com o <strong>Prêmio Nobel</strong> Ada Yonath. 
          Conduziu experimentos envolvendo purificação de ribossomos e adquiriu experiência em biologia estrutural utilizando <strong>Cryo-EM</strong>. 
          Ganhou proficiência no uso do software <strong>Coot</strong> para modelagem de estruturas moleculares e investigou mecanismos de resistência a antibióticos no ribossomo bacteriano.
        `,
      },
      {
        title: "Estágio no Laboratório Nacional de Biorrenováveis Brasileiro",
        date: "Fevereiro de 2024",
        description: `
          Trabalhou no <strong>Laboratório de Biologia Sintética e Biocatálise</strong> no CNPEM.
          * Utilizou técnicas para engenharia de proteínas heterólogas.
          * Aprendeu estratégias de clonagem, expressão e purificação de enzimas decarboxilase.
        `,
      },
      {
        title: "Estágio no Laboratório Nacional de Biosciências Brasileiro",
        date: "Julho de 2023",
        description: `
          Trabalhou no <strong>Grupo de Imunologia</strong> no CNPEM, aprimorando habilidades em biologia molecular e imunologia.
          * Aplicou técnicas como cultura de células, transdução viral e citometria de fluxo.
          * Investigou a interferência de RNA (RNAi) no silenciamento transcricional do gene FOXP3 no contexto da resposta imune ao câncer.
        `,
      },
      {
        title: "Escola de Bioinformática I - Escola de Ciências Ilum",
        date: "2024",
        description: `
          * Estudou genômica e sequenciamento de DNA.
          * Aprendeu a processar dados biológicos usando Computação de Alto Desempenho.
        `,
      },
    ],
    education: [
      {
        title: "Instituto de Tecnologia ORT",
        location: "Rio de Janeiro, Brasil",
        date: "Jan. 2020 – Dez. 2022",
        description: "Técnica em Biotecnologia",
      },
      {
        title: "Bacharelado em Ciências e Tecnologia, Escola de Ciências Ilum",
        location: "Campinas, Brasil",
        date: "Fev. 2023 – Dez. 2025",
        description: "Bacharel em Ciências e Tecnologia previsto",
      },
    ],
    about: `
      <p>
        Sou Gabriela Frajtag, carioca da gema, e atualmente morando em Campinas. 
        Estudante de Graduação na Ilum (a faculdade do CNPEM), cientista apaixonada, amo explorar a interseção entre biologia, ciência de dados e matemática. 
        Curiosa por natureza, adoro aprender sobre novas áreas do conhecimento, desde temas científicos complexos até habilidades criativas como design. 
        Acredito que o aprendizado contínuo é a chave para criar soluções inovadoras e impactantes. Vamos juntos inovar? :)
      </p>
    `,
  },
  en: {
    home: {
      title: "Gabriela Frajtag",
      subtitle: "Scientist and Researcher",
      description:
        "Undergraduate student at Ilum School of Science, fascinated by the intersection of biology, data science, and mathematics.",
    },
    nav: {
      about: "About Me",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      curriculum: "Curriculum",
    },
    contact: {
      heading: "Let's get in touch?",
      send: "Send",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
    },
    experience: [
      {
        title: "Kupcinet-Getz - Weizmann Institute",
        date: "July 2024",
        description: `
          Worked at the <strong>Laboratory of Ribosome Structure and Function</strong>, under the supervision of <strong>Nobel Prize</strong> laureate Ada Yonath. 
          Conducted experiments involving ribosome purification and gained experience in structural biology using <strong>Cryo-EM</strong>. 
          Gained proficiency in using <strong>Coot</strong> software for molecular modeling and investigated mechanisms of antibiotic resistance in bacterial ribosomes.
        `,
      },
      {
        title: "Internship at National Renewable Energy Laboratory",
        date: "February 2024",
        description: `
          Worked at the <strong>Synthetic Biology and Biocatalysis Laboratory</strong> at CNPEM.
          * Applied techniques for heterologous protein engineering.
          * Learned strategies for cloning, expression, and purification of decarboxylase enzymes.
        `,
      },
      {
        title: "Internship at National Biosciences Laboratory",
        date: "July 2023",
        description: `
          Worked at the <strong>Immunology Group</strong> at CNPEM, enhancing skills in molecular biology and immunology.
          * Applied techniques such as cell culture, viral transduction, and flow cytometry.
          * Investigated RNA interference (RNAi) in silencing the FOXP3 gene in cancer immune response.
        `,
      },
      {
        title: "Bioinformatics School I - Ilum School of Science",
        date: "2024",
        description: `
          * Studied genomics and DNA sequencing.
          * Learned to process biological data using High-Performance Computing.
        `,
      },
    ],
    education: [
      {
        title: "ORT Technical Institute",
        location: "Rio de Janeiro, Brazil",
        date: "Jan. 2020 – Dec. 2022",
        description: "Technician in Biotechnology",
      },
      {
        title: "Bachelor's in Science and Technology, Ilum School of Science",
        location: "Campinas, Brazil",
        date: "Feb. 2023 – Dec. 2025",
        description: "Expected Bachelor of Science and Technology",
      },
    ],
    about: `
      <p>
        I am Gabriela Frajtag, I was born and raised in Rio de Janeiro, but I'm currently living in Campinas. 
        I am an undergraduate student at Ilum (CNPEM's college), a passionate scientist who loves exploring the intersection of biology, data science, and mathematics. 
        Naturally curious, I enjoy learning about new fields of knowledge, from complex scientific topics to creative skills like design. 
        I believe that continuous learning is the key to creating innovative and impactful solutions. Shall we innovate together? :)
      </p>
    `,
  },
};

const App = () => {
  const [language, setLanguage] = useState("pt");
  const [activeTab, setActiveTab] = useState("about");
  const content = LANGUAGES[language];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_w8v0zou", // Service ID
        "template_vhzrl6d", // Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        "LzYm8Q0PE7MrumEPA" // Public Key
      )
      .then(
        () => {
          setStatusMessage(content.contact.success);
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        },
        () => setStatusMessage(content.contact.error)
      );
  };

  const downloadCurriculum = () => {
    const fileName =
      language === "pt"
        ? "gabriela-frajtag-curriculum-pt.pdf"
        : "gabriela-frajtag-curriculum-en.pdf";
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="bg-gradient-to-br from-purple-100 to-purple-200 min-h-screen text-center">
      {/* Botão de Idioma */}
      <div className="absolute right-4 top-4">
        {["pt", "en"].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-3 py-1 mx-1 rounded ${
              language === lang
                ? "bg-purple-600 text-white"
                : "bg-white text-purple-600 border"
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Header */}
      <header className="pt-12">
        <h1 className="text-5xl font-bold text-purple-800">{content.home.title}</h1>
        <h2 className="text-2xl text-purple-600 mt-2">{content.home.subtitle}</h2>
        <div className="mt-6 flex justify-center">
          <img
            src={process.env.PUBLIC_URL + "/foto-gabriela.jpg"}
            alt="Gabriela Frajtag"
            className="w-48 h-48 rounded-full object-cover border-4 border-purple-500 shadow-lg"
          />
        </div>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">{content.home.description}</p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center mt-8 space-x-4">
        {["about", "experience", "education", "contact"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab
                  ? "bg-purple-500 text-white"
                  : "bg-white text-purple-800 border border-purple-300 hover:bg-purple-100"
              }`}
            >
              {content.nav[tab]}
            </button>
          )
        )}
        <button
          onClick={downloadCurriculum}
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
        >
          <LucideDownload className="mr-2" /> {content.nav.curriculum}
        </button>
      </div>

      {/* Conteúdo Dinâmico */}
      <div className="mt-8 px-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 text-left">
        {activeTab === "about" && (
          <div dangerouslySetInnerHTML={{ __html: content.about }}></div>
        )}
        {activeTab === "experience" &&
          content.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-bold">
                {exp.title} <span className="text-gray-500">({exp.date})</span>
              </h4>
              <p
                className="text-gray-700 mt-2 whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: exp.description }}
              ></p>
            </div>
          ))}
        {activeTab === "education" &&
          content.education.map((edu, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-bold">{edu.title}</h4>
              <p className="text-gray-500 italic">{edu.description}</p>
              <p className="text-gray-700">
                {edu.location} <span className="text-gray-500">({edu.date})</span>
              </p>
            </div>
          ))}
        {activeTab === "contact" && (
          <>
            <h3 className="text-xl font-bold mb-4">{content.contact.heading}</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Nome"
                  required
                  className="border rounded-md px-4 py-2 w-full"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Sobrenome"
                  required
                  className="border rounded-md px-4 py-2 w-full"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="border rounded-md px-4 py-2 w-full"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Mensagem"
                required
                rows="4"
                className="border rounded-md px-4 py-2 w-full"
              />
              <button
                type="submit"
                className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600"
              >
                {content.contact.send}
              </button>
            </form>
            {statusMessage && (
              <p className="mt-4 text-green-600">{statusMessage}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
