import {
  RiArrowDropDownLine,
  RiArrowLeftSFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiAwardFill,
  RiBriefcaseLine,
  RiBuilding2Line,
  RiBuilding3Line,
  RiCheckLine,
  RiCodeBoxLine,
  RiCodeLine,
  RiContactsBook2Line,
  RiCopyrightLine,
  RiDownloadLine,
  RiExchangeDollarLine,
  RiGithubFill,
  RiGithubLine,
  RiGroupLine,
  RiHistoryLine,
  RiHome5Line,
  RiInstagramLine,
  RiLinkedinLine,
  RiMoonFoggyFill,
  RiProjector2Line,
  RiProjectorLine,
  RiStarFill,
  RiStarHalfLine,
  RiSunFoggyFill,
  RiTwitterXLine,
  RiUserLine
} from '@remixicon/react';

export const heroIcons = [
  <a
    href="https://www.instagram.com/theartisancodes/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <RiInstagramLine />
  </a>,
  <a
    href="https://www.linkedin.com/in/josephnzau/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <RiLinkedinLine />
  </a>,
  <a
    href="https://github.com/theartisancodes/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <RiGithubLine />
  </a>,
  <a
    href="https://x.com/theartisancodes"
    target="_blank"
    rel="noopener noreferrer"
  >
    <RiTwitterXLine />
  </a>
];

export const aboutData = [
  {
    title: 'Github Repos',
    amount: 45,
    mustShowK: false,
    mustShowCurrency: false,
    icon: <RiGithubFill />
  },
  {
    title: 'Enterprise Solutions Built',
    amount: 20,
    mustShowK: false,
    mustShowCurrency: false,
    icon: <RiCodeBoxLine />
  },
  {
    title: 'User Engagement & Retention',
    amount: 100,
    mustShowK: true,
    mustShowCurrency: false,
    icon: <RiGroupLine />
  },
  {
    title: 'Funding Raised for Products',
    amount: 280,
    mustShowK: false,
    mustShowCurrency: true,
    icon: <RiExchangeDollarLine />
  }
];

export const downloadIcon = <RiDownloadLine />;
export const arrowLeftIcon = <RiArrowLeftSFill />;

export const personName = 'Joe Nzau';

export const aboutText = `Hi, I’m Joe, a Senior Software Engineer with 8 years of experience crafting high-performance digital solutions. I merge functionality, aesthetics, and efficiency to build intuitive, scalable products.
  
Passionate about software craftsmanship, I bring precision and creativity to every project—focusing on performance, usability, and long-term maintainability. 

Beyond code, I thrive on problem-solving, collaboration, and innovation, always pushing boundaries to create impactful experiences. Let’s build something remarkable. 🚀`;

export const introductionTexts = {
  personName: 'Joe Nzau',
  role: 'A Passionate Software Engineer & Problem-Solver',
  description:
    'I build seamless, high-performance, and scalable digital experiences.',
  lookingFor: '🎯 Looking for an experienced developer? 🔗 Let’s Connect!'
};

