import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    flutter,
    html,
    css,
    reactjs,
   // redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    java,
    docker,
    hal,
    croptr,
    carrent,
    jobit,
    tripguide,
    threejs,
    cloud,
    data,
    problem,
    moondive,
    cpp,
    next,
    python,
    cardiff,
    mmmut,
    dewan,
    mscafe, 
    expense,
    todo
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },    
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Cloud Computing",
      icon: cloud,
    },
    {
      title: "Data Science",
      icon: data,
    },
    {
      title: "Problem Solving",
      icon: problem,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: next,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
 
     {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "git",
      icon: git,
    },
    
    
  ];
  
  const experiences = [
    {
      title: "Software Development Engineer",
      company_name: "MoonDive Pvt Ltd, India",
      icon: moondive,
      iconBg: "#383E56",
      date: "June 2023 - September 2023",
      points: [
        "Worked as a Software Development Engineer (SDE) at Moondive, Designed and developed a robust real estate web application using Next.js and the MERN stack (MongoDB, Express.js, React, Node.js).",
        "Employed Tailwind CSS and Material-UI to enhance the application's user interface, ensuring a sleek and intuitive user experience.",
        "Utilized data science techniques to enhance the application's functionality, particularly focusing on a recommendation modal.",
        "Integrated AWS services such as SES (Simple Email Service) and S3 for efficient email sending and image storage within the application",
        "Collaborated with cross-functional teams to ensure seamless integration and delivery of features, meeting project deadlines and exceeding client expectations.",
      ],
    },
    // {
    //   title: "Frontend Web Development Intern",
    //   company_name: "Croptr Technologies Privated Limited",
    //   icon: croptr,
    //   iconBg: "#E6DEDD",
    //   date: "Sep 2022 - Feb 2023",
    //   points: [
    //     "Worked on two exciting web and android application project, leveraging the power of Javascript, React.js, Dart and Flutter to create a cutting-edge platform.",
    //     "Collaborated with a talented team to design and develop innovative features, ensuring seamless user experiences and optimal performance.",
    //     "Proactively stayed updated with the latest trends and technologies in web development, contributed to the team's continuous growth and improvement.",
    //     "Embraced an agile development environment, adapting to changing priorities, and ensuring successful project completion.",
    //   ],
    // },
  ];

  const educations = [
    {
      degree: "M.Sc in Software Engineering",
      institution_name: "Cardiff University, Cardiff, United Kingdom",
      icon: cardiff,
      iconBg: "#383E56",
      date: "September 2023 - September 2025",
      highlights: [
        "Pursuing MSc in Software Engineering with a focus on web applications and agile software development in first semester at Cardiff University.",
        "Relevant coursework includes web application development, agile software development, and Java programming.",
        "Proficient in Java, HTML, CSS, and JavaScript for web application development.",
        "Familiarity with Agile methodologies such as Scrum and Kanban for project coordination and iterative development.",
      ],
    },
    {
      degree: "Master's in Computer Applications (Hons)",
      institution_name: "Madan Mohan Malaviya University of Technology, Garakhpur, India",
      icon: mmmut,
      iconBg: "#383E56",
      date: "November 2021 - September 2023",
      highlights: [
        "Completed Master of Computer Applications (MCA) with Honors from Madan Mohan Malaviya Gorakhpur University, India.",
        "Developed MS Cafe an online food ordering web application.",
        "Proficient in Java, Python, and data structures, utilizing them for diverse projects and applications.",
        "Studied and applied artificial intelligence concepts, understanding machine learning algorithms and AI models for problem-solving.",
        "Acquired knowledge and skills in data science, encompassing data analysis, visualization, and predictive modeling.",
      ],
    },
    {
      degree: "Bachelor's in Computer Applications",
      institution_name: "Chaudhary Charan Singh Universit, Meerut, India",
      icon: dewan,
      iconBg: "#383E56",
      date: "August 2017 - July 2020",
      highlights: [
        "Completed Bachelors of Computer Applications (BCA) from Chaudhary Charan Singh University, Meerut, India.",
        "Developed Library Management Stytem software which use to manage the library.",
        "Proficient in C, C++, and Computer Network, utilizing them for diverse projects.",
        "Studied and applied concepts related to database management and computer organization.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
 
  ];
  
  const projects = [
    {
      name: "MS Cafe",
      description:
        "MS CAFE is a comprehensive and intuitive online food ordering application designed to provide a seamless online food ordering experience to its users. The app is built using React.js, for building user interfaces, and incorporates features such as Context API, useState Hook, useReducer Hook, useRef Hook, and forwardRef to ensure efficient and optimized performance.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Hooks",
          color: "green-text-gradient",
        },
        {
          name: "Context API",
          color: "pink-text-gradient",
        },
      ],
      image: mscafe,
      source_code_link: "https://github.com/manishtomarr1/food-order-app-MS-Cafe-",
    },
    
    {
      name: "Expense Tracker",
      description:
        "The Expense Tracker React App is a web application designed to help users keep track of their daily expenses. With this app, users can easily add their expenses, view their spending history, and track their budgets all in one place.",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Context API",
          color: "green-text-gradient",
        },
        // {
        //   name: "dart",
        //   color: "pink-text-gradient",
        // },
      ],
      image: expense,
      source_code_link: "https://github.com/manishtomarr1/Expense-Tracker-",
    },
    {
      name: "TO DO List",
      description:
        "The To-Do List Web App is a web-based application designed to help users keep track of their daily tasks and priorities. The app is built using JavaScript, MongoDB, and Node.js. The front-end is developed using HTML, CSS, and JavaScript, while the back-end is developed using Node.js and MongoDB to store and retrieve task data.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "EJS",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/manishtomarr1/to-do-list",
    },

    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects, educations };