const courses = [
  {
    id: 1,
    title: "Javascript for beginners",
    lang: "en",
    technology: "javascript",
    level: "beginner",
    price: 120000,
    description:
      "Javascript made easy as your first language. This walkthrough covers the basic mechanism of algorithms, loops, conditions, functions, JS.",
  },
  {
    id: 2,
    title: "Java for beginners",
    lang: "en",
    technology: "java",
    level: "beginner",
    price: 220000,
    description:
      "A simple course for true beginners in Java. Learn OOP fundamentals: classes, objects, encapsulation, inheritance, polymorphism, abstraction.",
  },
  {
    id: 3,
    title: "Relational Databases for...",
    lang: "en",
    technology: "sql",
    level: "beginner",
    price: 180000,
    description:
      "Understand how relational databases really work. This course introduces tables, primary keys, foreign keys, constraints, normalization, ER diagrams.",
  },
  {
    id: 4,
    title: "Git & Version Control...",
    lang: "en",
    technology: "git",
    level: "beginner",
    price: 95000,
    description:
      "Master Git from scratch. Learn repositories, commits, branches, merging, rebasing, resolving conflicts, and collaborating with remote.",
  },
  {
    id: 5,
    title: "Python pour l'analyse de données",
    lang: "fr",
    technology: "python",
    level: "intermediate",
    price: 250000,
    description:
      "Apprenez à manipuler des données avec Pandas et NumPy, et à créer des visualisations claires et pertinentes.",
  },
  {
    id: 6,
    title: "React avanzato",
    lang: "it",
    technology: "react",
    level: "advanced",
    price: 300000,
    description:
      "Approfondisci hook personalizzati, gestione dello stato globale, performance e pattern architetturali avanzati in React.",
  },
  {
    id: 7,
    title: "Tantaran'ny HTML sy CSS",
    lang: "mg",
    technology: "html",
    level: "beginner",
    price: 60000,
    description:
      "Fianarana ny fototry ny HTML sy CSS mba hananganana pejy tranon-kala tsotra.",
  },
  {
    id: 8,
    title: "Node.js API design",
    lang: "en",
    technology: "nodejs",
    level: "intermediate",
    price: 210000,
    description:
      "Build clean, well structured REST APIs with Node.js, Express, authentication, and error handling best practices.",
  },
  {
    id: 9,
    title: "CSS avancé et animations",
    lang: "fr",
    technology: "css",
    level: "intermediate",
    price: 150000,
    description:
      "Flexbox, Grid, transitions, animations et bonnes pratiques pour construire des interfaces modernes et responsives.",
  },
  {
    id: 10,
    title: "Introduzione a PHP",
    lang: "it",
    technology: "php",
    level: "beginner",
    price: 130000,
    description:
      "Impara le basi di PHP: variabili, funzioni, form, sessioni e connessione a un database MySQL.",
  },
  {
    id: 11,
    title: "Docker for developers",
    lang: "en",
    technology: "docker",
    level: "intermediate",
    price: 240000,
    description:
      "Containerize your applications with Docker: images, volumes, networks, Dockerfiles and docker-compose.",
  },
  {
    id: 12,
    title: "Fototra momba ny SQL",
    lang: "mg",
    technology: "sql",
    level: "beginner",
    price: 70000,
    description:
      "Fianarana ny fototry ny SQL: SELECT, INSERT, UPDATE, DELETE ary ny fifandraisan'ny latabatra.",
  },
  {
    id: 13,
    title: "TypeScript en profondeur",
    lang: "fr",
    technology: "typescript",
    level: "advanced",
    price: 280000,
    description:
      "Types avancés, génériques, décorateurs et intégration de TypeScript dans de grands projets JavaScript.",
  },
  {
    id: 14,
    title: "Vue.js from scratch",
    lang: "en",
    technology: "vuejs",
    level: "beginner",
    price: 160000,
    description:
      "Get started with Vue.js: components, reactivity, directives, routing and state management basics.",
  },
  {
    id: 15,
    title: "Sicurezza informatica di base",
    lang: "it",
    technology: "security",
    level: "intermediate",
    price: 200000,
    description:
      "Principi fondamentali della sicurezza informatica: autenticazione, crittografia, OWASP Top 10 e buone pratiche.",
  },
  {
    id: 16,
    title: "MongoDB pour débutants",
    lang: "fr",
    technology: "mongodb",
    level: "beginner",
    price: 140000,
    description:
      "Découvrez les bases de données NoSQL avec MongoDB: documents, collections, requêtes et agrégations.",
  },
  {
    id: 17,
    title: "Kotlin & Android development",
    lang: "en",
    technology: "kotlin",
    level: "intermediate",
    price: 260000,
    description:
      "Build native Android apps with Kotlin: layouts, activities, fragments, and connecting to a backend API.",
  },
  {
    id: 18,
    title: "Fianarana Python amin'ny fanombohana",
    lang: "mg",
    technology: "python",
    level: "beginner",
    price: 90000,
    description:
      "Fototry ny fitenim-pitaovana Python: variables, boucle, fonction ary ny fampiharana tsotra.",
  },
  {
    id: 19,
    title: "GraphQL en pratique",
    lang: "fr",
    technology: "graphql",
    level: "advanced",
    price: 270000,
    description:
      "Concevez des API GraphQL performantes: schémas, resolvers, mutations et optimisation des requêtes.",
  },
  {
    id: 20,
    title: "AWS Cloud Practitioner",
    lang: "en",
    technology: "aws",
    level: "beginner",
    price: 230000,
    description:
      "An introduction to AWS core services: EC2, S3, IAM, and the fundamentals of cloud architecture.",
  },
];

