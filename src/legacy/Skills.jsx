/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Skills.css';
import { FaJsSquare, FaLinux, FaDatabase, FaNode, FaNodeJs,
    FaPen, FaGithub, FaGit, FaPython, FaBootstrap,
    FaHtml5, FaCss3, FaReact,
    FaBrain,
    FaRobot,
    FaCloud,
 } from 'react-icons/fa';
import { Box, Card, Heading,Stack } from "@chakra-ui/react";


function Skills() {


    const skill = [
        {
            title: "Javascript",
            icon: <FaJsSquare size={'40px'}/>,
            description: "ES6+, Async/Await, EsLint, npm, Babel, Webpack"
        },
        {
            title: "Python",
            icon: <FaPython size={'40px'}/>,
            description: "OOP, Django, Flask, Pandas, Numpy, Jupiter Notebooks"
        },
        {
            title: "HTML5",
            icon: <FaHtml5 size={'40px'}/>,
            description: "Semantic HTML, HTML5 APIs, VS Code Extensions"
        },
        {
            title: "CSS",
            icon: <FaCss3 size={'40px'}/>,
            description: "Responsive Design, Media Queries, SASS, Bootstrap"
        },
        {
            title: "BootStrap",
            icon: <FaBootstrap size={'40px'}/>,
            description: "Bootstrap Grid, Icons, Themes, Componets, Custom Themes"
        },
        {
            title: "Node.js",
            icon: <FaNode size={'40px'}/>,
            description: "REST APIs, Asynchronous Programming, Postman"
        },
        {
            title: "React",
            icon: <FaReact size={'40px'}/>,
            description: "React Hooks, Context API, JSX, Redux, React Router, Chakra ui"
        },
        {
            title: "Git",
            icon: <FaGit size={'40px'}/>,
            description: "Git Workflows, Branching, Merging."
        },
        {
            title: "GitHub",
            icon: <FaGithub size={'40px'}/>,
            description: "Version Control, Pull Requests, GitHub CLI, GitHub Pages"
        },
        {
            title: "Deployment",
            icon: <FaCloud size={'40px'}/>,
            description: "Docker, Github Pages, Vercel, Render, CI/CD Basics"
        },
        {
            title: "Machine Learning",
            icon: <FaBrain size={'40px'}/>,
            description: "Model Integration, Data Processing, Scrit-learn, Pandas, Numpy"
        },
        {
            title: "LLM Integration",
            icon: <FaRobot size={'40px'}/>,
            description: "OpenAI, Groq, Google AI Studio, Prompt Engineering, API Orchestration"
        }
    ]

    function SkillCard(props) {

        return (
            <Card.Root
                maxWidth={'390px'}
                minHeight={'150px'}
                width={'100%'}
                margin={'20px'}
                >
                <Card.Body className="skill-body">
                    <div className="skill-icon">
                        <div>{props.icon}</div>
                    </div>
                    <div>
                        <p style={{opacity:'0.5'}}>{props.tech_stack}</p>
                        <p>{props.stack_details}</p>
                    </div>
                </Card.Body>
            </Card.Root>
        )
    }

    return (
            <div
                className='skills'
                >
                <div
                    className='skills-container'
                    >
                    {skill.map((tech) => (
                        <SkillCard
                            key={tech.title}
                            tech_stack={tech.title}
                            icon={tech.icon}
                            stack_details={tech.description}
                        />
                    ))}
                </div>
            </div>
    )
}

export default Skills
