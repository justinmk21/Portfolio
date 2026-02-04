import './Header.css';
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { LuMenu } from 'react-icons/lu';
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
  } from "@fortawesome/free-brands-svg-icons";
import { Flex, HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./components/ui/color-mode";

  const socials = [
    {
      icon: faEnvelope,
      label: "Email",
      url: "mailto:kgomotsomkhawane2001@gmail.com",
    },
    {
      icon: faGithub,
      label: "GitHub",
      url: "https://github.com/justinmk21",
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/kgomotso-mkhawane-4769bb219",
    },
    {
      icon: faMedium,
      label: "Medium",
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      label: ":Stack Overflow",
      url: "https://stackoverflow.com",
    },
  ];

function Header() {

    const handleOpenLink = (link) => {
      window.open(link, '_blank');
    };

    return (
        <header className='header'>
                <nav
                  className='nav-section'
                  >
                    <HStack>

                      <div
                        onClick={() => handleOpenLink(socials[0].url)}
                        style={{ padding:'0px 10px', cursor: 'pointer' }}
                        >
                        <FontAwesomeIcon icon={socials[0].icon} size='2x' />
                      </div>
                      
                      <div
                        onClick={() => handleOpenLink(socials[2].url)}
                        style={{ padding:'0px 10px', cursor: 'pointer' }}
                        >
                        <FontAwesomeIcon icon={socials[2].icon} size="2x" />
                      </div>

                      <div
                        onClick={() => handleOpenLink(socials[1].url)}
                        style={{ padding:'0px 10px', cursor: 'pointer' }}
                        >
                        <FontAwesomeIcon icon={socials[1].icon} size='2x' />
                      </div>

                    </HStack>
                </nav>
                <div
                  className='menu-icon'>
                  <LuMenu size={46} />
                </div>

                <nav
                  className="nav-bar"
                  >
                    <Flex
                      alignItems={'center'}
                      >
                      <div>
                        <a className="topmenu" href="#skills">Skills</a>
                        <a className="topmenu" href="#projects">Projects</a>
                        {/**<a className="topmenu" href="#recommendations">Recommendations</a> */}
                      </div>
                    </Flex>

                </nav>

        </header>
    )
}

export default Header
