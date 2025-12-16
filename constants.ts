import { Project, SkillCategory } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Fayasfazil',
  linkedin: 'https://www.linkedin.com/in/fayas-ahamed-68250a385/',
  hackerrank: 'https://www.hackerrank.com/fayasahamedb',
  leetcode: 'https://leetcode.com/fayas_ahamed_b/',
  email: 'mail to:fayashamed2004@gmail.com',
  phone: 'tel:+91 9751008796'
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: 'Java', level: 87, description: 'Expert in core Java, OOP, and building robust, scalable server-side applications.' },
      { name: 'Python', icon: 'Python', level: 92, description: 'Proficient in Python for backend development (Django, FastAPI) and AI.' },
      { name: 'JavaScript', icon: 'JS', level: 80, description: 'Solid experience in vanilla JS for creating interactive front-end experiences.' },
      { name: 'SQL', icon: 'SQL', level: 78, description: 'Strong skills in writing complex queries, database design, and optimization.' },
    ],
  },
  {
    title: 'Backend & Web',
    skills: [
      { name: 'Django', icon: 'Django', level: 87, description: 'Experienced in building full-stack applications with Django\'s MVT architecture.' },
      { name: 'REST APIs', icon: 'REST', level: 81, description: 'Skilled in designing, building, and consuming RESTful APIs for web services.' },
      { name: 'HTML5', icon: 'HTML5', level: 92, description: 'Mastery of semantic HTML for building well-structured and accessible web pages.' },
      { name: 'CSS3', icon: 'CSS3', level: 96, description: 'Advanced knowledge of modern CSS, including Flexbox, Grid, and animations.' },
    ],
  },
   {
    title: 'AI & Design',
    skills: [
      { name: 'AI Automation', icon: 'AI', level: 80, description: 'Designing and implementing automated workflows using AI agents and tools to streamline processes.' },
      { name: 'Prompt Engineering', icon: 'Prompt', level: 85, description: 'Crafting effective prompts to guide large language models for specific, high-quality outputs.' },
      { name: 'UI/UX Design', icon: 'UIUX', level: 70, description: 'Applying user-centered design principles to create intuitive and engaging interfaces.' },
      { name: 'Cloud AI', icon: 'CloudAI', level: 75, description: 'Leveraging cloud platforms like AWS for scalable AI model deployment and MLOps.' },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Git & GitHub', icon: 'GitHub', level: 82, description: 'Expert in version control using Git, including branching, merging, and pull requests.' },
      { name: 'Cloud Computing', icon: 'Cloud', level: 75, description: 'Familiar with cloud concepts and services, with hands-on experience on platforms like AWS.' },
      { name: 'VS Code', icon: 'VSCode', level: 95, description: 'Highly proficient with VS Code, leveraging extensions and shortcuts for maximum productivity.' },
      { name: 'Eclipse', icon: 'Eclipse', level: 85, description: 'Strong experience with the Eclipse IDE for Java development and debugging.' },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
    {
    title:       'AI Content Automation Pipeline',
    description: 'I engineered a complete backend pipeline to automate content creation. The system ingests data, leverages generative AI for producing articles and summaries, and publishes them via a REST API. I orchestrated the entire process on a cloud-based, serverless architecture for maximum efficiency.',
    tags:        ['AI Automation', 'Backend', 'Python', 'Cloud AI'],
    imageUrl:    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=450',
    githubUrl:   'https://github.com/Fayasfazil',
    technologies: ['Python', 'FastAPI', 'AWS Lambda', 'Amazon Bedrock', 'Docker', 'Prompt Engineering', 'REST APIs'],
    challenges:  'The main challenge was ensuring the consistency and quality of the AI-generated content across different topics. Another key issue was managing the serverless architecture to handle unpredictable workloads efficiently and cost-effectively, requiring robust error handling and monitoring.',
    solutions:   'To maintain high content quality, I developed a multi-stage prompt engineering strategy with built-in validation. For the architecture, I implemented an event-driven system using AWS Lambda and SQS, which created a resilient and scalable pipeline. This approach decoupled the services and enabled efficient, on-demand processing.',
  },
  {
    title:       'Django E-commerce Platform',
    description: 'As part of my trainee program, I designed and developed key modules for an e-commerce platform, including user authentication, product catalog, and the checkout system using Django. I focused on improving performance by optimizing queries and ensuring scalability while collaborating with a 4-member Agile team using Git.',
    tags:        ['Django', 'Python', 'E-commerce', 'SQL'],
    imageUrl:    'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=450',
    githubUrl:   'https://github.com/Fayasfazil',
    technologies: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
    challenges:  'Integrating a secure payment gateway and managing complex product variations (e.g., size, color) while maintaining optimal database performance were major hurdles. Ensuring the application remained scalable under high traffic was also a key concern.',
    solutions:   "For secure payments, I integrated the Stripe API. I designed a flexible database schema with Django models to handle complex product variations and utilized Django's caching framework and optimized SQL queries to significantly reduce load times and enhance scalability.",
  },
  {
    title:       'AI-Powered Chat Interface',
    description: 'I developed an intelligent chat interface using Python and leading AI libraries. My core task was engineering sophisticated prompts for natural language processing, enabling the system to understand and respond to user queries in real-time. The final application was deployed on a scalable cloud platform.',
    tags:        ['Python', 'AI', 'NLP', 'Cloud', 'Prompt Engineering'],
    imageUrl:    'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=450',
    githubUrl:   'https://github.com/Fayasfazil',
    technologies: ['Python', 'Flask', 'NLTK', 'TensorFlow', 'REST APIs', 'Docker', 'AWS EC2', 'Prompt Engineering'],
    challenges:  'The primary challenge was advanced prompt engineering to handle ambiguous queries and maintain context. Another difficulty was minimizing response latency for a seamless, real-time conversation experience on a scalable cloud infrastructure.',
    solutions:   'To achieve high accuracy, I fine-tuned a pre-trained language model on a custom dataset with sophisticated prompt chains, greatly improving intent recognition. I then deployed the application on AWS EC2 using Docker, which allowed for easy scaling and optimized resource management to minimize latency.',
  },
  {
    title:        'Java Swing Calculator',
    description:  'I developed a GUI-based calculator using Java Swing, applying core OOP principles like inheritance and encapsulation. My focus was on optimizing algorithms for execution speed and accuracy, which I validated through functional testing across multiple use cases.',
    tags:         ['Java', 'Swing', 'OOP'],
    imageUrl:     'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=450',
    githubUrl:    'https://github.com/Fayasfazil',
    technologies: ['Java', 'Swing (AWT)', 'JUnit', 'OOP'],
    challenges:   'Creating a responsive and intuitive GUI with Java Swing, which can be less flexible than modern UI frameworks. Handling complex mathematical operations and ensuring the order of operations (PEMDAS) was correctly implemented required careful algorithm design.',
    solutions:    "For the UI, I utilized GridBagLayout to create a flexible and responsive layout. To handle calculations correctly, I implemented the Shunting-yard algorithm to manage operator precedence. Finally, I wrote extensive JUnit tests to cover various edge cases and ensure the calculator's accuracy.",
  },
   {
    title:        'Anime-Based Portfolio Model',
    description:  'Designed and implemented an anime-themed portfolio website to showcase projects, character art, and illustrations. The site features handcrafted SVG characters, parallax backgrounds, smooth motion transitions, and a color palette inspired by anime aesthetics to create an engaging, immersive experience across devices.',
    tags:         ['React', 'Animation', 'Design', 'Frontend'],
    imageUrl:     'https://images.unsplash.com/photo-1543872084-c7bd3822856f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=450',
    githubUrl:    'https://github.com/Fayasfazil',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'SVG', 'Next.js', 'Netlify'],
    challenges:   'Balancing rich animations and illustrated assets with fast load times and responsive behavior across devices while preserving accessibility and SEO.',
    solutions:    'Optimized illustrations as SVGs, implemented code-splitting and lazy-loading for heavy assets, used GPU-accelerated CSS transforms and Framer Motion for performant animations, and added semantic markup + ARIA attributes to improve accessibility. Deployed with CDNs and image optimization to keep Lighthouse scores high.',
  },
  {
    title:        'Futuristic-Portfolio',
    description:  'Built a futuristic portfolio with neon gradients, glassmorphism UI cards, 3D/Parallax hero scenes, and subtle particle effects. Focused on high-performance animations, accessible dark/light themes, and smooth navigation to showcase projects and interactive demos with modern frontend tooling.',
    tags:         ['React', 'Three.js', 'Design', 'Frontend', 'Animation,'],
    imageUrl:     'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=450',
    githubUrl:    'https://github.com/Fayasfazil',
    technologies: ['React', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'Next.js', 'Vercel'],
    challenges:   'Balancing rich 3D interactions and animations with fast load times and cross-device responsiveness while maintaining accessibility and SEO.',
    solutions:    'Optimized assets, lazy-loaded heavy components, used GPU-accelerated transforms and reduced main-thread work; added semantic markup and ARIA attributes to preserve accessibility while keeping Lighthouse scores high.',
  },
  {
    title:        'WEB based Bank Management System',
    description:  'Developed a secure, responsive web-based bank management system to handle customer accounts, transactions, fund transfers, and administrative operations. Includes role-based authentication, transaction ledger, account statements, audit logging, input validation, and encryption for sensitive data.',
    tags:         ['Django', 'React', 'Banking', 'SQL', 'Security'],
    imageUrl:     'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=450',
    githubUrl:    'https://github.com/Fayasfazil',
    technologies: ['Django', 'React', 'PostgreSQL', 'REST APIs', 'Docker', 'JWT', 'Bootstrap'],
    challenges:   'Ensuring transactional integrity, preventing fraud, and meeting security/compliance requirements while keeping the user experience simple and responsive.',
    solutions:    'Implemented ACID-compliant transactions, input sanitization, TLS encryption, JWT-based role permissions, audit logging, and comprehensive unit/integration tests. Containerized deployment with Docker ensured repeatable, secure environments.',
  },
   {
    title:        'Job_Portal_API-PYTHON Project Backend',
    description:  'Built a scalable, secure backend API for a job portal using Django and Django REST Framework. Implements user auth (JWT), employer & candidate roles, job CRUD, advanced search/filtering, resume upload/processing, application workflows, and analytics endpoints. Designed for high throughput with background processing for file handling and email notifications.',
    tags:         ['Django', 'Python', 'REST API', 'Jobs', 'Security'],
    imageUrl:     'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    githubUrl:    'https://github.com/Fayasfazil',
    technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'Celery', 'Redis', 'Docker', 'NGINX', 'AWS'],
    challenges:   'Secure file uploads (resumes), efficient search/filter across large datasets, and reliable background processing without degrading API latency.',
    solutions:    'Added server-side validation and virus scanning for uploads, used Postgres full-text search and indexing for fast queries, offloaded heavy work to Celery workers with Redis, containerized services with Docker, and enforced JWT + RBAC for secure access. Added CI/CD, monitoring and automated tests for reliability.',
  },
  {
    title:        'Library_Managment_System-main Backend Project ',
    description:  'Developed a robust backend API for a Library Management System using Django and Django REST Framework. Features include book/catalog management, member and librarian roles, lending/return workflows, reservations, fine calculation, inventory tracking (barcode/RFID), and reporting endpoints. Designed for strong data consistency, performant search, and automated notification workflows.',
    tags:         ['Django', 'Python', 'REST API', 'Library', 'Inventory'],
    imageUrl:     'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=450',
    githubUrl:    'https://github.com/Fayasfazil',
    technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'Elasticsearch', 'Celery', 'Redis', 'Docker', 'RabbitMQ'],
    challenges:   'Maintaining transactional integrity for concurrent borrow/return operations, providing fast and flexible search across large catalogues, handling bulk imports/metadata normalization, and delivering timely overdue notifications without blocking API throughput.',
    solutions:    'Used DB transactions and row-level locking for loan operations, implemented Elasticsearch for fast full-text and faceted search, offloaded heavy tasks (notifications, import processing, report generation) to Celery workers with Redis/RabbitMQ, added background indexers for sync, validated and sanitized bulk data on upload, applied JWT + role-based permissions for secure access, and containerized services with Docker for repeatable deployments. Added logging, audit trails, and automated tests for reliability.',
  },
];

