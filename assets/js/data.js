// Sidebar Data

const skillCategories = [
   { label: "Primary", value: "Java, Kotlin, Spring, Hibernate, Apache Kafka, SQL, Redis" },
   { label: "Infrastructure", value: "Kubernetes, Docker, AWS, Linux" },
   { label: "Frontend", value: "TypeScript, React, Tailwind" },
   { label: "Tooling", value: "Gradle, Maven, GitHub Actions, Prometheus, Grafana" },
   { label: "Other", value: "PCI DSS, ISO 8583" }
];

const details = [
   { label: "Location", value: "Remote (Bali, ID)" },
   { label: "Timezone", value: "UTC+8" },
   { label: "Experience", value: "8+ years" },
   { label: "Education", value: "BSc in Automation" },
];

const languages = [
   { name: "English", level: "Fluent" },
   { name: "Russian", level: "Native" },
];


/**
 * Resume Page
 */

// Experience Data

const jobsList = [
      {
      role: "Staff Engineer",
      company: "Monetech Servicios",
      period: "Jun 2025 - Present",
      type: "Full-time",

      description:
         "Backend engineer embedded across multiple teams at a Mexican fintech startup.",
      highlights: [
         "Designed CONDUSEF-compliant installment loan calculators — regulatory logic that has to be correct in ways a compiler can't verify",
         "Architecture, ADR design, BRD analysis, external system integrations",
         "Cross-functional unblocking: QA, infra, ops, PMs, C-suite",
         "Observability, metrics, and technical guidance across the team"
      ],
   },
   {
      role: "Co-Founder · Code & Ops",
      company: "Kafbat",
      period: "Mar 2024 - Present",
      type: "Open Source",

      description:
         "Forked kafka-ui as an independent community project. Now the primary maintained successor with 2k+ stars.",
      highlights: [
         "Product direction, architecture, community management",
         "Supporting a paying user base on an open-source model",
      ],
   },
   {
      role: "Java Developer",
      company: "Consulting",
      period: "Apr 2024 - Jun 2025",
      type: "Contract",

      description:
         "Built high-load video streaming and metadata platform.",
      highlights: [
         "Java, Spring, Kafka, Flux, JOOQ",
      ],
   },
   {
      role: "Engineering Lead & Core Maintainer",
      company: "Provectus",
      period: "Jul 2021 - Sep 2023",
      type: "Full-time",

      description:
         "Led technical direction of kafka-ui, the leading open-source Kafka management tool. Grew it to 10k+ GitHub stars.",
      highlights: [
         "Product and technical leadership for a geographically dispersed team",
         "Community management: GitHub, end-user support, OSS community",
      ],
   },
   {
      role: "Java Fullstack Developer",
      company: "BPC Banking Technologies",
      period: "Mar 2018 - Jul 2021",
      type: "Full-time",

      description:
         "Built high-load payment and e-commerce systems for financial institutions worldwide.",
      highlights: [
         "Full project lifecycle for Moscow's largest public transport app and a major bank's payment aggregator",
         "Bulk recurring card payment processing",
         "Core contributor to the country's largest payment processing gateway",
      ],
   },
   {
      role: "Open Source",
      company: "Independent",
      period: "2013 - 2015",
      type: "Freelance",

      description:
         "Contributed to various open-source initiatives within the Minecraft server-side development ecosystem.",
      highlights: [
         "Contributions to Essentials, LWC, Griswold, AdminCMD, Bukkit-SSHD",
      ],
   },
];


/**
 * Projects Page
 */

// Projects
const projectsList = [
   {
      name: "Kafbat UI",
      category: "Developer Tools",
      role: "Core Maintainer & Lead",
      date: "2024",
      stars: "2k",

      description:
         "Independent community fork of kafka-ui. Primary maintained successor.",
      website: "https://github.com/kafbat/kafka-ui",
   },
   {
      name: "UI for Apache Kafka",
      category: "Developer Tools",
      role: "Technical Lead, Core Contributor",
      date: "2021",
      stars: "10k",

      description:
         "The original open-source Kafka management UI, grown to 10k+ stars at Provectus.",
      website: "https://github.com/provectus/kafka-ui",
   },
   {
      name: "OpenDataDiscovery Platform",
      category: "Data Discovery",
      role: "Contributor",
      date: "2022",
      stars: "1k",

      description:
         "First open-source data discovery and observability platform. Occasional contributions.",
      website: "https://github.com/opendatadiscovery/odd-platform",
   },
   {
      name: "Spring Framework",
      category: "Framework",
      role: "Contributor",
      date: "2020",
      stars: "40k",

      description:
         "Minor contributions to spring-security, spring-boot, spring-ldap.",
      website: "https://github.com/spring-projects",
   },
];
