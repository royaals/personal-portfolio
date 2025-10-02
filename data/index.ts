export const navItems = [
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    }
  
  
  ];
  export const skills2 = [
    { title: "React" },
    { title: "Kubernetes" },
    { title: "Grafana" },
    { title: "Prometheus" },
    { title: "New Relic" },
    { title: "Monitoring and Logging" },
    { title: "Testing" },
    { title: "gRPC" },
    { title: "Firebase" },
    { title: "CI/CD" },
    { title: "WebRTC" },
    { title: "Auto Scaling" },
    { title: "PubSubs" },
    { title: "Message Queue" },
    { title: "Redis" },
    { title: "Serverless" },
    { title: "Swagger" },
    { title: "Open API" },
    { title: "Hono" },
    { title: "Generative AI" },
    { title: "Turborepo" },
    { title: "WebSocket" },
  ];
  
  export const skills1 = [
    { title: "Flask" },
    { title: "Reverse Proxy" },
    { title: "Nginx" },
    { title: "Cloudflare" },
    { title: "Next.js" },
    { title: "Flutter flow" },
    { title: "Flutter" },
    { title: "AWS" },
    { title: "Docker" },
    { title: "Tailwind CSS" },
    { title: "Zod" },
    { title: "TypeScript" },
    { title: "Prisma ORM" },
    { title: "PostgreSQL" },
    { title: "GCP" },
    { title: "React.js" },
    { title: "MongoDB" },
    { title: "MySQL" },
    { title: "Express.js" },
    { title: "Node.js" },
    { title: "JavaScript" },
    { title: "Python" },
    { title: "Java" },
    { title: "C++" },
  ];
  
  
  export const projects = [
    {
      id: 1,
      title: "Payment Wallet App",
      des: "A Comprehensive Financial Application that allows users to add money to wallet and perform peer-to-peer transactions.",
      img: "/payzen-page.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg","postgre.svg","prisma-2.svg", "dock.svg" , "kubernetes.svg"],
      link: "http://payzen.devsprojects.in",
    },
 
    {
      id: 2,
      title: "AI Code Modernization SaaS ",
      des: "A Real Software-as-a-Service app with AI Legacy Code Modernisation using the latest tech stack.",
      img: "/codegram.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "python.svg","postgre.svg", "aws.svg"],
      link: "https://codegram.devsprojects.in",
    },
    {
      id: 3,
      title: "Social Media Application",
      des: "A Social Media Application that supports user interaction, content sharing and community building",
      img: "/blogr-page.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "dock.svg"],
      link: "https://blogr.devsprojects.in",
    },
    {
      id: 4,
      title: "Video Conferencing App",
      des: "A Video Conferencing Tool designed to provide users with secure real-time meeting functionalities.",
      img: "/converselanding.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg", "dock.svg"],
      link: "https://converse.devsprojects.in",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "I am truly impressed by the level of professionalism and enthusiasm you demonstrated throughout your time working as an intern. Your contributions have been invaluable, showcasing remarkable willingness to learn and adapt. Your hard work and dedication have been exceptional.",
      name: "Rohan Shetty",
      title: "Cloud Expert of Niveus solutions",
    },
    {
      quote:
        "He has extensively worked on our Operations and Compliance dashboard. During the period with us, his Development skills truly amazed us. He is a fast learner, quick to adapt, and has consistently showcased professionalism and enthusiasm in his work.",
      name: "Sajal Sarwar",
      title: "CTO of BitSave",
    },
    {
      quote:
        "I am truly impressed by the level of professionalism and enthusiasm you demonstrated throughout your time working as an intern. Your contributions have been invaluable, showcasing remarkable willingness to learn and adapt. Your hard work and dedication have been exceptional.",
      name: "Rohan Shetty",
      title: "Cloud Expert of Niveus solutions",
    },
      {
      quote:
        "He has extensively worked on our Operations and Compliance dashboard. During the period with us, his Development skills truly amazed us. He is a fast learner, quick to adapt, and has consistently showcased professionalism and enthusiasm in his work.",
      name: "Sajal Sarwar",
      title: "CTO of BitSave",
    },
    
    
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "SDE Intern",
      desc: "Assisted in the development of a web based platform for tracking client sales leads and Mobile Banking app",
      className: "md:col-span-2",
      thumbnail: "/niveus_solutions_logo.jpeg",
      name: "Niveus Solutions",
      url: "https://niveussolutions.com",
    
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      desc: "Assisted in the development of an Operations & Compliance dashboard for the operations team to manage and track client accounts.",
      className: "md:col-span-2", 
      thumbnail: "/bitsave.jpg",
      name: "BitSave",
      url: "https://www.bitsave.club",

    },
  
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];
  