export const FOOTER_DATA = {
    bio: {
        name: 'Fayas Ahamed.B',
        text: 'Motivated Computer Science Engineering student specializing in backend development and AI. Hands-on experience in Java, Python, AI Automation, and Cloud AI. Seeking an entry-level role to apply my skills in a growth-oriented environment.',
        tags: [
            { name: 'Backend Developer', color: 'blue' },
            { name: 'AI Engineer', color: 'purple' },
            { name: 'Cloud Specialist', color: 'green' },
            { name: 'PYTHON DEVELOPER', color: 'blue' },
            { name: 'Software Developer', color: 'purple' },
            { name: 'Agile Scrum Master', color: 'green' },
        ]
    },
    quickNav: [
        { name: 'About Me', href: '#about', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
        { name: 'Education', href: '#education', icon: 'M12 14l9-5-9-5-9 5 9 5zM3 10v6c0 1.657 5.373 3 9 3s9-1.343 9-3v-6' },
        { name: 'Certifications', href: '#certifications', icon: 'M9 12l2 2 4-4m6-4a9 9 0 11-18 0 9 9 0 0118 0z' },
        { name: 'Experience', href: '#experience', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { name: 'Projects', href: '#projects', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
        { name: 'Skills', href: '#skills', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z' },
        { name: 'Contact', href: '#contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    ],
    contact: [
        { type: 'Email', value: 'fayashamed2004@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { type: 'Phone', value: '+91 9751008796', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
        { type: 'Location', value: 'Tamil Nadu, India', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM12 11a2 2 0 100-4 2 2 0 000 4z' }
    ],
    technologies: {
        'Languages': ['Java', 'Python', 'SQL'],
        'Backend & Web': ['Django', 'REST APIs', 'FastAPI'],
        'AI & Cloud': ['AI Automation', 'Cloud AI', 'AWS']
    }
};