export const experienceData = [
  {
    year: 2013,
    title: 'Computer & Information Systems',
    company: 'Kenya Methodist University',
    url: 'https://kemu.ac.ke',
    date: '2013',
    timeline: 'Jan 2013 - December 2015',
    experience: [
      'Computer Science Fundamentals: DataStructures, Algorithms, and Operating Systems.'
    ],
    skills: ['Java', 'C++', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript']
  },
  {
    year: 2017,
    title: 'Full Stack Developer',
    company: 'Andela',
    url: 'https://andela.com',
    date: '2017',
    timeline: 'March 2017 - September 2019',
    experience: [
      'Built scalable applications to carry out decision support for allocating software engineers to clients.',
      'Eased the speed of hiring talent by 40% through the development of a talent matching algorithm.'
    ],
    skills: ['React', 'Node.js', 'Python', 'gRPC', 'PostgreSQL', 'REST API']
  },
  {
    year: 2019,
    title: 'Frontend Developer',
    company: 'StarCity',
    url: 'https://www.ycombinator.com/companies/starcity',
    date: '2019',
    timeline: 'Jan 2019 - August 2019',
    experience: [
      'Improved client acquisition and payment processing efficiency.',
      'Reduced hiring time and costs by transitioning from ClojureScript to React.'
    ],
    skills: [
      'React',
      'TypeScript',
      'UI/UX Design',
      'ClojureScript',
      'Styled Components',
      'Plaid & Stripe Integrations'
    ]
  },
  {
    year: 2015,
    title: 'Senior Frontend Developer',
    company: 'Lori Systems',
    url: 'https://www.lorisystems.com/',
    date: '2025',
    timeline: 'October 2019 - Current',
    experience: [
      'Enhanced operational efficiency and scalability by developing core business applications. ',
      'Built SaaS products that enabled clients to manage logistics and supply chain operations.'
    ],
    skills: [
      'React',
      'TypeScript',
      'Webpack',
      'Micro Frontends',
      'AWS, GraphQL'
    ]
  }
];

// Skills
export const skillsData = [
  {
    name: 'NextJS',
    icon: '/skills/nextjs.png'
  },
  {
    name: 'NodeJS',
    icon: '/skills/nodejs.png'
  },
  {
    name: 'HTML',
    icon: '/skills/html.png'
  },
  {
    name: 'CSS',
    icon: '/skills/css.png'
  },
  {
    name: 'JavaScript',
    icon: '/skills/js.png'
  },
  {
    name: 'TailwindCSS',
    icon: '/skills/tailwind.png'
  },
  {
    name: 'Vite',
    icon: '/skills/vite.png'
  },
  {
    name: 'ReactJS',
    icon: '/skills/react.png'
  },
  {
    name: 'TypeScript',
    icon: '/skills/ts.png'
  },
  {
    name: 'Figma',
    icon: '/skills/figma.png'
  },
  {
    name: 'Framer Motion',
    icon: '/skills/framer.png'
  },
  {
    name: 'ThreeJS',
    icon: '/skills/threejs.png'
  },
  {
    name: 'MongoDB',
    icon: '/skills/mongodb.png'
  },
  {
    name: 'Styled Components',
    icon: '/skills/styled-components.png'
  },
  {
    name: 'PostgreSQL',
    icon: '/skills/postgresql.jpg'
  },
  {
    name: 'AWS',
    icon: '/skills/awslogo.jpg'
  },
  {
    name: 'Appwrite',
    icon: '/skills/appwrite.png'
  }
];

export const starIcons = [<RiStarFill />, <RiStarHalfLine />];
export const arrowIcons = [<RiArrowLeftSLine />, <RiArrowRightSLine />];

export const reviewsData = [
  {
    image: '/reviews/client-4.png',
    name: 'Mark T., Freelance Graphic Designer',
    comment:
      "Your work on our website has been phenomenal. The design is visually stunning and incredibly user-friendly. We've received countless compliments from our customers, and our sales have noticeably increased. Thank you for capturing our brand's essence so perfectly!",
    stars: [1, 1, 1, 1, 0.5]
  },
  {
    image: '/reviews/client-2.png',
    name: 'Sarah B., E-commerce Store Owner',
    comment:
      "Working with you, has been an absolute pleasure. The portfolio website you created for me is sleek, modern, and beautifully showcases my work. Your attention to detail and creative flair are truly impressive. I couldn't be happier with the final result!",
    stars: [1, 1, 1, 1, 1]
  },
  {
    image: '/reviews/client-3.png',
    name: 'Emily R., CEO of Tech Startup',
    comment:
      "The redesign of our corporate website exceeded all expectations. Your innovative ideas and professional execution have given us a site that is not only visually appealing but also highly functional. We've seen a significant improvement in user engagement thanks to your expertise.",
    stars: [1, 1, 1, 1, 1]
  },
  {
    image: '/reviews/client-1.png',
    name: 'Bob W., Lifestyle Blogger',
    comment:
      "I absolutely love the blog design you created for me, [Web Designer's Name]. It's exactly what I envisioned—stylish, unique, and easy to navigate. Your responsiveness and creative input were invaluable. My readers are raving about the new look, and I couldn't be more thrilled!",
    stars: [1, 1, 1, 1, 0.5]
  },
  {
    image: '/reviews/client-5.png',
    name: 'David H., Director of Non-Profit Organization',
    comment:
      "your work on our non-profit’s website has been transformative. The design is clean, engaging, and effectively conveys our mission. We've seen an increase in online donations and volunteer sign-ups, all thanks to your fantastic design. Your dedication and talent are greatly appreciated!",
    stars: [1, 1, 1, 1, 1]
  }
];

export const projectsData = [
  {
    name: 'storeit.craftedbyjoe.com',
    desc: 'StoreIt is a cutting-edge file storage application designed to simplify how users upload, manage, and organize their files securely.',
    url: '/projects/image-1.png',
    tech: ['NextJS', 'TailwindCSS', 'Appwrite', 'Framer Motion']
  },
  {
    name: 'finflow.craftedbyjoe.com',
    desc: 'FinFlow is a modern, feature-rich banking platform designed to provide seamless financial management for users.',
    url: '/projects/image-2.png',
    tech: ['NextJS', 'TailwindCSS', 'Appwrite']
  },
  {
    name: 'podcast.craftedbyjoe.com',
    desc: "This is an podcast using OpenAI's TTS model to generate audio from text for a podcast",
    url: '/projects/image-3.png',
    tech: ['NextJS', 'OpenAI', 'TailwindCSS']
  },
  {
    name: 'WIP - burnzone.craftedbyjoe.com',
    desc: 'BurnZone is a fitness app that helps users track their workouts, set fitness goals, and monitor their progress.',
    url: '/projects/image-4.png',
    tech: ['NextJS', 'FramerMotion', 'Python', 'TailwindCSS']
  },
  {
    name: 'WIP - zerobudget.craftedbyjoe.com',
    desc: 'A resource for budgeting and financial planning, offering tools and advice for managing money effectively.',
    url: '/projects/image-5.png',
    tech: ['NextJS', 'NodeJS', 'GraphQL', 'TailwindCSS']
  }
];

export const projectsButton = [
  'All',
  'AI',
  'ReactJS',
  'TailwindCSS',
  'NextJS',
  'FramerMotion',
  'ThreeJS',
  'NodeJS',
  'GraphQL',
  ' Python'
];

// Pricing Plans
export const pricingPlans = [
  {
    title: 'Basic',
    pricing: '$500 - $1,000',
    features: [
      'Up to 5 pages',
      'Responsive design ',
      'Basic SEO ',
      'Contact form',
      'Social media links',
      '1 month support'
    ],
    recommended: 'Small businesses, personal websites, bloggers'
  },
  {
    title: 'Premium',
    pricing: '$5,000 - $10,000',
    features: [
      'Unlimited pages',
      'Responsive design',
      'Comprehensive SEO',
      'Contact form ',
      'Social media links',
      'Advanced security',
      'E-commerce (unlimited products)',
      'Blog setup',
      'Google Analytics with custom reports',
      '6 months support'
    ],
    recommended: 'Medium-sized businesses, online stores, service providers'
  },
  {
    title: 'Standard',
    pricing: '$1,500 - $3,000',
    features: [
      'Up to 10 pages',
      'Responsive design',
      'Advanced SEO',
      'CContact form',
      'Social media links',
      'E-commerce (20 products)',
      'Blog setup',
      'Google Analytics',
      '3 months support'
    ],
    recommended:
      'Large businesses, complex e-commerce sites, custom web applications'
  }
];

export const checkIcon = <RiCheckLine />;

// Q & A
export const questions = [
  {
    question: 'How much do you charge for a website?',
    answer:
      'Our website packages usually range from £2997 – £4997. However it really depends on what kind of website you need. We recently wrote a full guide on how much it costs for a website to give you an idea of the different options available.'
  },
  {
    question: 'Why are you so expensive?',
    answer:
      'he process we use to build your website takes a certain amount of time and a lot of planning and research. Unlike other agencies, we DON’T use templates. We build your website from scratch, which means you get a unique design tailored around your business. Buying a website from us should not just simply be seen as a business expense as your website is a sales tool that should earn you money'
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.'
  },
  {
    question: 'How do we communicate throughout the website build?',
    answer:
      'Before we begin working together, we’ll usually have an initially chat on the phone or via Skype to discuss the project. Once we get started, most of the communication will take place over email. This makes the process a lot easier as we’ll have all of the information saved and can come back to it later. Once we’ve finished the project, we will book in your 1hr digital marketing training session.'
  },
  {
    question: 'What will you need from me?',
    answer:
      'It really depends on what type of website you want. We’ll be able to discuss this on our discovery call before we start working together. Depending on which package we agree on we could need…'
  },
  {
    question: 'What if I don’t like the website?',
    answer:
      'You’re in luck. We offer a risk-free guarantee. Before we build your new website, we’ll design a mockup of your homepage. We’ll design a layout in Photoshop first, that way you’ll get to see our initial designs within approximately ten days. This is your opportunity to give us feedback and if you really don’t like it, you don’t have to move forward. Best part is, this won’t cost you anything.'
  },
  {
    question: 'Do you offer a payment schedule?',
    answer:
      'Yes, we split the payment into two. The first 50% is usually taken once you have seen the mockup of your homepage and you’re happy to move forward. The following 50% is taken 30 days after this.'
  },
  {
    question: 'Can I make the final payment when the site is ready to go live?',
    answer:
      'No. In the past we have found that projects can take a lot longer than expected to complete. We might be waiting for information from you and this can delay the process. Sometimes these delays can take months. This is why we always invoice 30 days after the original payment. At this point we’ll be well on our way with your new website and you’ll be able to see the progress.'
  },
  {
    question: 'Who hosts the website?',
    answer:
      'If we build your website, we will generally manage the hosting for you so you don’t need to do anything. We use the same hosting company for our own website and for ALL our clients. Each website is managed individually to avoid any security issues. Every website we build has unlimited bandwidth, 20GB of disk space, 2GB Ram and 99.9% uptime. We’ve used the same company for 5 years and we don’t plan on changing this anytime soon.'
  },
  {
    question: 'Can I update the website myself once it’s been built?',
    answer:
      'Yes. We like to offer the ability for our clients to update the website themselves. We we’ll give you all the training and tools to be able to make website amendments. We use a easy to use platform called WordPress so you can add edit and delete content without paying us to do it for you.'
  },
  {
    question:
      'What if I don’t want to manage the website at all. Can you do it all for me?',
    answer:
      'Yes, we can arrange a maintenance package to suit your needs. This can range from 1hr per month to 10 hours per month and we can discuss a package that’s right for you.'
  }
];

export const questionArrow = <RiArrowDropDownLine />;

export const copyRightIcon = <RiCopyrightLine />;

export const navbarData = [
  {
    id: 'home',
    name: 'Home',
    icon: <RiHome5Line />
  },
  {
    id: 'about',
    name: 'About',
    icon: <RiUserLine />
  },
  {
    id: 'experience',
    name: 'MyRoad',
    icon: <RiHistoryLine />
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <RiBriefcaseLine />
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <RiProjectorLine />
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <RiContactsBook2Line />
  }
];

export const sunIcon = <RiSunFoggyFill />;
export const moonIcon = <RiMoonFoggyFill />;
