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
      title: "Android Developer (Flutter)",
      icon: mobile,
    },
    {
      title: "Web 3",
      icon: backend,
    },
    {
      title: "Blockchain",
      icon: creator,
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
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "flutter",
      icon: flutter,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "java",
      icon: java,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Summer Intern",
      company_name: "Hindustan Aeronautics Limited",
      icon: hal,
      iconBg: "#383E56",
      date: "June 2023 - Present",
      points: [
        "Internship at HAL (Hindustan Aeronautics Limited) focused on developing software for the flight data recorder (FDR) and automating parameter analysis based on pilot voice recorded in the Data Acquisition Unit (DAU).",
        "Actively involved in the design and development of the software for the FDR, which includes capturing, storing, and retrieving flight data.",
        "Utilized various software engineering concepts, including the Software Development Life Cycle (SDLC), to ensure a systematic and organized approach to software development.",
        "Engaged in continuous learning and professional development, staying up-to-date with the latest advancements in software engineering and aviation technology to enhance the effectiveness of the software solution.",
      ],
    },
    {
      title: "Frontend Web Development Intern",
      company_name: "Croptr Technologies Privated Limited",
      icon: croptr,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Feb 2023",
      points: [
        "Worked on two exciting web and android application project, leveraging the power of Javascript, React.js, Dart and Flutter to create a cutting-edge platform.",
        "Collaborated with a talented team to design and develop innovative features, ensuring seamless user experiences and optimal performance.",
        "Proactively stayed updated with the latest trends and technologies in web development, contributed to the team's continuous growth and improvement.",
        "Embraced an agile development environment, adapting to changing priorities, and ensuring successful project completion.",
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
      name: "SynkClip",
      description:
        "SynkClip enables seamless synchronization of clipboards between a personal computer and an Android device. The primary objective is to provide users with a more efficient and convenient method of transferring information, ultimately eliminating the need to rely on platforms such as WhatsApp web.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "firefoxExtension",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/naziaaa/text_sync",
    },
    
    {
      name: "Vaartapatram",
      description:
        "Vaartapatram is an android app made with Flutter that allows users to easily access the latest news from around the world. The app uses the newsapi.org API to fetch news articles from a variety of sources and allows users to filter the news by category.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "dart",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/naziaaa/vaartapatram",
    },
    {
      name: "Space Explorer",
      description:
        "Explore the vastness of space with our React.js-powered application. With real-time updates from NASA's API, you can see the latest images and information from space in stunning detail.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        {
          name: "javaScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/naziaaa/NASA_APOD",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };