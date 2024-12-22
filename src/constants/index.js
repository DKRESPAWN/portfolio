import blog from "../assets/projects/blog/blog.jpg";
import portfolio from "../assets/projects/portfolio/portfolio.jpg";
// import project3 from "../assets/projects/project-3.jpg";
// import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate web developer specializing in React, with a strong focus on crafting dynamic, responsive, and user-friendly web applications. With over 1 year of hands-on experience, I have developed expertise in leveraging React to build robust front-end solutions, complemented by Tailwind CSS for seamless styling.
In addition to my React proficiency, I have experience with back-end technologies such as Node.js and Express.js and am skilled in working with MySQL databases. My familiarity with Python further enhances my versatility in tackling diverse development challenges.
My prior role as a Product Analyst for 9 months sharpened my analytical skills and equipped me to approach development with a problem-solving mindset. I am driven by a commitment to delivering high-quality, React-powered solutions that elevate user experiences and contribute to business growth.`;

export const ABOUT_TEXT = `I am a dedicated web developer with a passion for creating efficient and user-friendly web applications. With 1+ years of professional experience, I have worked with a variety of technologies, including React, JavaScript, Node.js, Express.js, and MySQL. My journey in web development began with a deep curiosity about how things work, evolving into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
Outside of coding, I enjoy playing football, badminton, and the piano, which helps me stay energized, focused, and inspired in both my personal and professional life.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Sept 2024",
    role: "Product & Tech Analyst",
    company: "Uniphore",
    description: `Designed and implemented end-to-end bots(chat and voice), tailoring solutions to specific industries and optimizing intent recognition using AI tools on top of custom language models.
        Fine tuning datasets for ML models and utilizing them in building generative AI workflows enabling contact center automation use-cases.
        Created frameworks to evaluate agent performance and conversation effectiveness. Designed visualizations using Google Looker to improve reporting and insights for the next-generation analytics platform.
        Actively participated in testing the new analytics platform interface, identifying and reporting bugs, and suggesting feature enhancements to the engineering team.`,
    technologies: [
      "Excel",
      "Google Looker",
      "Product Analysis",
      "Data Analysis",
      "Data Visualization",
      "Data Manipulation",
    ],
  },
  {
    year: "Jan 2023 - Dec 2023",
    role: "Associate Software Engineer",
    company: "Connektra.io",
    description: `Founding Engineering and Technology team member involved in building an enterprise SaaS platform. Ensure the technical feasibility of UI/UX designs and implement them while translating designs and wireframes into high-quality code. Building reusable components from front-end libraries for future use. Work with Backend, Frontend and DevOps teams for API implementation,design and exposure to code deployments through GitHub. Building RESTful API’s and backend framework using Flask.`,
    technologies: ["HTML", "CSS", "Javascript", "Node.js", "React.js", "Flask"],
  },
  {
    year: "Jun 2021 - Aug 2021",
    role: "CX Automation/Pre-Sales Intern",
    company: "Yellow.ai",
    description: `Developed demo chat bots using yellow.ai interface according to the use cases for various companies. Assist senior developer team in ensuring all the functional requirements are met according to the client’s needs. Developed use-case diagrams for the journeys and functionalities of demo chat bots.`,
    technologies: ["Javascript", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Blog Management System",
    image: blog,
    description:
      "A full-stack blog platform with features like user authentication, blog CRUD operations, and image file handling.",
    technologies: ["React", "Redux", "Appwrite", "Javascript", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing my projects, skills, and experience, built with a responsive and modern design.",
    technologies: ["React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  email: "divyanshsharma0301@gmail.com",
  phoneNo: "+91 8527060103",
};
