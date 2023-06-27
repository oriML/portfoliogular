import { IEducationModel, ITimeLineModel } from "../pages/models";

export const experienceList: ITimeLineModel[] = [
    {
        company: "Emalogic software",
        content: `As a Full Stack Developer at Emalogic software, I have gained extensive experience in developing and maintaining large-scale systems, catering to over 2000 customers.\n Notably, I have achieved significant improvements, such as reducing API load time by 50% and expanding and enhancing API services.\nIn my role, I take on various responsibilities, including implementing robust backend N-tier architecture and design patterns.\nI collaborate effectively with teams, utilizing tools such as Git, Figma, and Jira to streamline our development process.\nAdditionally, I possess strong expertise in designing SQL tables tailored to specific project requirements.`,
        date: '2022 - 2023',
        stack: "Full Stack",
        role: "Full Stack Developer",
        logo: {
          src: '/assets/img/emalogic-logo.png',
          alt: 'emalogic-logo'
        },
        color: '#ffffff',
        dir: 'ltr'
    },
    {
        company: "GoCode Academy",
        content: `Throughout my experience as a freelance Full Stack Developer, I have honed my expertise in React, GraphQL, and Node.js. With a strong focus on detail, I have successfully implemented intricate UI logic features, ensuring a seamless user experience.\nTaking full ownership of projects, I have managed the complete development lifecycle, starting from design conception and continuing through to production deployment.\nI possess a keen eye for identifying and swiftly resolving bugs and issues, ensuring optimal functionality of the applications.\nFurthermore, I have played a pivotal role in assessing the technical feasibility of UX and UI designs, offering valuable insights and recommendations.\nI am committed to continuously maintaining and enhancing existing features, consistently improving the overall quality of the projects I work on.`,
        date: '2021 - 2022',
        stack: "React, GraphQL, Node.js",
        role: "Full Stack Developer",
        logo: {
          src: '/assets/img/gocode-logo.png',
          alt: 'gocode-logo'
        },
        color: '#ffffff',
        dir: 'rtl'

    },
    {
        company: "Social Hakaton",
        content: `As a front-end developer for a community-focused application, I was actively involved in the development process from its inception. The community leaders initiated a competition to create a management application for the community, and our team enthusiastically embraced the challenge, starting from ground zero.\nI am delighted to share that our team's hard work and dedication paid off, as we secured the first place in the competition. The application we developed was chosen as the preferred solution for managing both community managers and members effectively.\nThis achievement not only highlights our team's technical prowess and creativity but also underscores the trust and recognition bestowed upon our application by the community leaders.\nWe are proud to have been selected to play a crucial role in facilitating seamless management and fostering a thriving community environment.`,
        date: '2021 - 2022',
        stack: "React, Redux, MUI",
        role: "Front end Developer",
        logo: undefined,
        color: '#ffffff',
        dir: 'ltr'

    }
];


export const educationList: IEducationModel[] = [
  {
    school: "Webschool",
    degree: "Diploma, Full Stack",
    content: "I attended Webschool, where I obtained a diploma in Full Stack development.\nThroughout the course, I learned the modern technologies used in web development, at MERN stack.\nThe study period was highly engaging, and I thrived as an enthusiastic and notable student.\nMy final project aimed to help individuals showcase their abilities.",
    date: "Nov 2020 - Nov 2021",
    stack: "JavaScript, React.js, Redux.js, MongoDB, ES6",
    logo: {
      src: "/assets/img/webs-logo.jpg",
      alt: "webs-logo"
    },
    color: '#ffffff'
  },
  {
    school: "Lev Academic Center",
    degree: "Bachelor's degree, Computer Science",
    content: "I studied for the first year of my Bachelor's degree in Computer Science at Lev Academic Center.\nI learned C++, Data Structures, and developed advanced programming techniques.\nThis period enhanced my coding skills and nurtured my passion for learning.\nUnfortunately, I had to leave after a year due to economic reasons.",
    date: "Aug 2019 - Aug 2020",
    stack: "C++, Data Structures, Object-Oriented Programming (OOP)",
    logo: {
      src: "/assets/img/lev-logo.png",
      alt: "lev-logo"
    },
    color: '#ffffff'
  },
  {
    school: "High School",
    degree: "High School Diploma, Computer Programming. Grade: 85+",
    content: "From high school, I have had a passion for coding and programming.\nDuring my studies, I learned Java programming language for about two years.\nMy average grade was among the highest in the class.",
    date: "2012 - 2013",
    stack: "Java, Object-Oriented Programming (OOP)",
    logo: {
      src: "/assets/img/highs-logo.png",
      alt: "highs-logo"
    },
    color: '#ffffff'
  }
];
