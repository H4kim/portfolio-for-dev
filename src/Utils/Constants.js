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
        link:'mailito:ozil.hakim@gmail.com'
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
        github: '#',
        link: '#',
        title: 'PizzUp',
        text:'Ecommerce web application dedicated to individuals with small stores ( Restaurants ) it come with a admin dashboard where the admins can CRUD products, categories, customers .. , and also manage the orders in an easy way  also a client part with a clean and clear user interface for users (customers) to be able to order products and see updates',
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
        id:'0',
        name: 'Javascript',
        understandingColor: '#0BE881'
    },
    {
        id:'1',
        name: 'NodeJs (ExpressJs)',
        understandingColor: '#0BE881'
    },
    {
        id:'4',
        name: 'ReactJs',
        understandingColor: '#0BE881'
    },
    {
        id:'4',
        name: 'React Native',
        understandingColor: '#1890FF'
    },
    {
        id:'2',
        name: 'Mongodb (Mongoose)',
        understandingColor: '#1890FF'
    },
    {
        id:'0',
        name: 'Linux',
        understandingColor: '#1890FF'
    },
    {
        id:'0',
        name: 'Web Security',
        understandingColor: '#1890FF'
    },
    {
        id:'0',
        name: 'Ethical Hacking',
        understandingColor: '#1890FF'
    },
    {
        id:'0',
        name: 'Cisco Technologies',
        understandingColor: '#FFC312'
    },
    {
        id:'3',
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
        courseName: 'React js and Redux',
        instructor:'Jonas Schmedtmann',
        technologies: ['ReactJs','Redux'],
        type:'Online Training',
        courseProvider: 'Udemy',
        date:'September 2019'
    },
    {
        id: 4,
        courseName: 'Node.js, Express, MongoDB Bootcamp',
        instructor:'Jonas Schmedtmann',
        technologies: ['Express','Mongoose','Security','CCard Payment','Deploy','SSR','REST'],
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
        date :'Mars 2020 - December 2020',
        summary :'I am a Senior Full-Stack Front-End developer to the RBC Omni (Online Business Banking). My daily tasks are about reviewing my colleague’s code, make technical recommendations, and contribute to building scalable and re-usable modules by collaborating with other production teams, including the design system/platform team. The code I write is targetted to run with Angular 8 in TypeScript 3.4.',
        tasks: [
            'views. Allowing to slim down many views that would also need hidden form that were re-implemented numerous times.',
            'Teach how to write and publish small packages and how to publish on Nexus',
            'Make module stubs for the Backend chapter to write Express.js middleware in isolation instead of from a monolith'
        ]
    
    },
    {
        id: 1,
        role :'Web Security Researcher',
        company:'Hackerone',
        date :'Mars 2020 - December 2020',
        summary :'I am a Senior Full-Stack Front-End developer to the RBC Omni (Online Business Banking). My daily tasks are about reviewing my colleague’s code, make technical recommendations, and contribute to building scalable and re-usable modules by collaborating with other production teams, including the design system/platform team. The code I write is targetted to run with Angular 8 in TypeScript 3.4.',
        tasks: [
            'views. Allowing to slim down many views that would also need hidden form that were re-implemented numerous times.',
            'Teach how to write and publish small packages and how to publish on Nexus',
            'Make module stubs for the Backend chapter to write Express.js middleware in isolation instead of from a monolith'
        ]
    
    },
]