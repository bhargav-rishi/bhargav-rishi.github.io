const contactEmail =
  "mailto:rishibhargav.m@gmail.com?subject=Portfolio%20Inquiry%20%2D%20Rishi";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

const skills = [
  "AI/ML: PyTorch, Deep Learning, Reinforcement Learning, Transformers, Large Language Models",
  "RAG/Agents: LangChain, FAISS/pgvector, Azure OpenAI, Hugging Face embeddings, MCP tooling",
  "Analytics/BI: Power BI, Tableau, Qlik, Chart.js, R Studio, SSRS",
  "Data/ETL + Databases: Ab Initio, Oracle, MSSQL, PostgreSQL, MySQL/MariaDB, Netezza, MongoDB, Supabase/pgvector, SSIS, SSMS",
  "Cloud: Azure, AWS, GCP, Oracle Cloud, Snowflake",
  "Languages: Python, R, C, C#, Java, SQL/PLSQL, HTML/CSS/JS, Linux/UNIX",
  "Backend: FastAPI, Django, ASP.NET Core, REST APIs, CI/CD",
  "Tools/Services: Jenkins, JIRA, Control-M, MS Office",
];

const strengths = [
  "Clear, decision-focused communication grounded in data",
  "End-to-end delivery mindset from data pipelines to ML and dashboards",
  "Reliability and privacy awareness in system design",
  "Collaborative, responsive partner to stakeholders and teammates",
];

const projects = [
  {
    title: "Agentic AI for Transport Mode Optimization",
    summary:
      "PyTorch MLP cost model plus goal-driven agent and Q-learning to recommend cheapest/fastest/balanced freight modes on the FAF dataset, including feature interpolation for future-year projections.",
    tags: ["PyTorch", "Q-Learning", "Optimization", "FAF4"],
    year: "2025",
    result:
      "Guided cheapest/fastest/balanced freight choices with future-year forecasting.",
    image: "./assets/transport1.jpg",
    link: "https://github.com/Bhargav-Rishi/AgenticAI-Transport-Optimization-Deep-Learning",
  },
  {
    title: "NYC Motor Vehicle Collisions Analytics",
    summary:
      "ASP.NET Core MVC dashboard over the NYC Open Data collisions API with CRUD, filters, and Chart.js visualizations; deployed to Azure App Service for public-safety insights.",
    tags: ["ASP.NET Core", "C#", "Chart.js", "Azure"],
    year: "2025",
    result: "Delivered a live public-safety dashboard with CRUD workflows on Azure.",
    image: "./assets/nyc_data.jpg",
    link: "https://github.com/Bhargav-Rishi/NYC-Collisions-Analytics-DotNet-App",
  },
  {
    title: "Smart Crop Prediction",
    summary:
      "Decision Tree, Random Forest, SVM, and Naïve Bayes models on soil/weather features to recommend crops with full precision/recall/F1 reporting.",
    tags: ["Machine Learning", "Agritech", "Python"],
    year: "2024",
    result: "Improved crop recommendations with up to 91% accuracy.",
    image: "./assets/crop2.jpg",
    link: "https://github.com/bhargav-rishi/Smart-Crop-Prediction-Machine-Learning",
  },
  {
    title: "ADBMS Amazon (MariaDB)",
    summary:
      "Transactional e-commerce-style DB for reviews/users/products with indexing and query tuning to keep heavy reads fast while preserving ACID guarantees.",
    tags: ["MariaDB", "SQL", "Database Design"],
    year: "2024",
    result: "Improved read performance for heavy-traffic review queries.",
    image: "./assets/databases-zeenea.jpg",
    link: "https://github.com/bhargav-rishi/Amazon-Product-Reviews-Database",
  },
  {
    title: "Tixly Mobile Ticketing Design",
    summary:
      "Architecture, UML, microservices blueprint, and low/high-fidelity UX for mobile ticket purchase, storage, and validation flows.",
    tags: ["Product Design", "Architecture", "UX"],
    year: "2025",
    result: "Produced end-to-end design artifacts for stakeholder alignment.",
    image: "./assets/tixly.jpg",
    link: "https://github.com/Bhargav-Rishi/Tixly_App_Design",
  },
  {
    title: "Know Your Rights — Legal Chatbot",
    summary:
      "FastAPI + LangChain RAG with Flan-T5, FAISS, and BAAI embeddings; handles multi-PDF uploads, validates inputs, cites sources, and serves a React/Tailwind UI deployed to Render/Hugging Face.",
    tags: ["FastAPI", "LangChain", "FAISS", "Flan-T5", "React"],
    year: "2025",
    result: "Boosted retrieval relevance by 30% for more accurate legal answers.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=80",
    link: "https://github.com/Bhargav-Rishi/Know-Your-Rights-ChatBot-RAG",
  },
  {
    title: "USF Campus Concierge (Multi-Agent RAG)",
    summary:
      "Streamlit multi-agent RAG assistant using Supabase pgvector, recursive chunking, and embeddinggemma-300m embeddings with MCP tools for Gmail/Calendar actions.",
    tags: ["Streamlit", "pgvector", "Azure Phi-4", "MCP", "Supabase", "Google EmbeddingGemma"],
    year: "2025",
    featured: true,
    result:
      "Enabled auditable, human-approved onboarding outreach workflows.",
    image: "./assets/usf.png",
    link: "https://github.com/bhargav-rishi/USFConcierge",
  },
  {
    title: "Emissions vs Asthma Analysis",
    summary:
      "Tableau Prep + dashboards across EPA/CDC/Census data (1990–2022 emissions, 2015–2022 adult asthma, 1998–2017 child indicators); no consistent emissions–asthma link after per-capita/density normalization.",
    tags: ["Tableau", "Data Analysis", "Public Health"],
    year: "2025",
    featured: true,
    result:
      "Found no consistent emissions–asthma link after normalization across demographics.",
    image: "./assets/Emissions.jpg",
    link: "https://public.tableau.com/app/profile/bhargav.rishi.medisetti/viz/GreenhouseGasEmissionsVsAsthma/EmissionsEnvironmentalExposure",
  },
  {
    title: "Gesture-Based Action Recognition",
    summary:
      "Experimented with 2s-ST-GCN, 2s-TCN, and Transformer encoders on 3D skeleton sequences to improve gesture classification reliability; built preprocessing notebooks and demo pipelines.",
    tags: ["ST-GCN", "TCN", "Transformer", "PyTorch"],
    year: "2025",
    featured: true,
    result: "Achieved 78% accuracy for gesture recognition in HRI scenarios.",
    image: "./assets/robot.jpg",
    link: "https://github.com/bhargav-rishi/Gesture-Recognition-Deep-Learning",
  },
  {
    title: "Emotion Recognition from Speech",
    summary:
      "Audio emotion classifier using mel-spectrograms and transformer-based encoders to label 8-class emotions with balanced precision/recall across actors.",
    tags: ["Audio ML", "Transformers", "PyTorch"],
    year: "2025",
    result: "Reached 74% accuracy across 8 emotions for speech sentiment insights.",
    image: "./assets/emotion.jpg",
    link: "https://github.com/bhargav-rishi/Emotion-Recognition-ViT-Deep-Learning",
  }
];

