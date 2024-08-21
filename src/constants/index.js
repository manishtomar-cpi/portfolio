import { three } from "maath";
import {
  
    web,
    javascript,
    html,
    css,
    reactjs,
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
    todo,
    skyscanner,
    jp,
    crossplatform,
    iot,
    devops,
    cpi,
    csharp,
    maui,
    express,
    spring,
    asp,
    dynamo,
    sqlserver,
    firebase,
    mysql,
    aws,
    azure,
    kubernetes,
    jenkins,
    selenium,
    gitlab,
    bitbucket,
    github,


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
      title: "Full Stack Development",
      icon: web,
    },
    {
      title: "Cross Platform Development",
      icon: crossplatform,
    },
    {
      title: "Cloud Services (AWS, Microsoft Azure)",
      icon: cloud,
    },
    {
      title: "Data Science",
      icon: data,
    },
    {
      title: "AWS IoT",
      icon: iot,
    },
    {
      title: "DevOps",
      icon: devops,
    },
   
  ];
  
  const technologies = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", icon: cpp },
        { name: "C#", icon: csharp },
        { name: "JavaScript", icon: javascript },
        { name: "Python", icon: python },
        { name: "Java", icon: java },
      ],
    },
    {
      category: "Front End Development",
      skills: [
        { name: "HTML 5", icon: html },
        { name: "CSS 3", icon: css },
        { name: "Tailwind CSS", icon: tailwind },
        { name: "React JS", icon: reactjs },
        { name: "Next JS", icon: next },
        { name: "Three JS", icon: threejs },
        { name: ".NET MAUI", icon: maui }, // Add appropriate icon
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node JS", icon: nodejs },
        { name: "Express JS", icon: express }, // Add appropriate icon
        { name: "Spring Boot", icon: spring }, // Add appropriate icon
        { name: "ASP.NET Core", icon: asp }, // Add appropriate icon for ASP.NET Core
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", icon: mongodb },
        { name: "SQL Server", icon: sqlserver }, // Add appropriate icon
        { name: "Google Firebase", icon: firebase },
        { name: "Amazon DynamoDB", icon: dynamo },
        { name: "MySQL", icon: mysql },
      ],
    },
    {
      category: "Cloud Technologies",
      skills: [
        { name: "AWS", icon: aws },
        { name: "Microsoft Azure", icon: azure },
      ],
    },
    {
      category: "Cloud Services",
      skills: [
        { name: "EC2", icon: aws }, // Add appropriate icon
        { name: "S3", icon: aws }, // Add appropriate icon
        { name: "SES", icon: aws }, // Add appropriate icon
        { name: "SNS", icon: aws }, // Add appropriate icon
        { name: "AWS IoT", icon: aws }, // Add appropriate icon
        { name: "Lambda", icon: aws }, // AWS Lambda for serverless functions
        { name: "RDS", icon: aws }, // AWS Relational Database Service
        { name: "API Gateway", icon: aws }, // AWS API Gateway, add appropriate icon
        // { name: "CloudFront", icon: cloudfront }, // AWS Content Delivery Network
        { name: "Azure Functions", icon: azure }, // Azure serverless functions
        { name: "Azure Blob Storage", icon: azure }, // Azure scalable object storage
        { name: "Azure DevOps", icon: azure }, // Services for managing DevOps processes
        { name: "Azure SQL Database", icon: azure }, // Azure SQL Database, add appropriate icon
        { name: "Azure Kubernetes Service", icon: azure }, // Managed Kubernetes service
      ],
    },
    {
      category: "DevOps",
      skills: [
        { name: "Jenkins", icon: jenkins },
        { name: "Docker", icon: docker },
        { name: "Selenium", icon: selenium }, // Add appropriate icon
        { name: "Kubernetes", icon: kubernetes }, // Add appropriate icon
      ],
    },
    {
      category: "Version Control",
      skills: [
        { name: "Git", icon: git }, // Add appropriate icon
        { name: "GitHub", icon: github }, // Add appropriate icon
        { name: "Bitbucket", icon: bitbucket }, // Add appropriate icon
        { name: "GitLab", icon: gitlab }, // Add appropriate icon
        // { name: "Jira", icon: jira }, // Add appropriate icon
      ],
    },
  ];
  
  const experiences = [
    {
      title: "Placement Student - Innovation & Technology",
      company_name: "Centre for Process Innovation, Middlesbrough, England",
      icon: cpi,
      iconBg: "#383E56",
      date: "July 2024 - Preseent",
      points: [
        "5G Test Bed Project: Collaborating on the NHS 5G Test Bed initiative to enhance healthcare through the integration of cutting-edge 5G technology with IoT devices and sensors.",
        "IoT Device Integration: Successfully integrated various IoT devices and sensors with AWS IoT, enabling real-time data collection and monitoring for healthcare applications.",
        "Cloud-Based Data Management: Developed and deployed cloud-based solutions using Google Firebase and Amazon DynamoDB for secure and scalable data storage and management.",
        "Web and Mobile Application Development: Built responsive and user-friendly web and mobile applications using C#, .NET MAUI, and Next.js to facilitate seamless interaction with IoT devices.",
        "DevOps Implementation: Implemented CI/CD pipelines using Docker and Jenkins, ensuring smooth and efficient deployment of applications and services.",
        "Collaboration and Communication: Worked closely with cross-functional teams, including developers, data scientists, and healthcare professionals, to deliver high-impact solutions.",
        "Security and Compliance: Ensured all solutions adhere to NHS data security standards and regulations, maintaining the confidentiality and integrity of patient data.",
        "Innovation in Healthcare: Contributed to the development of innovative healthcare solutions by leveraging the latest in 5G technology, IoT, and cloud computing.",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "MoonDive Pvt Ltd, India",
      icon: moondive,
      iconBg: "#383E56",
      date: "June 2023 - September 2023",
      points: [
        "Proficient in crafting captivating user interfaces with Next.js, Tailwind CSS, and Material UI, leading to a significant boost in user engagement and driving up sales by an impressive percentage.",
        "Developed and optimized robust Backend APIs utilizing Node.js and Express.js, resulting in a 40% reduction in processing time, saving the company 100+ hours per week, and driving a 20% increase in customer satisfaction.",
        "Efficiently utilized MongoDB to manage data, contributing to a noticeable 25% increase in data‐driven decision‐making and revenue growth.",
        "Spearheaded the migration of legacy systems to AWS, resulting in a 50% increase in system scalability, enabling seamless handling of 10,000+ concurrent users during peak periods.",
        "Successfully integrated Google Place API, enhancing location‐based features, which in turn skyrocketed user satisfaction and conversion rates, leading to remarkable profit gains, notably increasing profits by over 40%.",
        "Developed and deployed advanced recommendation algorithms leveraging TensorFlow, resulting in a significant boost in user engagement, with a 30% decrease in churn rate and a 20% increase in average revenue per user.",
        "Streamlined and automated CI/CD processes on Amazon AWS, resulting in 30% faster development cycles and 60% faster deployments, significantly enhancing company agility, efficiency, and profitability.",
        "Streamlined resource management and enhanced scalability by deploying applications on Amazon ECS, driving profit margins upwards by 40% and enabling seamless growth in a rapidly expanding market.",
        "Recognized with the Best Team Leadership Award in a hackathon, showcasing ability to lead teams to deliver results, contributing to enhanced company productivity and profitability.",
      ],
    },
    {
      title: "Internship Trainee",
      company_name: "SkyScanner",
      icon: skyscanner,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Oct 2022",
      points: [
        "A significant enhancement in Flask backend skills was achieved, specializing in the development of efficient and reliable back‐end solutions. This proficiency was essential in contributing to high‐performance projects.",
        "Valuable skills in SQL database management were developed, allowing for practical experience in designing, optimizing, and overseeing databases. This expertise contributed to maintaining data integrity and accessibility within the organization.",
        "Collaboration with cross‐functional teams, iterative development, and efficient project delivery provided an in‐depth understanding of Agile Methodologies and their real‐world application.",
      ],
    },

    {
      title: "Summer Internship",
      company_name: "JPMorgan Chase & Co.",
      icon: jp,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Jan 2023",
      points: [
        "Acquired a strong foundation in data structures and algorithms with C++, enabling efficient Problem‐Solving and optimization in software development projects.",
        "Proficiently worked with Spring Boot, gaining valuable insights into developing robust and scalable back‐end solutions, effectively leveraging Spring Boot’s features for building efficient applications.",
      ],
    },
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
      ],
      image: todo,
      source_code_link: "https://github.com/manishtomarr1/to-do-list",
    },

    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects, educations };