const langFlagsEl = document.getElementById("langFlags");
const techSelect = document.getElementById("techSelect");
const levelSelect = document.getElementById("levelSelect");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const searchInput = document.getElementById("searchInput");
const clearAllBtn = document.getElementById("clearAll");
const coursesGrid = document.getElementById("coursesGrid");
const resultCount = document.getElementById("resultCount");
const noResultsEl = document.getElementById("noResults");

const state = {
  lang: "all",
  technology: "all",
  level: "all",
  maxPrice: 300000,
  keyword: "",
};

function populateTechOptions() {
  const techs = [...new Set(courses.map((c) => c.technology))].sort();
  techs.forEach((tech) => {
    const opt = document.createElement("option");
    opt.value = tech;
    opt.textContent = tech.charAt(0).toUpperCase() + tech.slice(1);
    techSelect.appendChild(opt);
  });
}

function formatPrice(value) {
  return value.toLocaleString("fr-FR").replace(/,/g, " ") + " Ar";
}

function createCourseCard(course) {
  const card = document.createElement("article");
  card.className = "course-card";

  card.innerHTML = `
    <div class="course-thumb">
      <span class="course-lang-badge">${course.lang}</span>
      <span class="course-level-badge">${course.level}</span>
    </div>
    <div class="course-body">
      <h3 class="course-title">${course.title}</h3>
      <span class="course-price">MGA ${course.price.toLocaleString("fr-FR").replace(/,/g, " ")}</span>
      <p class="course-desc">${course.description}</p>
      <div class="course-actions">
        <button type="button" class="learn-more">Learn more</button>
        <button type="button" class="add-cart">Add to cart</button>
      </div>
    </div>
  `;

  return card;
}

function courseMatchesFilters(course) {
  if (state.lang !== "all" && course.lang !== state.lang) return false;
  if (state.technology !== "all" && course.technology !== state.technology)
    return false;
  if (state.level !== "all" && course.level !== state.level) return false;
  if (course.price > state.maxPrice) return false;

  if (state.keyword) {
    const haystack = (
      course.title +
      " " +
      course.description +
      " " +
      course.technology
    ).toLowerCase();
    if (!haystack.includes(state.keyword)) return false;
  }

  return true;
}

function render() {
  const filtered = courses.filter(courseMatchesFilters);

  coursesGrid.innerHTML = "";
  filtered.forEach((course) =>
    coursesGrid.appendChild(createCourseCard(course)),
  );

  resultCount.textContent = `${filtered.length} cours trouvé${filtered.length > 1 ? "s" : ""}`;
  noResultsEl.hidden = filtered.length !== 0;
  coursesGrid.hidden = filtered.length === 0;
}

langFlagsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".flag-btn");
  if (!btn) return;

  langFlagsEl
    .querySelectorAll(".flag-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  state.lang = btn.dataset.lang;
  render();
});

techSelect.addEventListener("change", () => {
  state.technology = techSelect.value;
  render();
});

levelSelect.addEventListener("change", () => {
  state.level = levelSelect.value;
  render();
});

priceRange.addEventListener("input", () => {
  state.maxPrice = Number(priceRange.value);
  priceValue.textContent = `0 Ar - ${formatPrice(state.maxPrice)}`;
  render();
});

searchInput.addEventListener("input", () => {
  state.keyword = searchInput.value.trim().toLowerCase();
  render();
});

clearAllBtn.addEventListener("click", () => {
  state.lang = "all";
  state.technology = "all";
  state.level = "all";
  state.maxPrice = 300000;
  state.keyword = "";

  langFlagsEl
    .querySelectorAll(".flag-btn")
    .forEach((b) => b.classList.remove("active"));
  langFlagsEl.querySelector('[data-lang="all"]').classList.add("active");
  techSelect.value = "all";
  levelSelect.value = "all";
  priceRange.value = 300000;
  priceValue.textContent = "0 Ar - 300 000 Ar";
  searchInput.value = "";

  render();
});

populateTechOptions();
render();
