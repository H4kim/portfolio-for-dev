export const iconsComponents = {
    emailIcon : require('../assets/icons/EmailIcon').default,
    linkedInIcon : require('../assets/icons/LinkedInIcon').default,
    githubIcon : require('../assets/icons/GithubIcon').default,
    twitterIcon : require('../assets/icons/TwitterIcon').default,
}
export const  socialLinks = [
    {
        id:'email',
        icon: 'emailIcon',
        backColor: '#EEEEEE',
        // iconColor:'#67DB3D',
        link:'mailto:ozil.hakim@gmail.com'
    },
    {
        id:'linkedIn',
        icon: 'linkedInIcon',
        backColor: '#EEEEEE',
        iconColor:'blue',
        link:'https://www.linkedin.com/in/hakim-bencella/'
    },
    {
        id:'github',
        icon: 'githubIcon',
        backColor: '#EEEEEE',
        link:'https://github.com/H4kim'
    },
    {
        id:'twitter',
        icon: 'twitterIcon',
        backColor: '#EEEEEE',
        iconColor:'#1DA1F2',
        link:'https://twitter.com/H4kst3r'
    },
]

export const projectsList = [
    {
        id:'0',
        current: true,
        github: 'https://github.com/Champion-Devs/ZappNode',
        link: '#',
        title: 'ZappNode',
        text:'An uptime monitoring service can help you by testing if your site, app or server is still up and running. If some of its features arent working as intended, or if it goes down entirely, the owner will be notified so that they can swiftly start resolving the issue. ZappNode is one of such uptime monitoring services.',
    },
    {
        id:'1',
        current: false,
        github: 'https://github.com/H4kim/tours-api',
        link: 'https://h4kim-tours.herokuapp.com/',
        title: 'Natours',
        text:"An awesome tour booking site built on top of NodeJS and mongoDb , the keys features are Authentication and Authorization, Manage booking, check tours map, check user's reviews and rating, Update username, photo, email, and password and Credit card payment using STRIP",
    },
    {
        id:'2',
        current: true,
        github: 'https://github.com/H4kim/PizzUp',
        link: '#',
        title: 'PizzUp',
        text:'Ecommerce web application dedicated to individuals with small stores ( Restaurants ) it come with a admin dashboard where the admins can CRUD products, categories, customers .. , and also manage the orders in an easy way  also a client part with a clean and clear user interface for users (customers) to be able to order products and see updates',
    },
    {
        id:'3',
        current: false,
        github: 'https://github.com/H4kim/errors-handler',
        link: 'https://www.npmjs.com/package/errors-handler',
        title: 'errors-handler',
        text:"(NPM PACKAGE NODEJS) Simple and efficient global errors handler that handle errors of development and production , you don't worry about leaking informations in the production",
    },
    {
        id:'4',
        current: false,
        github: 'https://github.com/H4kim/BudgetApp',
        link: 'https://h4kim.github.io/BudgetApp/',
        title: 'BudgetApp',
        text:'BudgetApp is an application where the user can add/delete incomes and expences',
    },
    {
        id:'5',
        current: true,
        github: 'https://github.com/H4kim/portfolio-for-dev',
        link: 'https://h4kim.me',
        title: 'portfolio-for-dev',
        text:"it tooks me 2 years to decide to build my portfolio, that's why i decided to create portfolio-for-dev to help other developer to not wast time and create their own portfolio in 10min . Simple, well structured and clean",
    },
]

export const skillsList = [
    {
        id:'0',
        name: 'HTML',
        understandingColor: '#0BE881'
    },
    {
        id:'1',
        name: 'CSS',
        understandingColor: '#0BE881'
    },
    {
        id:'2',
        name: 'Javascript',
        understandingColor: '#0BE881'
    },
    {
        id:'3',
        name: 'NodeJs (ExpressJs)',
        understandingColor: '#0BE881'
    },
    {
        id:'4',
        name: 'ReactJs',
        understandingColor: '#0BE881'
    },
    {
        id:'5',
        name: 'React Native',
        understandingColor: '#1890FF'
    },
    {
        id:'6',
        name: 'Mongodb (Mongoose)',
        understandingColor: '#1890FF'
    },
    {
        id:'7',
        name: 'Linux',
        understandingColor: '#1890FF'
    },
    {
        id:'8',
        name: 'Web Security',
        understandingColor: '#1890FF'
    },
    {
        id:'9',
        name: 'Ethical Hacking',
        understandingColor: '#1890FF'
    },
    {
        id:'10',
        name: 'Cisco Technologies',
        understandingColor: '#FFC312'
    },
    {
        id:'11',
        name: 'Worpress',
        understandingColor: '#FF4D4F'
    },
]

export const educationList = [
    
    {
        id: 1,
        courseName: 'The Complete JavaScript Course',
        instructor:'Jonas Schmedtmann',
        technologies: ['Javascript','Html','Css','OOP', 'Async Js','ES6+','Babel','Parcel'],
        type:'Online Training',
        courseProvider: 'Udemy',
        date:'Juin 2019'
    },
    {
        id: 2,
        courseName: 'Advanced CSS and Sass',
        instructor:'Jonas Schmedtmann',
        technologies: ['Sass','Grid','Flexbox', 'Animations','Responsive', 'Css Architecture'],
        type:'Online Training',
        courseProvider: 'Udemy',
        date:'July 2019'
    },
    {
        id: 3,
        courseName: 'React - The Complete Guide (Hooks, React Router, Redux)',
        instructor:'Maximilian Schwarzmüller',
        technologies: ['Hooks','Redux','Routing','Animations','Firebase',],
        type:'Online Training',
        courseProvider: 'Udemy',
        date:'September 2019'
    },
    {
        id: 4,
        courseName: 'Node.js, Express, MongoDB Bootcamp',
        instructor:'Jonas Schmedtmann',
        technologies: ['Express','Mongoose','Security','Payment','Deploy','SSR','REST'],
        type:'Online Training',
        courseProvider: 'Udemy',
        date:'February 2020'
    },
    {
        id: 5,
        courseName: 'Cisco CCNA',
        instructor:'Salah Eddine Zallat',
        technologies: ['LAN Switching','Security','Routing','Maintenance'],
        type:'School',
        courseProvider: 'ICT-TOWERS',
        date:'July 2019'
    },
]

export const experienceList = [
    {
        id: 0,
        role :'Frontend Developer',
        company:'Quizzito',
        date :'SEPTEMBER 2020 - December 2020',
        summary :'Quizzito is platform that affects the areas of education and knowledge it aims to encourage children to read in a dynamic and interactive environment',
        tasks: [
            'Implement new features',
            'Fix bugs on the UI',
            'Enhance user interface',
            'Participate in the UX tasks'
        ]
    
    },
    {
        id: 1,
        role :'Web Security Researcher',
        company:'',
        date :'2017 - 2019',
        summary :'Security researcher with good knowledge in OWASP top 10. More than2 years of experience around vulnerabilities hunting and bug bounties, mainly on client-side issues. During the past years I helped big tech companies such as Yahoo, Dropbox and Slack ..., by reporting security issues on their platforms and suggesting how fix them, vulnerabilities ranged from low to critical.',
        tasks: [
            'YAHOO: Stored XSS on the main domaine',
            'SLACK: Stored XSS',
            'DROPBOX: Traversal to Local File Read',
            'ZOHO: Several bugs',
            'Bugs on the integrity and other plateforms',
        ]
    
    },
]


