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
        current: false,
        github: '#',
        link: '#',
        title: 'ZappNode',
        text:'An uptime monitoring service can help you by testing if your site, app or server is still up and running. If some of its features arent working as intended, or if it goes down entirely, the owner will be notified so that they can swiftly start resolving the issue. ZappNode is one of such uptime monitoring services.',
    },
    {
        id:'1',
        current: false,
        github: '#',
        link: '#',
        title: 'Tours',
        text:'Even the best of us can have a bad day every now and then. The same can be said for websites. An uptime monitoring service can prepare you for these moments by testing if your site, app or server is still up and running. If some of its features arent working as intended, or if it goes down entirely, the owner will be notified so that they can swiftly start resolving the issue. ZappNode is one of such uptime monitoring services.',
    },
    {
        id:'2',
        current: true,
        github: '#',
        link: '#',
        title: 'PizzUp',
        text:'Even the best of us can have a bad day every now and then. The same can be said for websites. An uptime monitoring service can prepare you for these moments by testing if your site, app or server is still up and running. If some of its features arent working as intended, or if it goes down entirely, the owner will be notified so that they can swiftly start resolving the issue. ZappNode is one of such uptime monitoring services.',
    },
   
]

export const skillsList = [
    {
        id:'0',
        name: 'Javascript',
        understandingColor: '#0BE881'
    },
    {
        id:'4',
        name: 'ReactJs',
        understandingColor: '#0BE881'
    },
    {
        id:'1',
        name: 'NodeJs',
        understandingColor: '#1890FF'
    },
    {
        id:'2',
        name: 'Mongodb',
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
        courseName: 'All Javascript',
        instructor:'Jonas',
        technologies: ['Javascript','Html','Css'],
        type:'Online Training',
        courseProvider: 'Udemy',
        date:'Juin 2018'
    },
    {
        id: 2,
        courseName: 'React js and Redux',
        instructor:'Jonas',
        technologies: ['ReactJs','Redux'],
        type:'Online Training',
        courseProvider: 'Udemy',
        date:'August 2019'
    },
    {
        id: 3,
        courseName: 'Nodejs full course',
        instructor:'Jonas',
        technologies: ['Nodejs','Mongodb','Express','Mongoose'],
        type:'Online Training',
        courseProvider: 'Udemy',
        date:'January 2020'
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