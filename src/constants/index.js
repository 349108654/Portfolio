const navLinks = [
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "./images/ideas.svg" },
  { text: "Concepts", imgPath: "./images/concepts.svg" },
  { text: "Designs", imgPath: "./images/designs.svg" },
  { text: "Code", imgPath: "./images/code.svg" },
  { text: "Ideas", imgPath: "./images/ideas.svg" },
  { text: "Concepts", imgPath: "./images/concepts.svg" },
  { text: "Designs", imgPath: "./images/designs.svg" },
  { text: "Code", imgPath: "./images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "./images/logos/company-logo-1.png",
  },
  {
    imgPath: "./images/logos/company-logo-2.png",
  },
  {
    imgPath: "./images/logos/company-logo-3.png",
  },
  {
    imgPath: "./images/logos/company-logo-4.png",
  },
  {
    imgPath: "./images/logos/company-logo-5.png",
  },
  {
    imgPath: "./images/logos/company-logo-6.png",
  },
  {
    imgPath: "./images/logos/company-logo-7.png",
  },
  {
    imgPath: "./images/logos/company-logo-8.png",
  },
  {
    imgPath: "./images/logos/company-logo-9.png",
  },
  {
    imgPath: "./images/logos/company-logo-10.png",
  },
  {
    imgPath: "./images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "./images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "./images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "./images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "./images/logos/react.png",
  },
  {
    name: "Python",
    imgPath: "./images/logos/python.svg",
  },
  {
    name: "Node.js",
    imgPath: "./images/logos/node.png",
  },
  // {
  //   name: "Three.js",
  //   imgPath: "./images/logos/three.png",
  // },
  {
    name: "C#.NET",
    imgPath: "./images/logos/csharp-icon-small.png",
  },
  {
    name: "SQL",
    imgPath: "./images/logos/sql-small-icon.png",
  },
  // {
  //   name: "Git",
  //   imgPath: "./images/logos/git.svg",
  // },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "",
    imgPath: "",
    logoPath: "./images/nrc-logo-modified.png",
    title: "Co-op Student: Full Stack AI Developer",
    date: "January 2025 - April 2025",
    company: "National Research Council Canada",
    responsibilities: [
      "Developed RESTful APIs using ASP.NET MVC Core and Entity Framework in C#",
      "Trained and fine-tuned a machine learning NLP model using PyTorch, Scikit-learn, Hugging Face, and NumPy to assess semantic similarity, optimizing model accuracy to 98.8%.",
      "Built 5+ dynamic frontend modules using React, TypeScript, and Next.js",
      // "Designed and optimized a relational database in Azure SQL, writing SQL scripts and stored procedures to improve data accessibility and streamline workflow efficiency.",
      // "Performed data preprocessing and feature engineering using Pandas and SciPy, applying statistical analysis and AER (Alignment Error Rate) calculations to enhance predictive accuracy.",
      "Implemented ML pipelines for data ingestion, model training, deployment using TensorFlow and Scikit-learn",
      // "Designed microservices architecture, breaking down uniform applications to improve scalability, and deployed services using Docker",
    ],
  },
  {
    review: "",
    imgPath: "",
    logoPath: "./images/interaptix-logo.png",
    title: "Software QA/QC Engineer",
    date: "May 2024 - August 2024",
    company: "Interaptix Augmented Reality",
    responsibilities: [
      "Implemented test scripts for end-to-end unit testing of the AptixAR portal using Cypress",
      "Conducted comparative analysis of 3D-Gaussian splats using scan data and Python Pandas, performing data analysis and visualization",
      "Enhanced test plans and cases for regression testing throughout the Software Development Life Cycle, increasing test coverage by 20%",
    ],
  },
  {
    review: "",
    imgPath: "",
    logoPath: "./images/flashcoding-logo.png",
    title: "Software Developer",
    date: "December 2023 - April 2024",
    company: "Flash Coding",
    responsibilities: [
      "Developed Share Office Details page using React.js, Javascript, and Tailwind CSS to deliver a responsive and intuitive user experience",
      "Integrated FedEx delivery functionalities by building RESTful APIs in Node.js, establishing routes to interact with the FedEx API and updating the PostgreSQL database",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "./images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "./images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "./images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "./images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "./images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "./images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "./images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "./images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "./images/client6.png",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "./images/insta.png",
  // },
  // {
  //   name: "fb",
  //   imgPath: "./images/fb.png",
  // },
  // {
  //   name: "x",
  //   imgPath: "./images/x.png",
  // },
  {
    name: "linkedin",
    imgPath: "./images/linkedin.png",
    url: "https://www.linkedin.com/in/ellie-liang-9397a92b2/"
  },
  {
    name: "github",
    imgPath: "./images/github1.png",
    url: "https://github.com/349108654"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
