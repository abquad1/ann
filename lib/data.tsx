export const PROFILE = {
  name: "Anita Enuenwemba",
  role: "Data Analyst",
  tagline:
    "I turn messy data into clear decisions using SQL, Python and dashboards people actually use.",
  email: "anitaenuemwemba@gmail.com",
  location: "Lagos, Nigeria",
  about: [
    "I'm a data analyst with 3+ years of experience in retail and fintech. I like finding the question behind the question, then building the analysis and dashboard that answers it.",
    "Outside of work I mentor new analysts and contribute to open data projects.",
  ],
  facts: [
    {
      label: "Education",
      value: "B.Sc. Botany, Federal University of Agriculture, Abeokuta",
    },
    { label: "Open to", value: "Full-time and freelance work" },
  ],
  contactIntro:
    "Have a dataset, a question or a role in mind? Email me or find me on any of the links below.",
};

// icon: "linkedin" | "github" | "x" | "kaggle" (see components/SocialIcon.js to add more)
export const SOCIALS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/your-handle",
    icon: "linkedin",
  },
  { name: "GitHub", url: "https://github.com/your-handle", icon: "github" },
  { name: "Twitter / X", url: "https://x.com/your-handle", icon: "x" },
];

// Leave link or repo as "" to hide that button.
export const PROJECTS = [
  {
    title: "Customer Churn Analysis",
    description:
      "Analysed 50k subscriber records to find what drives cancellations and built a model to flag at-risk accounts.",
    result: "Identified 3 churn drivers; retention campaign cut churn by 12%.",
    tags: ["Python", "Machine Learning"],
    link: "https://example.com/churn-demo",
    repo: "https://github.com/your-handle/churn-analysis",
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Interactive dashboard tracking revenue, margin and regional performance for the sales leadership team.",
    result: "Replaced 6 weekly spreadsheets and saved ~10 hours per week.",
    tags: ["Power BI", "SQL"],
    link: "https://example.com/sales-dashboard",
    repo: "",
  },
  {
    title: "A/B Test: Checkout Redesign",
    description:
      "Designed and analysed an experiment comparing two checkout flows across 20k sessions.",
    result: "New flow lifted conversion by 4.3% (p < 0.01).",
    tags: ["Statistics", "Python"],
    link: "",
    repo: "https://github.com/your-handle/ab-test",
  },
  {
    title: "Inventory Forecasting",
    description:
      "Time-series forecasts of weekly demand for 200 products to reduce stock-outs.",
    result: "Forecast error down 18% vs. the previous method.",
    tags: ["Python", "Forecasting"],
    link: "https://example.com/forecast",
    repo: "https://github.com/your-handle/forecasting",
  },
  {
    title: "Customer Segmentation",
    description:
      "Clustered customers by purchasing behaviour to give marketing clear, usable segments.",
    result: "5 segments adopted by the marketing team.",
    tags: ["SQL", "Machine Learning"],
    link: "",
    repo: "https://github.com/your-handle/segmentation",
  },
  {
    title: "Public Transport Open Data Story",
    description:
      "Cleaned and visualised city transit data to show peak-hour delays by neighbourhood.",
    result: "Featured in a local data journalism roundup.",
    tags: ["Tableau", "Data Cleaning"],
    link: "https://example.com/transit-story",
    repo: "",
  },
];

export const SKILLS = {
  "Languages & querying": ["SQL", "Python (pandas, NumPy)", "R"],
  Visualisation: ["Power BI", "Tableau", "Excel", "Matplotlib / Seaborn"],
  Methods: ["A/B testing", "Regression", "Forecasting", "Data cleaning"],
  Tools: ["Git", "BigQuery", "Jupyter", "dbt"],
};

// Bars in the hero chart. Any numbers work.
export const HERO_CHART = [
  { label: "Jan", v: 42 },
  { label: "Feb", v: 58 },
  { label: "Mar", v: 51 },
  { label: "Apr", v: 74 },
  { label: "May", v: 69 },
  { label: "Jun", v: 92 },
  { label: "Jul", v: 85 },
];
