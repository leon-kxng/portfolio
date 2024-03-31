const logotext = "KIGEN";
const meta = {
    title: "KIGEN",
    description: "I’m Leon Kigen Software Engineer _ Full stack devloper,currently looking for new oportunities",
};

const introdata = {
    title: "I’M LEON KIGEN",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Hey there! I'm a junior software engineer with a deep passion for coding and problem-solving. I thrive on building solutions that tackle real-world challenges and make a tangible difference. With a background in software engineering, I've honed my skills in various programming languages and technologies, allowing me to approach problems from multiple angles and craft efficient solutions. Whether it's developing robust applications or optimizing existing systems, I'm always eager to dive into new projects and collaborate with teams to create innovative solutions.",
    your_img_url: require('./assets/images/photo.jpeg'),
};

const dataabout = {
    title: "Abit about my self",
    aboutme: "I'm an energetic junior Software Engineer, I’ve mastered coding, problem-solving, and system administration. My passion for technology led me to create a home lab featuring a DIY NAS running on Linux Ubuntu Server with Casa OS, complemented by a web-based Docker GUI. Additionally, I’m a skilled full-stack developer, having created multiple websites and web applications. My diverse skill set and hands-on experience showcase my versatility, and I’m eager to apply these skills in a professional work environment. I am seeking opportunities where I can utilize my expertise in software development, system administration, and full-stack development to contribute meaningfully to innovative projects. I am eager to collaborate with dynamic teams and make a positive impact in a challenging and growth-oriented environment.",
};
const worktimeline = [{
        jobtitle: "Attended Moringa School",
        where: "",
        date: "2023-present",
    },
    {
        jobtitle: "Completed The Odin Project",
        where: "",
        date: "June 2022-2023",
    },
    {
        jobtitle: "Finished Highschool",
        where: "",
        date: "April 2022",
    },
];

const skills = [{
    name: "HTML & CSS",
    value: 95,
    },
    {
        name: "Python",
        value: 90,
    },
    {
        name: "Flask",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 90,
    },
    {
        name: "Mysql",
        value: 85,
    },
    {
        name: "sql",
        value: 75,
    },
    {
        name: "Next.js",
        value: 85,
    },
    {
        name: "Figma",
        value: 85,
    },
];

const services = [{
        title: "English",
        description: " Highly proficient. ",
    },
    {
        title: "Swahili",
        description: " Native speaker.",
    },
    {
        title: "French",
        description: " Working knowledge.",
    },
];

const dataportfolio = [{
        img:  require('./assets/images/CLI_chatapp.png'),
        description: "CLI chat application.",
        link: "https://github.com/leon-kxng/cli-app-project",
    },
    {
        img: require('./assets/images/weatherapp.png'),
        description: "Weather Application",
        link: "https://phase1weatherio.netlify.app/#/weather?lat=51.5073219&lon=-0.1276474",
    },
    {
        img: require('./assets/images/valentines.png'),
        description: "Valentines Proposal",
        link: "https://valentines-proposal.netlify.app/",
    },
    {
        img: require('./assets/images/munchies.png'),
        description: "Munchies.",
        link: "https://munchiest.netlify.app/",
    },
    {
        img: require('./assets/images/donation.png'),
        description: "Donation platform.",
        link: "https://github.com/leon-kxng/Donation-Platform",
    },
];

const contactConfig = {
    YOUR_EMAIL: "iamleonkigen@gmail.com",
    YOUR_FONE: "+254 711 590 212",
    description: "Feel free to reach out to me to discuss potential collaborations, projects, or just to connect! I'm always excited to engage with fellow enthusiasts and explore new opportunities. Let's chat and see how we can work together to bring ideas to life! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_wh7heuq",
    YOUR_TEMPLATE_ID: "template_ktper8h",
    YOUR_PUBLIC_KEY: "AGx6AevO6SQ31de7K",
};

const socialprofils = {
    github: "https://github.com/leon-kxng",
    Instagram: "https://www.instagram.com/iamkxgxn/",
    linkedin: "https://www.linkedin.com/in/leon-kigen-8239932a2",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};