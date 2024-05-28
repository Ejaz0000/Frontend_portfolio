import mongo from "../assets/mongodb.png"
import s1 from "../assets/S1.png"
import s2 from "../assets/S2.png"


 
 const html = <img width="100" height="100" src="https://img.icons8.com/ios-filled/50/000000/html-5--v1.png" alt="html-5--v1"/>
 const css = <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/000000/css3.png" alt="css3"/>
 const js =<img width="100" height="100" src="https://img.icons8.com/ios-filled/100/000000/javascript-logo.png" alt="javascript-logo"/>
 const php =<img width="100" height="100" src="https://img.icons8.com/ios-filled/100/000000/php-logo.png" alt="php-logo"/>
 const react =<img width="100" height="100" src="https://img.icons8.com/ios-filled/100/000000/react-native.png" alt="react-native"/>
 const next =<img width="96" height="96" src="https://img.icons8.com/fluency-systems-filled/96/nextjs.png" alt="nextjs"/>
 const laravel =<img width="100" height="100" src="https://img.icons8.com/ios/100/laravel.png" alt="laravel"/>
 const java =<img width="100" height="100" src="https://img.icons8.com/ios/100/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
 const flutter =<img width="100" height="100" src="https://img.icons8.com/ios-filled/100/flutter.png" alt="flutter"/>
 const mysql =<img width="100" height="100" src="https://img.icons8.com/ios/100/000000/mysql-logo.png" alt="mysql-logo"/>
 const figma =<img width="90" height="90" src="https://img.icons8.com/ios-glyphs/90/figma.png" alt="figma"/>
 const tailwind = <img width="60" height="80" src="https://img.icons8.com/material-rounded/24/tailwind_css.png" alt="tailwind_css"/>
 const mogo = <img src={mongo} alt="mongodb"/>

export const lang = [
    {
      title: "HTML",
      image: html,
      percent: 85,
    },
    {
        title: "CSS",
        image: css,
        percent: 80,
    },
    {
        title: "JavaScript",
        image: js,
        percent: 80,
    },
    {
        title: "PHP",
        image: php,
        percent: 60,
    },
    {
        title: "JAVA",
        image: java,
        percent: 85,
    },
    
  ];

  export const Framework = [
    {
      title: "REACT",
      image: react,
      percent: 75,
    },
    {
        title: "NEXT.js",
        image: next,
        percent: 80,
    },
    {
        title: "TAILWIND",
        image: tailwind,
        percent: 75,
    },
    {
        title: "LARAVEL",
        image: laravel,
        percent: 45,
    },
    {
        title: "FLUTTER",
        image: flutter,
        percent: 80,
    },
    
  ];

  export const tools = [
    {
      title: "MYSQL",
      image: mysql,
      percent: 70,
    },
    {
        title: "MONGO DB",
        image: mogo,
        percent: 75,
    },
    {
        title: "FIGMA",
        image: figma,
        percent: 75,
    },
    
  ];

  export const projects = [
    {
      title: "Clothing E-com",
      image: s1,
      description: "A FullStack website for clothing and fashion. The web contents and products are managed by a separate admin site.",
      visit : "https://clothing-e-commerce-tau.vercel.app/",
      code: "https://github.com/Ejaz0000/Clothing-E-commerce-.git",
      tools: [
        "Nextjs",
        "Styled Component",
      ],
    },
    {
        title: "Ai Dev",
        image: s2,
        description: "A landing page with mordern design for a AI development assistant tool with number of section animation for your to interact with.",
        visit : "https://ai-dev-six.vercel.app/",
        code: "https://github.com/Ejaz0000/AI-dev.git",
        tools: [
            "React",
            "Tailwindcss",
            "Framer motion",
          ],
      },
    
  ];