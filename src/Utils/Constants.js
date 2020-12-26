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
        text:'Even the best of us can have a bad day every now and then. The same can be said for websites. An uptime monitoring service can prepare you for these moments by testing if your site, app or server is still up and running. If some of its features arent working as intended, or if it goes down entirely, the owner will be notified so that they can swiftly start resolving the issue. ZappNode is one of such uptime monitoring services.',
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