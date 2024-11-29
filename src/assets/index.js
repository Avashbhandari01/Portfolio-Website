// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import LinkedinBoxLineIcon from 'remixicon-react/LinkedinBoxLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'

export const heroIcons = [
    {
        icon: <InstagramLineIcon />,
        url: 'https://www.instagram.com/avash_bhandari01/'
    },
    {
        icon: <FacebookCircleLineIcon />,
        url: 'https://www.facebook.com/avash.bhandari.90/'
    },
    {
        icon: <LinkedinBoxLineIcon />,
        url: 'https://www.linkedin.com/in/avash-bhandari-10718a246/'
    },
    {
        icon: <YoutubeLineIcon />,
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
        icon: <GithubLineIcon />,
        url: 'https://github.com/Avashbhandari01'
    }
];

// AboutMe icons
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'

export const aboutData = [
    {
        title: 'Github Repos',
        amount: 26,
        icon: <GithubFillIcon />,
    },
    {
        title: 'Successful Projects',
        amount: 20,
        icon: <Projector2LineIcon />,
    },
    {
        title: 'Satisfied clients',
        amount: 10,
        icon: <GroupLineIcon />,
    },
    {
        title: 'Awards and Recognition',
        amount: 5,
        icon: <AwardFillIcon />,
    },
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =
    " Hi, I'm Avash, a web developer, designer, and full-stack developer. I blend the technical skills of web development with the creative aspects of web design. I have one year of experience in the React framework for the frontend and .NET for the backend. I code in HTML, CSS, JavaScript, React, NextJS, Node.js, and .NET to build functional and responsive websites and applications. I also use design tools like Figma to craft visually appealing and user-friendly interfaces. My role ensures websites and applications work seamlessly and look great while delivering an excellent user experience."
// End of AboutMe icons

// Skills
export const skillsData = [
    {
        name: 'HTML',
        icon: '/skills/html.png',
    },
    {
        name: 'CSS',
        icon: '/skills/css.png',
    },
    {
        name: 'JavaScript',
        icon: '/skills/js.png',
    },
    {
        name: 'Figma',
        icon: '/skills/figma.png',
    },
    {
        name: 'TailwindCSS',
        icon: '/skills/tailwind.png',
    },
    {
        name: 'Vite',
        icon: '/skills/vite.png',
    },
    {
        name: 'VS Code',
        icon: '/skills/vscode.png',
    },
    {
        name: 'ReactJS',
        icon: '/skills/react.png',
    },
    {
        name: 'TypeScript',
        icon: '/skills/ts.png',
    },
    {
        name: 'C#',
        icon: '/skills/csharp.png',
    },
    {
        name: 'Framer Motion',
        icon: '/skills/framer.png',
    },
    {
        name: 'NextJS',
        icon: '/skills/nextjs.png',
    },
    {
        name: 'NodeJS',
        icon: '/skills/nodejs.png',
    },
    {
        name: 'MongoDB',
        icon: '/skills/mongodb.png',
    },
    {
        name: 'Github',
        icon: '/skills/github.png',
    },
]

// import { PiCopyrightThin } from 'react-icons/pi'
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

// export const copyRightIcon = <PiCopyrightThin />
export const copyRightIcon = <CopyrightLineIcon />
// Experience
export const experienceData = [
    {
        year: 1,
        title: 'Bachleor Degree',
        education:
            'Course in BSc.(Hons) Computing',
        experience: [
            '• Enrolled in a 3 - year BSc.(Hons) Computing program.',
            '• Began with foundational programming concepts and languages.',
        ],
    },
    {
        year: 2,
        title: 'Internship at Sarvanam Software',
        education:
            'During my internship at Sarvanam Software, I enhanced ASPX pages, optimized stored procedures, resolved bugs, and gained skills in C#, .NET Webforms, and database management in SQL Server.',
        experience: [
            '• Hotel Management System: Enhanced a hotel management system by adding features, designing frontend pages, and optimizing backend data handling using .NET Webforms and MSSQL.',
            '• School Management System: Developed a school management system with ASP.NET Webforms and MSSQL, implementing stored procedures and updating features to meet client needs.',
        ],
    },
    {
        year: 3,
        title: 'Final Year Project',
        education:
            'Guardian Portal System is an online communication system through which parents can track their child progress in college/ school such as marks, attendance, teacher, remarks, exam results etc.',
        experience: [
            '• The system includes a chat feature for direct communication between parents and teachers about student progress and concerns.',
            '• Parents can monitor their child’s fee status and attendance based on monthly data',
        ],
    },
    {
        year: 4,
        title: 'Codeology Tech',
        education: 'At Codeology Tech, I developed new APIs and resolved issues for the Fonkka dating app, managed PostgreSQL for data manipulation, integrated HTML, CSS, and JS into React.js for APMS frontend, and architected the .NET backend API for seamless frontend-backend communication in APMS.',
        experience: [
            '• Full-Time Position: Worked as a junior .net and react developer.',
            '• Contributed to live projects, gaining hands-on experience in .NET and React development.',
        ],
    }
]

export const projectsData = [
    {
        name: 'planb-1a83c.web.app/',
        desc: 'Ardent IT Solutions offers expert skill rental and web development services to meet your business needs.',
        url: '/projects/image-1.PNG',
        tech: ['Figma', 'Photoshop', 'HTML'],
    },
    {
        name: 'avashbhandari01.github.io/React-Doctor-Appointment/',
        desc: 'A responsive doctor appointment system built with React, enabling users to sign up, filter doctors, book appointments, and manage profiles.',
        url: '/projects/image-2.PNG',
        tech: ['Figma', 'Photoshop'],
    },
    {
        name: 'github.com/Avashbhandari01/React-Memory-Game',
        desc: 'React Memory Game lets you score points by matching images, but clicking the same image twice ends the game',
        url: '/projects/image-3.PNG',
        tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        name: 'github.com/Avashbhandari01/Final-Year-Project',
        desc: 'The Guardian Portal System allows parents to track their childs progress, including marks, attendance, and exam results.',
        url: '/projects/image-4.PNG',
        tech: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS'],
    },
    {
        name: 'github.com/Avashbhandari01/MERN-BookingApp',
        desc: 'A hotel booking app for easy registration, search, and seamless room reservations online',
        url: '/projects/image-5.PNG',
        tech: ['Figma', 'ReactJS', 'TailwindCSS', 'CSS'],
    }
]

export const projectsButton = [
    'All',
    'Figma',
    'Photoshop',
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'TailwindCSS',
    'NextJS',
    'FramerMotion',
    'ThreeJS',
]

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'

export const navbarData = [
    {
        id: 'home',
        name: 'Home',
        icon: <Home5LineIcon />,
    },
    {
        id: 'about',
        name: 'About',
        icon: <UserLineIcon />,
    },
    {
        id: 'experience',
        name: 'MyRoad',
        icon: <HistoryLineIcon />,
    },
    {
        id: 'skills',
        name: 'Skills',
        icon: <BriefcaseLineIcon />,
    },
    {
        id: 'projects',
        name: 'Projects',
        icon: <ProjectorLineIcon />,
    },
    {
        id: 'contact',
        name: 'Contact',
        icon: <ContactsBook2LineIcon />,
    },
]

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const QuestionArrow = <ArrowDropDownLineIcon />

// Reviews

import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]

import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
