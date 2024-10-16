export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#about',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'QuickSurvival - Minecraft Survival Optimization Plugin',
        desc: 'Quick Survival is a cutting-edge plugin designed to optimize the survival experience in Minecraft. It provides players with essential features like waypoint management, interactive custom inventories, and real-time effects such as fully functional beacon activation, enhancing gameplay and immersion.',
        subdesc:
            'Built using Java and the Bukkit API, Quick Survival is crafted for performance and flexibility. These technologies ensure that the plugin delivers a smooth, dynamic experience, adaptable for both casual players and experienced veterans of the game.',
        href: 'https://github.com/Gersh0/QuickSurvival.git',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/QSLogo.png',
        logoStyle: {
            backgroundColor: '#207552',
            border: '0.2px solid #63B090',
            boxShadow: '0px 0px 60px 0px #63B090',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'java.',
                path: '/assets/java.svg',
            },
        ],
    },
    {
        title: 'Typescript Compiler',
        desc: 'this compiler have the capacity to make basic operations like sum, subtraction, multiplication, division, and also have the capacity to make a simple print of the result of the operations.',
        subdesc:
            'This project was made using typescript, and inside the project we made a unique language that is used to make the operations.\n'
        +'\n ',
        href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'typescript',
                path: '/assets/typescript.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'EIA University',
        pos: 'Systems Engineering Student',
        duration: '2022 - Present',
        title: "",
        icon: '/assets/eiaLogo.png',
        animation: 'victory',
    },

];