const skillsPrimary = document.getElementById("skillsPrimary");
const skillsSecondary = document.getElementById("skillsSecondary");
const strengthsContainer = document.getElementById("strengths");
const featuredGrid = document.getElementById("featuredGrid");
const allProjectsGrid = document.getElementById("allProjectsGrid");
const featuredProjects = projects.filter((project) => project.featured);
const getSortDate = (project) =>
  project.sortDate ? new Date(project.sortDate) : new Date(`${project.year}-12-01`);
const sortedProjects = [...projects].sort(
  (a, b) => getSortDate(b).getTime() - getSortDate(a).getTime()
);

const primarySkills = skills.slice(0, 6);
const secondarySkills = skills.slice(6);

primarySkills.forEach((skill) => {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = skill;
  skillsPrimary.appendChild(chip);
});

secondarySkills.forEach((skill) => {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = skill;
  skillsSecondary.appendChild(chip);
});

strengths.forEach((item) => {
  const row = document.createElement("div");
  row.className = "strength";
  row.innerHTML = `<span class="dot"></span><span>${item}</span>`;
  strengthsContainer.appendChild(row);
});

const renderProjectCard = (project, container) => {
  const card = document.createElement("article");
  card.className = "project";
  card.innerHTML = `
      <div class="project-image" style="background-image:url('${project.image}')">
        ${project.badge ? `<span class="pill left">${project.badge}</span>` : ""}
        <span class="pill">${project.year}</span>
      </div>
      <div class="project-body">
        <div class="section-head" style="margin-bottom:6px;">
          <h3>${project.title}</h3>
        </div>
        <p>${project.summary}</p>
        ${project.result ? `<p class="project-result">Result: ${project.result}</p>` : ""}
        <div class="tag-row">
          ${project.tags
            .map(
              (tag) =>
                `<span class="pill" style="background: rgba(15,23,42,0.6);">${tag}</span>`
            )
            .join("")}
        </div>
        <div class="card-actions">
          <a class="btn ghost" href="${project.link || contactEmail}" target="_blank" rel="noopener">View project <span class="arrow">→</span></a>
        </div>
      </div>
    `;
  container.appendChild(card);
};

featuredProjects.forEach((project) => renderProjectCard(project, featuredGrid));
sortedProjects.forEach((project) => renderProjectCard(project, allProjectsGrid));

["contactTop", "contactProjects", "contactBottom"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    el.href = contactEmail;
  }
});
