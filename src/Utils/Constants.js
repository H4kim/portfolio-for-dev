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

export const iconsComponents = {
    emailIcon : require('../assets/icons/EmailIcon').default,
    linkedInIcon : require('../assets/icons/LinkedInIcon').default,
    githubIcon : require('../assets/icons/GithubIcon').default,
    twitterIcon : require('../assets/icons/TwitterIcon').default,
}