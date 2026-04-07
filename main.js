const contactEmail =
  "mailto:rishibhargav.m@gmail.com?subject=Portfolio%20Inquiry%20%2D%20Rishi";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

const skills = [
  "AI/ML: PyTorch, Scikit-learn, TensorFlow, Deep Learning, Reinforcement Learning, Transformers",
  "RAG/Agents: LangChain, FAISS/pgvector, Azure OpenAI, Hugging Face embeddings, MCP tooling",
  "Analytics/BI: Power BI, Tableau, Excel, Pandas, NumPy, Statistical Modeling, Hypothesis Testing",
  "Data/ETL + Databases: Ab Initio, Oracle, MSSQL, PostgreSQL, MySQL/MariaDB, Netezza, MongoDB, Supabase/pgvector",
  "Cloud: Azure, AWS, GCP, Snowflake",
  "Languages: Python, SQL/PLSQL, R, C#, Java, Linux/UNIX",
  "Additional Skills: FastAPI, Django, ASP.NET Core, REST APIs, Docker, Jenkins, JIRA, Control-M, MS Office",
];

const strengths = [
  "Translates complex data into clear, decision-ready outputs",
  "Builds end-to-end systems across pipelines, analytics, and ML",
  "Designs for reliability, traceability, and human oversight",
  "Works effectively with technical and non-technical stakeholders",
];

const projects = [
  {
    title: "Agentic AI for Transport Mode Optimization",
    summary:
      "Built a PyTorch cost-prediction model and agent-based optimization workflow on FAF freight data to recommend cheapest, fastest, or balanced transport modes, including future-year scenario forecasting.",
    tags: ["PyTorch", "Q-Learning", "Optimization", "FAF4"],
    year: "2025",
    result:
      "Enabled scenario-based freight recommendations for future planning decisions.",
    image: "./assets/transport1.jpg",
    link: "https://github.com/Bhargav-Rishi/AgenticAI-Transport-Optimization-Deep-Learning",
  },
  {
    title: "NYC Motor Vehicle Collisions Analytics",
    summary:
      "Built an ASP.NET Core MVC analytics app on live NYC Open Data APIs so users could explore collision trends through filters, CRUD workflows, and Chart.js dashboards.",
    tags: ["ASP.NET Core", "C#", "Chart.js", "Azure"],
    year: "2025",
    result: "Delivered a live public-safety dashboard with CRUD workflows on Azure.",
    image: "./assets/nyc_data.jpg",
    link: "https://github.com/Bhargav-Rishi/NYC-Collisions-Analytics-DotNet-App",
  },
  {
    title: "Smart Crop Prediction",
    summary:
      "Modeled soil and weather data with Decision Tree, Random Forest, SVM, and Naive Bayes algorithms to recommend the most suitable crop for a field, with full precision/recall/F1 evaluation.",
    tags: ["Machine Learning", "Agritech", "Python"],
    year: "2024",
    result: "Improved crop recommendations with up to 91% accuracy.",
    image: "./assets/crop2.jpg",
    link: "https://github.com/bhargav-rishi/Smart-Crop-Prediction-Machine-Learning",
  },
  {
    title: "ADBMS Amazon (MariaDB)",
    summary:
      "Designed a transactional MariaDB database for users, products, and reviews, then optimized indexing and query performance to support heavy read workloads while preserving ACID guarantees.",
    tags: ["MariaDB", "SQL", "Database Design"],
    year: "2024",
    result: "Reduced read latency by about 35% for high-volume review queries.",
    image: "./assets/databases-zeenea.jpg",
    link: "https://github.com/bhargav-rishi/Amazon-Product-Reviews-Database",
  },
  {
    title: "Tixly Mobile Ticketing Design",
    summary:
      "Designed an end-to-end mobile ticketing experience, including UML diagrams, a microservices architecture, and low/high-fidelity UX flows for ticket purchase, storage, and validation.",
    tags: ["Product Design", "Architecture", "UX"],
    year: "2025",
    result: "Produced end-to-end design artifacts for stakeholder alignment.",
    image: "./assets/tixly.jpg",
    link: "https://github.com/Bhargav-Rishi/Tixly_App_Design",
  },
  {
    title: "Know Your Rights — Legal Chatbot",
    summary:
      "Built a FastAPI and LangChain legal assistant that ingests multiple PDFs, retrieves relevant context with FAISS, and generates grounded answers through a React interface with source citations.",
    tags: ["FastAPI", "LangChain", "FAISS", "Flan-T5", "React"],
    year: "2025",
    result: "Boosted retrieval relevance by 30% for more accurate legal answers.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1400&q=80",
    link: "https://github.com/Bhargav-Rishi/Know-Your-Rights-ChatBot-RAG",
  },
  {
    title: "USF Campus Concierge (Multi-Agent RAG)",
    summary:
      "Built a Streamlit multi-agent RAG assistant for university onboarding that retrieves from Supabase pgvector, applies safety guardrails, and uses MCP tools for Gmail and Calendar actions.",
    tags: ["Streamlit", "pgvector", "Azure Phi-4", "MCP", "Supabase", "EmbeddingGemma-300M"],
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
      "Analyzed EPA, CDC, and Census data across all 50 states in Tableau Prep and Tableau to test whether emissions tracked asthma rates after per-capita and density normalization.",
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
      "Benchmarked ST-GCN, TCN, and Transformer models on 3D skeleton sequences to recognize worker gestures for human-robot interaction, supported by preprocessing notebooks and demo pipelines.",
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
      "Converted speech samples into mel-spectrograms and trained transformer-based models to classify eight emotion categories with balanced precision and recall across speakers.",
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
              (tag) => `<span class="pill tag-pill">${tag}</span>`
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

["contactTop", "contactProjects", "contactBottom", "contactInline"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) {
    el.href = contactEmail;
  }
});
