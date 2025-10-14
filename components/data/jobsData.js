export const categories = [
  "All",
  "Technology",
  "Business",
  "Creative",
  "Healthcare",
  "Trades",
];

export const jobs = [
  // ===================================
  // Technology (1 - 10)
  // ===================================
  {
    id: 1,
    title: "Frontend Developer (React/Next.js)",
    category: "Technology",
    location: "Lagos",
    shortDesc: "Build responsive UIs with React, Next.js and TailwindCSS.",
    jobType: "Full-time",
    pay: "₦1,000,000 / month",
    longDesc: {
      responsibilities: [
        "Implement responsive user interfaces using React and Next.js.",
        "Translate Figma/Sketch designs into reusable components.",
        "Integrate frontend components with REST/GraphQL APIs.",
        "Optimize UI for performance and accessibility.",
      ],
      requirements: [
        "3+ years of frontend development experience",
        "Proficiency in JavaScript, HTML, CSS and TailwindCSS",
        "Experience with React and Next.js",
        "Familiarity with Git and modern frontend tooling",
      ],
      benefits: [
        "Competitive salary",
        "Flexible work hours",
        "Learning & development budget",
      ],
    },
  },
  {
    id: 2,
    title: "Senior Backend Engineer (Node.js/TypeScript)",
    category: "Technology",
    location: "Remote (Nigeria)",
    shortDesc: "Design and maintain scalable server-side applications.",
    jobType: "Full-time",
    pay: "₦750,000 / month",
    longDesc: {
      responsibilities: [
        "Develop robust APIs and microservices.",
        "Manage MongoDB and PostgreSQL databases.",
        "Implement CI/CD pipelines using Docker and Kubernetes.",
      ],
      requirements: [
        "5+ years with Node.js/TypeScript",
        "Expertise in cloud services (AWS/Azure).",
        "Strong database schema design skills.",
      ],
      benefits: [
        "Annual performance bonus",
        "Full remote setup allowance",
        "Premium health insurance",
      ],
    },
  },
  {
    id: 3,
    title: "DevOps Engineer",
    category: "Technology",
    location: "Abuja",
    shortDesc: "Automate infrastructure and streamline deployment processes.",
    jobType: "Full-time",
    pay: "₦600,000 / month",
    longDesc: {
      responsibilities: [
        "Maintain cloud infrastructure (Terraform/Ansible).",
        "Manage CI/CD systems (Jenkins/GitLab CI).",
        "Monitor system health and security.",
      ],
      requirements: [
        "3+ years of DevOps experience",
        "Proficiency in Linux/Bash scripting",
        "Experience with AWS/GCP and Docker/K8s.",
      ],
      benefits: [
        "Professional certification reimbursement",
        "Unlimited vacation policy",
        "Bi-weekly team lunches",
      ],
    },
  },
  {
    id: 4,
    title: "UI/UX Designer",
    category: "Technology",
    location: "Lagos",
    shortDesc: "Create user-centered designs for web and mobile applications.",
    jobType: "Full-time",
    pay: "₦250,000 / month",
    longDesc: {
      responsibilities: [
        "Conduct user research and usability testing.",
        "Create wireframes, prototypes, and high-fidelity designs.",
        "Maintain design systems and libraries.",
      ],
      requirements: [
        "3+ years in UI/UX design.",
        "Expertise in Figma or Sketch.",
        "Strong portfolio demonstrating design process.",
      ],
      benefits: [
        "Ergonomic office setup",
        "Annual design conference budget",
        "Flexible schedule",
      ],
    },
  },
  {
    id: 5,
    title: "Data Analyst",
    category: "Technology",
    location: "Remote (Global)",
    shortDesc:
      "Analyze complex datasets to provide actionable business insights.",
    jobType: "Full-time",
    pay: "₦450,000 / month",
    longDesc: {
      responsibilities: [
        "Develop and maintain reporting dashboards (Tableau/Power BI).",
        "Write complex SQL queries for data extraction.",
        "Identify trends and patterns in customer behavior.",
      ],
      requirements: [
        "2+ years in data analysis.",
        "Advanced SQL and Excel skills.",
        "Experience with Python/R is a plus.",
      ],
      benefits: [
        "Remote-first culture",
        "Performance bonuses",
        "Subscription to data science platforms",
      ],
    },
  },
  {
    id: 6,
    title: "Mobile App Developer (Flutter)",
    category: "Technology",
    location: "Ibadan",
    shortDesc: "Develop cross-platform mobile applications using Flutter/Dart.",
    jobType: "Full-time",
    pay: "₦320,000 / month",
    longDesc: {
      responsibilities: [
        "Build and deploy mobile apps for iOS and Android.",
        "Integrate with REST APIs.",
        "Ensure code quality and test coverage.",
      ],
      requirements: [
        "2+ years of Flutter/Dart experience.",
        "Familiarity with native platform APIs.",
        "Knowledge of state management solutions.",
      ],
      benefits: [
        "Equity options",
        "Gym membership allowance",
        "On-site cafeteria",
      ],
    },
  },
  {
    id: 7,
    title: "Cybersecurity Analyst",
    category: "Technology",
    location: "Port Harcourt",
    shortDesc: "Monitor systems and protect against security threats.",
    jobType: "Full-time",
    pay: "₦550,000 / month",
    longDesc: {
      responsibilities: [
        "Perform vulnerability assessments and penetration testing.",
        "Respond to security incidents.",
        "Ensure compliance with data protection laws.",
      ],
      requirements: [
        "Relevant security certifications (e.g., CISSP, CompTIA Security+).",
        "3+ years in cybersecurity.",
        "Knowledge of network security protocols.",
      ],
      benefits: [
        "Specialized training budget",
        "Generous paid time off",
        "Relocation assistance",
      ],
    },
  },
  {
    id: 8,
    title: "Machine Learning Engineer",
    category: "Technology",
    location: "Remote (Global)",
    shortDesc: "Develop and deploy scalable AI/ML models.",
    jobType: "Full-time",
    pay: "₦900,000 / month",
    longDesc: {
      responsibilities: [
        "Design and train predictive models.",
        "Integrate models into production systems.",
        "Optimize model performance and efficiency.",
      ],
      requirements: [
        "PhD or Master's in a related field.",
        "Expertise in Python, TensorFlow/PyTorch.",
        "Experience with cloud ML platforms.",
      ],
      benefits: [
        "High-impact research projects",
        "Competitive stock options",
        "Flexible global working hours",
      ],
    },
  },
  {
    id: 9,
    title: "QA Engineer (Automation)",
    category: "Technology",
    location: "Lagos",
    shortDesc: "Build and maintain automated test suites for web applications.",
    jobType: "Full-time",
    pay: "₦280,000 / month",
    longDesc: {
      responsibilities: [
        "Develop test plans and test cases.",
        "Implement automated tests (Cypress/Selenium).",
        "Work closely with development teams.",
      ],
      requirements: [
        "2+ years in QA automation.",
        "Experience with JavaScript or Python.",
        "Familiarity with bug tracking tools (Jira).",
      ],
      benefits: [
        "Bonus for finding critical bugs",
        "Team retreats",
        "Mentorship program",
      ],
    },
  },
  {
    id: 10,
    title: "IT Support Specialist",
    category: "Technology",
    location: "Enugu",
    shortDesc: "Provide technical assistance and support to internal staff.",
    jobType: "Full-time",
    pay: "₦180,000 / month",
    longDesc: {
      responsibilities: [
        "Troubleshoot hardware and software issues.",
        "Manage user accounts and access.",
        "Provide basic network support.",
      ],
      requirements: [
        "CompTIA A+ or equivalent certification.",
        "Excellent communication skills.",
        "Experience with Windows and macOS.",
      ],
      benefits: [
        "Career growth path to SysAdmin",
        "Subsidized lunch",
        "Company paid certifications",
      ],
    },
  },
  // ===================================
  // Business (11 - 20)
  // ===================================
  {
    id: 11,
    title: "Product Manager",
    category: "Business",
    location: "Lagos",
    shortDesc: "Define and execute the roadmap for our flagship product.",
    jobType: "Full-time",
    pay: "₦480,000 / month",
    longDesc: {
      responsibilities: [
        "Gather and prioritize product requirements.",
        "Work with engineering and design teams.",
        "Define KPIs and track product success.",
      ],
      requirements: [
        "4+ years in Product Management.",
        "Experience with Agile methodologies.",
        "Strong analytical and communication skills.",
      ],
      benefits: [
        "Quarterly bonuses",
        "Flexible PTO",
        "Annual international travel budget",
      ],
    },
  },
  {
    id: 12,
    title: "Marketing Specialist (SEO/Content)",
    category: "Business",
    location: "Remote (Nigeria)",
    shortDesc: "Drive organic traffic and grow our content marketing channels.",
    jobType: "Full-time",
    pay: "₦270,000 / month",
    longDesc: {
      responsibilities: [
        "Develop and manage SEO strategy.",
        "Create engaging blog posts and articles.",
        "Analyze content performance using Google Analytics.",
      ],
      requirements: [
        "2+ years in SEO/Content Marketing.",
        "Proficiency with SEMrush/Ahrefs.",
        "Excellent writing and editing skills.",
      ],
      benefits: [
        "Remote work flexibility",
        "Access to premium marketing tools",
        "Performance-based commission",
      ],
    },
  },
  {
    id: 13,
    title: "Financial Analyst",
    category: "Business",
    location: "Abuja",
    shortDesc:
      "Provide financial planning and analysis to support strategic decisions.",
    jobType: "Full-time",
    pay: "₦400,000 / month",
    longDesc: {
      responsibilities: [
        "Prepare budgets and financial forecasts.",
        "Analyze variances and key business drivers.",
        "Support due diligence activities.",
      ],
      requirements: [
        "CFA or relevant Master's degree.",
        "3+ years of financial modeling.",
        "Advanced proficiency in Excel and financial software.",
      ],
      benefits: [
        "401k matching",
        "Annual salary review",
        "Professional membership fees covered",
      ],
    },
  },
  {
    id: 14,
    title: "HR Business Partner",
    category: "Business",
    location: "Port Harcourt",
    shortDesc:
      "Align HR strategy with business objectives for the technical departments.",
    jobType: "Full-time",
    pay: "₦350,000 / month",
    longDesc: {
      responsibilities: [
        "Manage talent acquisition and retention.",
        "Handle employee relations and performance management.",
        "Develop training programs.",
      ],
      requirements: [
        "5+ years as an HR Business Partner.",
        "Deep knowledge of labor laws.",
        "Excellent interpersonal skills.",
      ],
      benefits: [
        "Employee stock purchase plan",
        "Wellness programs",
        "Dedicated HR coaching",
      ],
    },
  },
  {
    id: 15,
    title: "Sales Development Representative (SDR)",
    category: "Business",
    location: "Lagos",
    shortDesc: "Generate qualified leads and book meetings for the sales team.",
    jobType: "Full-time",
    pay: "₦150,000 / month + Commission",
    longDesc: {
      responsibilities: [
        "Identify and research potential clients.",
        "Conduct cold calls and email outreach.",
        "Maintain accurate records in CRM (Salesforce).",
      ],
      requirements: [
        "1+ year in B2B sales/SDR role.",
        "High energy and persistence.",
        "Familiarity with CRM tools.",
      ],
      benefits: [
        "Uncapped commission structure",
        "Career path to Account Executive",
        "Sales training bootcamps",
      ],
    },
  },
  {
    id: 16,
    title: "Operations Manager",
    category: "Business",
    location: "Ibadan",
    shortDesc:
      "Oversee daily operations and improve efficiency across departments.",
    jobType: "Full-time",
    pay: "₦380,000 / month",
    longDesc: {
      responsibilities: [
        "Streamline operational procedures.",
        "Manage vendor relationships and procurement.",
        "Lead process improvement projects.",
      ],
      requirements: [
        "5+ years in Operations Management.",
        "Lean Six Sigma certification preferred.",
        "Strong project management skills.",
      ],
      benefits: [
        "Leadership development programs",
        "Health and dental coverage",
        "Flexible start times",
      ],
    },
  },
  {
    id: 17,
    title: "Legal Counsel",
    category: "Business",
    location: "Lagos",
    shortDesc:
      "Provide legal guidance on corporate governance and compliance matters.",
    jobType: "Full-time",
    pay: "₦650,000 / month",
    longDesc: {
      responsibilities: [
        "Draft and review commercial contracts.",
        "Ensure regulatory compliance.",
        "Manage litigation and external counsel.",
      ],
      requirements: [
        "Licensed Barrister/Solicitor (BL/LLB).",
        "5+ years of corporate legal experience.",
        "Expertise in IP law is a plus.",
      ],
      benefits: [
        "Private office",
        "Executive health package",
        "Discretionary bonus",
      ],
    },
  },
  {
    id: 18,
    title: "Customer Success Manager",
    category: "Business",
    location: "Remote (Africa)",
    shortDesc:
      "Ensure customer satisfaction and drive adoption of our B2B software.",
    jobType: "Full-time",
    pay: "₦320,000 / month",
    longDesc: {
      responsibilities: [
        "Manage a portfolio of key accounts.",
        "Conduct quarterly business reviews (QBRs).",
        "Identify upsell and renewal opportunities.",
      ],
      requirements: [
        "3+ years in Customer Success/Account Management.",
        "Experience with SaaS platforms.",
        "Excellent presentation skills.",
      ],
      benefits: [
        "Travel opportunities (post-COVID)",
        "Commission on renewals",
        "Modern technology allowance",
      ],
    },
  },
  {
    id: 19,
    title: "Business Development Executive",
    category: "Business",
    location: "Lagos",
    shortDesc: "Forge new strategic partnerships and open new market segments.",
    jobType: "Full-time",
    pay: "₦200,000 / month + Commission",
    longDesc: {
      responsibilities: [
        "Identify and evaluate new business opportunities.",
        "Negotiate partnership agreements.",
        "Conduct market analysis and competitive research.",
      ],
      requirements: [
        "Proven track record in Business Development.",
        "Strong network in the industry.",
        "MBA preferred.",
      ],
      benefits: [
        "Car allowance",
        "High-tier commission structure",
        "Access to executive mentorship",
      ],
    },
  },
  {
    id: 20,
    title: "Executive Assistant to the CEO",
    category: "Business",
    location: "Lagos",
    shortDesc:
      "Provide comprehensive administrative and operational support to the CEO.",
    jobType: "Full-time",
    pay: "₦240,000 / month",
    longDesc: {
      responsibilities: [
        "Manage complex calendar and travel arrangements.",
        "Prepare presentations and reports.",
        "Handle confidential correspondence.",
      ],
      requirements: [
        "5+ years supporting C-level executives.",
        "Discretion and professionalism.",
        "Proficiency in MS Office Suite.",
      ],
      benefits: [
        "Discretionary annual bonus",
        "Gym membership",
        "Opportunity for international travel",
      ],
    },
  },
  // ===================================
  // Creative (21 - 30)
  // ===================================
  {
    id: 21,
    title: "Motion Graphics Designer",
    category: "Creative",
    location: "Remote (Nigeria)",
    shortDesc:
      "Create compelling animated videos for marketing and social media.",
    jobType: "Contract",
    pay: "₦180,000 / project",
    longDesc: {
      responsibilities: [
        "Design and animate explainer videos and social content.",
        "Work with sound and video editors.",
        "Maintain brand consistency in motion assets.",
      ],
      requirements: [
        "3+ years experience in motion design.",
        "Expertise in After Effects and Premiere Pro.",
        "Strong portfolio required.",
      ],
      benefits: [
        "Flexible contract terms",
        "Project completion bonuses",
        "Remote collaboration tools provided",
      ],
    },
  },
  {
    id: 22,
    title: "Lead Photographer",
    category: "Creative",
    location: "Lagos/Travel",
    shortDesc: "Capture high-quality, professional images for major campaigns.",
    jobType: "Full-time",
    pay: "₦350,000 / month",
    longDesc: {
      responsibilities: [
        "Plan and execute photo shoots (studio and on-location).",
        "Perform advanced image retouching.",
        "Manage photography equipment inventory.",
      ],
      requirements: [
        "5+ years professional photography experience.",
        "Expertise in Adobe Lightroom/Photoshop.",
        "Valid driver's license and passport.",
      ],
      benefits: ["Equipment allowance", "Travel stipend", "Creative freedom"],
    },
  },
  {
    id: 23,
    title: "Copywriter (B2B Tech)",
    category: "Creative",
    location: "Abuja",
    shortDesc:
      "Write clear, persuasive copy for websites, emails, and case studies.",
    jobType: "Full-time",
    pay: "₦280,000 / month",
    longDesc: {
      responsibilities: [
        "Develop messaging strategy for technical products.",
        "Write marketing copy across various channels.",
        "Ensure consistency in brand voice.",
      ],
      requirements: [
        "3+ years of professional copywriting.",
        "Portfolio demonstrating technical writing ability.",
        "Knowledge of SEO best practices.",
      ],
      benefits: [
        "Generous paid sick leave",
        "Creative team collaboration events",
        "Access to industry workshops",
      ],
    },
  },
  {
    id: 24,
    title: "Video Editor",
    category: "Creative",
    location: "Lagos",
    shortDesc:
      "Assemble and fine-tune footage into compelling narratives for digital platforms.",
    jobType: "Full-time",
    pay: "₦220,000 / month",
    longDesc: {
      responsibilities: [
        "Edit long and short-form video content.",
        "Manage media assets and archives.",
        "Collaborate with directors and producers.",
      ],
      requirements: [
        "2+ years experience in professional video editing.",
        "Proficiency in Final Cut Pro or Adobe Premiere.",
        "Familiarity with color grading and audio mixing.",
      ],
      benefits: [
        "High-spec editing workstation",
        "Access to stock media libraries",
        "Regular training on new software",
      ],
    },
  },
  {
    id: 25,
    title: "Creative Director",
    category: "Creative",
    location: "Lagos",
    shortDesc:
      "Lead the creative vision and direction for all brand initiatives.",
    jobType: "Full-time",
    pay: "₦700,000 / month",
    longDesc: {
      responsibilities: [
        "Oversee design, content, and video teams.",
        "Set the overall creative strategy and ensure quality.",
        "Present concepts to executive leadership.",
      ],
      requirements: [
        "10+ years of creative leadership experience.",
        "Demonstrated success managing large campaigns.",
        "Outstanding communication and motivational skills.",
      ],
      benefits: [
        "Executive bonus structure",
        "Significant influence on company strategy",
        "Dedicated professional development fund",
      ],
    },
  },
  {
    id: 26,
    title: "Illustrator/Concept Artist",
    category: "Creative",
    location: "Remote (Global)",
    shortDesc:
      "Design unique characters, environments, and assets for digital products.",
    jobType: "Contract",
    pay: "₦50,000 - 150,000 / asset",
    longDesc: {
      responsibilities: [
        "Create high-quality illustrations and concept art.",
        "Work closely with game/product developers.",
        "Meet deadlines for production milestones.",
      ],
      requirements: [
        "Strong digital painting and drawing skills.",
        "Expertise in Adobe Illustrator/Photoshop or Procreate.",
        "Portfolio specializing in relevant style.",
      ],
      benefits: [
        "Flexible deadlines",
        "Opportunity for long-term project work",
        "Global remote team",
      ],
    },
  },
  {
    id: 27,
    title: "Brand Strategist",
    category: "Creative",
    location: "Lagos",
    shortDesc:
      "Define and reinforce the company's brand identity and market positioning.",
    jobType: "Full-time",
    pay: "₦450,000 / month",
    longDesc: {
      responsibilities: [
        "Conduct brand audits and competitive analysis.",
        "Develop brand guidelines and communication strategies.",
        "Manage brand partnerships and activations.",
      ],
      requirements: [
        "5+ years in brand strategy or marketing.",
        "Experience working with global brands.",
        "Data-driven approach to brand building.",
      ],
      benefits: [
        "Performance-based equity",
        "Comprehensive travel allowance",
        "Paid sabbatical after 5 years",
      ],
    },
  },
  {
    id: 28,
    title: "Social Media Manager",
    category: "Creative",
    location: "Remote (Nigeria)",
    shortDesc:
      "Manage and grow all company social media channels and campaigns.",
    jobType: "Full-time",
    pay: "₦190,000 / month",
    longDesc: {
      responsibilities: [
        "Create and schedule daily content.",
        "Monitor engagement and analyze metrics.",
        "Manage paid social media advertising.",
      ],
      requirements: [
        "2+ years managing professional social media accounts.",
        "Familiarity with Hootsuite/Buffer.",
        "Strong understanding of platform algorithms.",
      ],
      benefits: [
        "Free subscription to social media analytics tools",
        "Annual personal growth budget",
        "Flexible holiday schedule",
      ],
    },
  },
  {
    id: 29,
    title: "Print Production Specialist",
    category: "Creative",
    location: "Ibadan",
    shortDesc:
      "Manage the design and production of high-quality printed materials.",
    jobType: "Full-time",
    pay: "₦210,000 / month",
    longDesc: {
      responsibilities: [
        "Prepare files for offset and digital printing.",
        "Liaise with external print vendors.",
        "Ensure color accuracy and quality control.",
      ],
      requirements: [
        "3+ years in print production or graphic design.",
        "Expertise in Adobe InDesign and pre-press setup.",
        "Strong attention to detail.",
      ],
      benefits: [
        "Dedicated hardware budget",
        "Company-paid gym membership",
        "Collaborative studio environment",
      ],
    },
  },
  {
    id: 30,
    title: "Junior Graphic Designer",
    category: "Creative",
    location: "Lagos",
    shortDesc:
      "Assist the senior design team with daily creative tasks and asset creation.",
    jobType: "Full-time",
    pay: "₦160,000 / month",
    longDesc: {
      responsibilities: [
        "Design social media graphics and basic web assets.",
        "Format presentations and documents.",
        "Organize digital asset libraries.",
      ],
      requirements: [
        "1+ year in a design role or internship.",
        "Proficiency in Adobe Creative Suite.",
        "Willingness to learn and take direction.",
      ],
      benefits: [
        "Dedicated mentor",
        "Full Adobe Creative Cloud license",
        "Clear path for career progression",
      ],
    },
  },
  // ===================================
  // Healthcare (31 - 40)
  // ===================================
  {
    id: 31,
    title: "Registered Nurse (RN)",
    category: "Healthcare",
    location: "Abuja",
    shortDesc:
      "Provide compassionate patient care in a fast-paced hospital setting.",
    jobType: "Full-time",
    pay: "₦280,000 / month",
    longDesc: {
      responsibilities: [
        "Administer medication and treatments.",
        "Monitor and record patient vital signs.",
        "Educate patients and families on health management.",
      ],
      requirements: [
        "Current RN license.",
        "2+ years of clinical experience.",
        "BLS/ACLS certification.",
      ],
      benefits: [
        "Shift differential pay",
        "Continuing education credits",
        "Comprehensive medical coverage",
      ],
    },
  },
  {
    id: 32,
    title: "Hospital Administrator",
    category: "Healthcare",
    location: "Lagos",
    shortDesc:
      "Manage the non-clinical operations of a mid-sized private hospital.",
    jobType: "Full-time",
    pay: "₦500,000 / month",
    longDesc: {
      responsibilities: [
        "Oversee budgeting and financial planning.",
        "Ensure compliance with healthcare regulations.",
        "Manage facility and staff scheduling.",
      ],
      requirements: [
        "Master's in Healthcare Administration (MHA) preferred.",
        "5+ years in hospital management.",
        "Strong leadership skills.",
      ],
      benefits: [
        "Performance bonuses",
        "Executive retreat access",
        "Generous retirement plan",
      ],
    },
  },
  {
    id: 33,
    title: "Pharmacist",
    category: "Healthcare",
    location: "Port Harcourt",
    shortDesc: "Dispense medication and counsel patients on proper drug usage.",
    jobType: "Full-time",
    pay: "₦320,000 / month",
    longDesc: {
      responsibilities: [
        "Verify prescription accuracy.",
        "Maintain drug inventory and security.",
        "Provide immunization services.",
      ],
      requirements: [
        "Current state Pharmacist license.",
        "Doctor of Pharmacy (Pharm.D.) or equivalent.",
        "Strong patient counseling skills.",
      ],
      benefits: [
        "Relocation package offered",
        "Uniform allowance",
        "Flexible weekend shifts",
      ],
    },
  },
  {
    id: 34,
    title: "Medical Laboratory Technician",
    category: "Healthcare",
    location: "Enugu",
    shortDesc: "Perform diagnostic tests and analyze clinical samples.",
    jobType: "Full-time",
    pay: "₦200,000 / month",
    longDesc: {
      responsibilities: [
        "Collect and process biological specimens.",
        "Operate and maintain lab equipment.",
        "Report test results accurately and promptly.",
      ],
      requirements: [
        "MLT certification.",
        "Familiarity with clinical pathology.",
        "Strong attention to detail.",
      ],
      benefits: [
        "State-of-the-art lab equipment",
        "Opportunities for specialization",
        "Paid professional liability insurance",
      ],
    },
  },
  {
    id: 35,
    title: "Physical Therapist (PT)",
    category: "Healthcare",
    location: "Ibadan",
    shortDesc:
      "Develop treatment plans to help patients recover from injuries or illnesses.",
    jobType: "Full-time",
    pay: "₦300,000 / month",
    longDesc: {
      responsibilities: [
        "Evaluate patients' physical condition and limitations.",
        "Implement individualized therapy programs.",
        "Document patient progress and goals.",
      ],
      requirements: [
        "Doctor of Physical Therapy (DPT) or equivalent.",
        "Current PT license.",
        "Experience in orthopedic rehabilitation.",
      ],
      benefits: [
        "Caseload management support",
        "Access to therapy equipment",
        "Continuing medical education funding",
      ],
    },
  },
  {
    id: 36,
    title: "Mental Health Counselor",
    category: "Healthcare",
    location: "Remote (Nigeria)",
    shortDesc:
      "Provide virtual counseling and support to clients dealing with mental health issues.",
    jobType: "Part-time",
    pay: "₦10,000 / hour",
    longDesc: {
      responsibilities: [
        "Conduct virtual therapy sessions.",
        "Develop personalized treatment plans.",
        "Maintain clinical records and ethical standards.",
      ],
      requirements: [
        "Licensed Counselor (LPC/LMHC).",
        "3+ years of clinical experience.",
        "Familiarity with teletherapy platforms.",
      ],
      benefits: [
        "Flexible scheduling (work from home)",
        "Clinical supervision provided",
        "Access to secure telehealth platform",
      ],
    },
  },
  {
    id: 37,
    title: "Biomedical Engineer",
    category: "Healthcare",
    location: "Lagos",
    shortDesc: "Design, maintain, and manage medical equipment and technology.",
    jobType: "Full-time",
    pay: "₦450,000 / month",
    longDesc: {
      responsibilities: [
        "Install and calibrate medical devices.",
        "Troubleshoot equipment malfunctions.",
        "Train clinical staff on equipment use.",
      ],
      requirements: [
        "Bachelor's in Biomedical Engineering.",
        "2+ years of experience in a hospital setting.",
        "Knowledge of regulatory standards.",
      ],
      benefits: [
        "Technical training programs",
        "On-call bonus pay",
        "Opportunities for R&D involvement",
      ],
    },
  },
  {
    id: 38,
    title: "Radiology Technician",
    category: "Healthcare",
    location: "Abuja",
    shortDesc: "Perform diagnostic imaging procedures (X-rays, MRIs) safely.",
    jobType: "Full-time",
    pay: "₦250,000 / month",
    longDesc: {
      responsibilities: [
        "Operate imaging equipment.",
        "Ensure patient safety during procedures.",
        "Maintain quality control records.",
      ],
      requirements: [
        "Certified Radiologic Technologist (ARRT).",
        "Experience with various imaging modalities.",
        "Strong patient care skills.",
      ],
      benefits: [
        "Annual uniform stipend",
        "Overtime opportunities",
        "Modern imaging suite",
      ],
    },
  },
  {
    id: 39,
    title: "Public Health Specialist",
    category: "Healthcare",
    location: "Remote (Nigeria)",
    shortDesc:
      "Design and implement community-based health education programs.",
    jobType: "Contract",
    pay: "₦350,000 / month",
    longDesc: {
      responsibilities: [
        "Conduct community health needs assessments.",
        "Develop health promotion materials.",
        "Liaise with NGOs and government agencies.",
      ],
      requirements: [
        "Master's in Public Health (MPH).",
        "3+ years of fieldwork experience.",
        "Excellent presentation and research skills.",
      ],
      benefits: [
        "Travel allowance for fieldwork",
        "Project-based flexibility",
        "Impactful community work",
      ],
    },
  },
  {
    id: 40,
    title: "Dental Hygienist",
    category: "Healthcare",
    location: "Lagos",
    shortDesc:
      "Provide preventative oral care and educate patients on dental hygiene.",
    jobType: "Full-time",
    pay: "₦220,000 / month",
    longDesc: {
      responsibilities: [
        "Perform dental cleanings and scaling.",
        "Take and develop dental radiographs.",
        "Educate patients on oral care techniques.",
      ],
      requirements: [
        "Licensed Dental Hygienist.",
        "Experience with pediatric and adult patients.",
        "Strong knowledge of dental software.",
      ],
      benefits: [
        "Profit-sharing scheme",
        "Team social events",
        "Modern dental clinic environment",
      ],
    },
  },
  // ===================================
  // Trades (41 - 50)
  // ===================================
  {
    id: 41,
    title: "Certified Electrician",
    category: "Trades",
    location: "Lagos",
    shortDesc: "Install, maintain, and repair electrical wiring and systems.",
    jobType: "Full-time",
    pay: "250,000 / month",
    longDesc: {
      responsibilities: [
        "Install new electrical systems in residential/commercial properties.",
        "Troubleshoot power outages and electrical faults.",
        "Ensure compliance with safety codes.",
      ],
      requirements: [
        "Valid Electrician's license/certification.",
        "5+ years of hands-on experience.",
        "Knowledge of local electrical codes.",
      ],
      benefits: ["Company service vehicle", "Tool allowance", "Overtime pay"],
    },
  },
  {
    id: 42,
    title: "Plumber (Commercial)",
    category: "Trades",
    location: "Abuja",
    shortDesc:
      "Perform complex plumbing installations and repairs for large buildings.",
    jobType: "Contract",
    pay: "280,000 / month",
    longDesc: {
      responsibilities: [
        "Install and maintain water supply and drainage systems.",
        "Repair burst pipes and blockages.",
        "Read blueprints and schematics.",
      ],
      requirements: [
        "Journeyman Plumber certification.",
        "7+ years of commercial plumbing experience.",
        "Familiarity with backflow prevention.",
      ],
      benefits: [
        "Long-term contract stability",
        "Flexible project scheduling",
        "Safety training provided",
      ],
    },
  },
  {
    id: 43,
    title: "HVAC Technician",
    category: "Trades",
    location: "Port Harcourt",
    shortDesc:
      "Install and service heating, ventilation, and air conditioning systems.",
    jobType: "Full-time",
    pay: "300,000 / month",
    longDesc: {
      responsibilities: [
        "Diagnose and repair HVAC system issues.",
        "Perform preventative maintenance.",
        "Install new AC units and ventilation systems.",
      ],
      requirements: [
        "HVAC certification (e.g., EPA 608).",
        "4+ years of field experience.",
        "Ability to work in various weather conditions.",
      ],
      benefits: [
        "Smartphone and data plan",
        "Annual boot allowance",
        "On-call rotation bonus",
      ],
    },
  },
  {
    id: 44,
    title: "Welder/Fabricator",
    category: "Trades",
    location: "Ibadan",
    shortDesc:
      "Fabricate and repair metal structures using various welding techniques.",
    jobType: "Full-time",
    pay: "220,000 / month",
    longDesc: {
      responsibilities: [
        "Perform MIG, TIG, and stick welding.",
        "Read and interpret engineering drawings.",
        "Maintain welding equipment and comply with safety rules.",
      ],
      requirements: [
        "Certified Welder status.",
        "3+ years of professional welding experience.",
        "Strong spatial reasoning skills.",
      ],
      benefits: [
        "Access to modern fabrication shop",
        "Safety equipment provided",
        "Health insurance subsidy",
      ],
    },
  },
  {
    id: 45,
    title: "Automotive Mechanic",
    category: "Trades",
    location: "Lagos",
    shortDesc:
      "Perform maintenance and repairs on a wide range of vehicle types.",
    jobType: "Full-time",
    pay: "₦180,000 / month",
    longDesc: {
      responsibilities: [
        "Diagnose engine and transmission issues.",
        "Perform routine oil changes and tune-ups.",
        "Repair brake and suspension systems.",
      ],
      requirements: [
        "Relevant technical school certificate.",
        "2+ years working in a garage setting.",
        "Proficiency with diagnostic tools.",
      ],
      benefits: [
        "Clean, modern workshop",
        "Discounted parts and service",
        "Opportunities for master mechanic certification",
      ],
    },
  },
  {
    id: 46,
    title: "Carpenter/Joiner",
    category: "Trades",
    location: "Enugu",
    shortDesc: "Construct, install, and repair wooden structures and fixtures.",
    jobType: "Full-time",
    pay: "₦200,000 / month",
    longDesc: {
      responsibilities: [
        "Frame walls, roofs, and door openings.",
        "Install custom cabinetry and trim work.",
        "Operate woodworking tools safely.",
      ],
      requirements: [
        "5+ years of carpentry experience.",
        "Ability to read construction blueprints.",
        "Attention to detail and precision.",
      ],
      benefits: [
        "Retirement savings match",
        "Paid vacation during low season",
        "Year-round project availability",
      ],
    },
  },
  {
    id: 47,
    title: "Heavy Equipment Operator",
    category: "Trades",
    location: "Remote (Project-based)",
    shortDesc:
      "Operate heavy machinery (excavators, bulldozers) on construction sites.",
    jobType: "Contract",
    pay: "₦350,000 / month",
    longDesc: {
      responsibilities: [
        "Operate equipment safely and efficiently.",
        "Perform daily equipment checks and maintenance.",
        "Follow site grading and excavation plans.",
      ],
      requirements: [
        "Valid operator's license/certification.",
        "3+ years operating heavy machinery.",
        "Willingness to travel to remote sites.",
      ],
      benefits: [
        "Per diem allowance for travel",
        "Housing provided on remote sites",
        "High hourly wage for overtime",
      ],
    },
  },
  {
    id: 48,
    title: "Mason/Tiler",
    category: "Trades",
    location: "Lagos",
    shortDesc:
      "Lay brick, stone, block, and tile for residential and commercial projects.",
    jobType: "Full-time",
    pay: "₦230,000 / month",
    longDesc: {
      responsibilities: [
        "Prepare surfaces and mix mortar/grout.",
        "Lay materials accurately and neatly.",
        "Repair and restore existing masonry.",
      ],
      requirements: [
        "4+ years of professional masonry experience.",
        "Knowledge of various materials and techniques.",
        "Physically fit and able to lift heavy materials.",
      ],
      benefits: [
        "Steady, consistent work schedule",
        "Apprenticeship opportunities for growth",
        "Access to specialized tools",
      ],
    },
  },
  {
    id: 49,
    title: "Residential Painter",
    category: "Trades",
    location: "Abuja",
    shortDesc:
      "Prepare surfaces and apply paint/stain to interior and exterior homes.",
    jobType: "Full-time",
    pay: "₦170,000 / month",
    longDesc: {
      responsibilities: [
        "Power washing, scraping, and patching surfaces.",
        "Apply paint/stain using brushes, rollers, and sprayers.",
        "Maintain a clean and safe work area.",
      ],
      requirements: [
        "2+ years of professional painting experience.",
        "Own basic hand tools.",
        "Excellent color matching skills.",
      ],
      benefits: [
        "Bonuses for project completion ahead of schedule",
        "Paid company holidays",
        "Team-oriented work environment",
      ],
    },
  },
  {
    id: 50,
    title: "Facilities Maintenance Technician",
    category: "Trades",
    location: "Lagos",
    shortDesc:
      "Handle general repairs and upkeep for a large corporate office building.",
    jobType: "Full-time",
    pay: "₦240,000 / month",
    longDesc: {
      responsibilities: [
        "Perform minor electrical, plumbing, and carpentry repairs.",
        "Conduct preventative maintenance checks.",
        "Respond to facility repair requests.",
      ],
      requirements: [
        "Broad knowledge across multiple trades.",
        "3+ years of facilities maintenance experience.",
        "Certification in a relevant trade is a plus.",
      ],
      benefits: [
        "Generous paid time off",
        "Direct deposit pay",
        "Company-provided uniform and PPE",
      ],
    },
  },
];
