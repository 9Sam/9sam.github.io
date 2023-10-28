import {
   SiReact,
   SiAngular,
   SiBootstrap,
   SiExpress,
   SiNodedotjs,
   SiHtml5,
   SiTypescript,
   SiJavascript,
   SiJava,
   SiTailwindcss,
   SiMongodb,
   SiMysql,
   SiFigma,
   SiPhp,
   SiSass,
   SiNestjs,
   SiOracle,
   SiDiagramsdotnet,
   SiRedux,
   SiAutohotkey,
   SiPostman,
   SiGithub,
   SiGit,
   SiJira,
   SiMaterialui,
} from "react-icons/si";
import { TechnologyI } from "../types";

const iconClasses = "w-4 h-4 mx-auto float-right";

export const frontendItems: TechnologyI[] = [
   {
      name: "HTML5",
      link: "https://www.xataka.com/basics/que-html5-que-novedades-ofrece",
      skill: true,
      component: (
         <SiHtml5 className={iconClasses} style={{ fill: "#FF4C1E" }} />
      ),
   },
   {
      name: "Typescript",
      link: "https://www.typescriptlang.org/",
      skill: true,
      component: (
         <SiTypescript className={iconClasses} style={{ fill: "#3178C6" }} />
      ),
   },
   {
      name: "React",
      link: "https://es.reactjs.org/",
      skill: true,
      component: (
         <SiReact className={iconClasses} style={{ fill: "#00D8FF" }} />
      ),
   },
   {
      name: "Angular",
      link: "https://angular.io/",
      skill: true,
      component: <SiAngular className={iconClasses} style={{ fill: "red" }} />,
   },
   {
      name: "Bootstrap",
      link: "https://getbootstrap.com/docs/5.2/getting-started/introduction/",
      skill: true,
      component: (
         <SiBootstrap className={iconClasses} style={{ fill: "#8300FF" }} />
      ),
   },
   {
      name: "Tailwindcss",
      link: "https://tailwindcss.com/",
      skill: true,
      component: (
         <SiTailwindcss className={iconClasses} style={{ fill: "#38BDF8" }} />
      ),
   },
   {
      name: "Sass",
      link: "https://sass-lang.com/",
      skill: false,
      component: <SiSass className={iconClasses} style={{ fill: "#BF4080" }} />,
   },
   {
      name: "Javascript",
      link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      skill: false,
      component: (
         <SiJavascript className={iconClasses} style={{ fill: "#EFD81D" }} />
      ),
   },
   {
      name: "Redux Toolkit",
      link: "https://redux-toolkit.js.org/",
      skill: true,
      component: (
         <SiRedux className={iconClasses} style={{ fill: "#764abc" }} />
      ),
   },
];

export const backendItems: TechnologyI[] = [
   {
      name: "NodeJS",
      link: "https://nodejs.org/en/",
      skill: true,
      component: (
         <SiNodedotjs className={iconClasses} style={{ fill: "#8BC500" }} />
      ),
   },
   {
      name: "NestJs",
      link: "https://expressjs.com/es/",
      skill: true,
      component: (
         <SiNestjs className={iconClasses} style={{ fill: "#EA2845" }} />
      ),
   },
   {
      name: "ExpressJs",
      link: "https://expressjs.com/es/",
      skill: true,
      component: (
         <SiExpress className={iconClasses} style={{ fill: "#FF4C1E" }} />
      ),
   },
   {
      name: "MySQL",
      link: "https://www.mysql.com/",
      skill: true,
      component: (
         <SiMysql className={iconClasses} style={{ fill: "#00758F" }} />
      ),
   },
   {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
      skill: true,
      component: (
         <SiMongodb className={iconClasses} style={{ fill: "#4EAF3F" }} />
      ),
   },
   {
      name: "Java",
      link: "https://www.java.com/",
      skill: true,
      component: <SiJava className={iconClasses} style={{ fill: "red" }} />,
   },
   // {
   //    name: "Oracle",
   //    link: "https://www.oracle.com/database/",
   //    skill: true,
   //    component: <SiOracle className={iconClasses} style={{ fill: "#C74634" }} />,
   // },
];

export const othersItems: TechnologyI[] = [
   {
      name: "Git",
      link: "",
      skill: true,
      component: <SiGit className={iconClasses} style={{ fill: "#f14e32" }} />,
   },
   {
      name: "Figma",
      link: "https://www.figma.com/",
      skill: true,
      component: (
         <SiFigma className={iconClasses} style={{ fill: "#9D56F7" }} />
      ),
   },
   {
      name: "Draw.IO",
      link: "https://app.diagrams.net/",
      skill: true,
      component: (
         <SiDiagramsdotnet
            className={iconClasses}
            style={{ fill: "#F2931E" }}
         />
      ),
   },
   {
      name: "Postman",
      link: "https://www.postman.com/",
      skill: true,
      component: (
         <SiPostman className={iconClasses} style={{ fill: "#FF6C37" }} />
      ),
   },
   {
      name: "Jira",
      link: "https://www.atlassian.com/software/jira",
      skill: true,
      component: <SiJira className={iconClasses} style={{ fill: "#0052CC" }} />,
   },
   {
      name: "MaterialUI",
      link: "https://mui.com/",
      skill: true,
      component: (
         <SiMaterialui className={iconClasses} style={{ fill: "#3399FF" }} />
      ),
   },
   {
      name: "Autohotkey",
      link: "https://www.autohotkey.com/",
      skill: true,
      component: (
         <SiAutohotkey className={iconClasses} style={{ fill: "#24C15C" }} />
      ),
   },
];
