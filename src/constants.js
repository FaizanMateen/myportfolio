// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import reactnativeLogo from "./assets/tech_logo/reactnative.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import RLogo from "./assets/tech_logo/Rlogo.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import styledcomponentLogo from "./assets/tech_logo/styledcomponent.png";

// Education Section Logo's
import lpuLogo from "./assets/education_logo/lpu_logo.png";
import pdaLogo from "./assets/education_logo/pda_logo.jpeg";
import alsharayLogo from "./assets/education_logo/alsharay_logo.png";
import iisjLogo from "./assets/education_logo/iisj_logo.jpeg";

// Project Section Logo's
import adventuremate from "./assets/work_logo/adventuremate.PNG";
import wildoasisclient from "./assets/work_logo/wildoasisclient.PNG";
import wildoasisadmin from "./assets/work_logo/wild_oasis_admin.PNG";
import fastpizza from "./assets/work_logo/fastpizza.PNG";
import silentwitness from "./assets/work_logo/silentwitness.PNG";
import todayilearned from "./assets/work_logo/todayilearned.PNG";
import worldwise from "./assets/work_logo/worldwise.PNG";
import usepopcorn from "./assets/work_logo/usepopcorn.PNG";
import nexter from "./assets/work_logo/nexter.PNG";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Styled Components", logo: styledcomponentLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "React Native", logo: reactnativeLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "R", logo: RLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: lpuLogo,
    school: "LPU University, Jhalandar",
    date: "Sept 2023 - Aug 2025",
    grade: "7 CGPA",
    desc: "I have completed my MBA in IT Management and Marketing from LPU University, Jhalandar, Punjab. During my time at LPU, I gained a strong foundation in IT Management, Marketing, and Digital Marketing. I have spent time learning and gaining insights into how businesses leverage technology and strategy to grow. Alongside, my strong background in Web and Mobile Development equips me with practical technical skills that complement my MBA journey at LPU, enabling me to bridge the gap between management concepts and digital solutions. ",
    degree: "Master of Bussiness Administration - MBA",
  },
  {
    id: 1,
    img: pdaLogo,
    school: "PDA College, Gulbarga",
    date: "Sept 2018 - Aug 2021",
    grade: "71%",
    desc: "I completed my Bachelor’s degree in Computer Science (B.Tech) from PDA College, Gulbarga. During my studies, I gained a strong foundation in core subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also actively participated in workshops and technical events, which helped me sharpen my skills and apply theoretical concepts in practical settings. Additionally, my academic journey at PDA College played a significant role in enhancing my technical expertise and contributing to my overall professional growth.",
    degree: "B.Tech (Computer Science Engineering)",
  },
  {
    id: 2,
    img: alsharayLogo,
    school: "Al Sharay Pu College, Gulbarga",
    date: "Apr 2018 - March 2019",
    grade: "70%",
    desc: "I completed my class 12 education from Al Sharay Pu College, Gulbarga, India. under the CBSE board, where I studied Physics, Chemistry, Mathematics and Biology (PCMB)",
    degree: "CBSE(XII) - PCMB",
  },
  {
    id: 3,
    img: iisjLogo,
    school: "International Indian School Jeddah, KSA",
    date: "Apr 2016 - March 2017",
    grade: "72.2%",
    desc: "I completed my class 10 education from International Indian School Jeddah, Jeddah, KSA. under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Adveture Mate",
    description:
      "A simple and engaging web application that helps travelers plan and manage their adventures. AdventureMate offers destination details, tour guide details, and traveler reviews in one place. With secure Stripe payments, users can easily book and pay, making trip planning smooth and hassle-free.",
    image: adventuremate,
    tags: ["Nodejs", "Express", "MongoDB", "PUG", "API"],
    github: "https://github.com/FaizanMateen/AdventureMate",
    webapp: "https://adventure-mate.onrender.com/",
  },
  {
    id: 1,
    title: "Wild Oasis Guest",
    description:
      "A simple and user-friendly web application that allows guests to seamlessly book their stays. The Wild Oasis client-side app features secure Google login for quick access, enabling guests to view available cabins and choose their preferred dates with ease. With its clean and responsive design, the app ensures a smooth booking experience from start to finish.",
    image: wildoasisclient,
    tags: ["React JS", "Next Js", "JavaScript", "Supabase"],
    github: "https://github.com/FaizanMateen/wild-oasis-guest-side",
    webapp: "https://wild-oasis-guest-side.vercel.app/",
  },
  {
    id: 2,
    title: "Wild Oasis Admin",
    description:
      "A web application for hotel staff to manage bookings, cabin availability, and guest check-ins/check-outs. The Wild Oasis admin app features a clear dashboard, secure login, and easy-to-use management tools, helping staff run hotel operations efficiently.",
    image: wildoasisadmin,
    tags: [
      "React JS",
      "Styled Component",
      "Tanstack Query",
      "JavaScript",
      "Supabase",
    ],
    github: "https://github.com/FaizanMateen/the-wild-oasis",
    webapp: "https://the-wild-oasis-originals.netlify.app/dashboard",
  },
  {
    id: 3,
    title: "Silent Witness",
    description:
      "Silent Witness is a web application that lets users anonymously submit incident reports through a form, including images, without revealing their identity. On the other side, police officers can access these reports and update their status as 'in progress' or 'resolved.' The app includes role-based access: lower-ranked officers can view cases, while higher-ranked officers unlock additional features. Only admins can delete bogus reports and promote users to access special features, ensuring secure and organized incident management.",
    image: silentwitness,
    tags: ["React JS", "Redux Toolkit", "Validation", "Supabase", "Javascript"],
    github: "https://github.com/FaizanMateen/silent-witness",
    webapp: "https://silentwitness.netlify.app/home",
  },
  {
    id: 4,
    title: "React Fast Pizza",
    description:
      "A web application for customers to book pizzas and place delivery orders with ease. The Fast pizza website is built with React.js and Tailwind CSS, featuring a clean interface and GPS-based location detection for accurate deliveries. It also collects user details for order confirmation and provides a simple dashboard for managing orders, making pizza booking fast and efficient.",
    image: fastpizza,
    tags: ["JavaScript", "React JS", "Redux Toolkit", "Tailwind CSS"],
    github: "https://github.com/FaizanMateen/Fast-Pizza",
    webapp: "https://fastpizz.netlify.app/",
  },
  {
    id: 5,
    title: "Today I Learned",
    description:
      "A web application for discovering and sharing facts across various fields, including technology, science, society, and entertainment. The platform allows users to submit their own facts along with source links, ensuring credibility and engagement. It features a clean React.js and Tailwind CSS interface with multiple color modes, with redux toolkit, to enhance the reading experience and provide a personalized touch.",
    image: todayilearned,
    tags: ["Tailwind CSS", "JavaScript", "React JS", "Redux Toolkit"],
    github: "https://github.com/FaizanMateen/my-first-project",
    webapp: "https://allfactoneplace.netlify.app/",
  },
  {
    id: 6,
    title: "World Wise",
    description:
      "A fitness tracking application that lets users log in and monitor their walking, running, or cycling activities. The app records walking history with location details, allowing users to see in which countries they have exercised. It also enables goal setting for distance or duration, helping users stay motivated and track their progress over time.",
    image: worldwise,
    tags: ["React JS", "Code-Splitting", "CSS3", "Javascript"],
    github: "https://github.com/FaizanMateen/world-Wise",
    webapp: "https://jogg.netlify.app/",
  },
  {
    id: 7,
    title: "Movies Search Engine",
    description:
      "A web application for movie enthusiasts to search for films, rate them, and keep track of what they’ve watched. The platform provides a simple interface to explore movie details, add titles to a personal watchlist, and mark movies as “watched,” making it easy for users to organize and review their viewing history.",
    image: usepopcorn,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/FaizanMateen/usepopcorn",
    webapp: "https://usepopcorn-iota-five.vercel.app/",
  },
  {
    id: 8,
    title: "Nexter",
    description:
      "A real estate website that showcases property listings with detailed information in a visually appealing layout. Users can explore homes, apartments, and commercial spaces with images and descriptions, making property discovery simple and engaging.",
    image: nexter,
    tags: ["HTML5", "SASS"],
    github: "https://github.com/FaizanMateen/Nexter",
    webapp: "https://nexter-to.netlify.app/",
  },
];
