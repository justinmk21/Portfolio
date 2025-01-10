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
      url: "Kgomotso: kgomotsomkhawane2001@gmail.com",
    },
    {
      icon: faGithub,
      url: "https://github.com/justinmk21",
    },
    {
      icon: faLinkedin,
      url: "www.linkedin.com/in/kgomotso-mkhawane-4769bb219",
    },
    {
      icon: faMedium,
      url: "https://medium.com",
    },
    {
      icon: faStackOverflow,
      url: "https://stackoverflow.com",
    },
  ];

function Header() {

    return (
        <header className='header'>
                <nav
                  className='nav-section'
                  >
                    <HStack>
                    <a href={socials[0].url} style={{padding:'0px 10px'}} >
                        <FontAwesomeIcon icon={socials[0].icon} size="2x" />
                    </a>
                    <a href={socials[1].url} style={{padding:'0px 10px'}} >
                        <FontAwesomeIcon icon={socials[1].icon} size="2x" />
                    </a>
                    <a href={socials[2].url} style={{padding:'0px 10px'}} >
                        <FontAwesomeIcon icon={socials[2].icon} size="2x" />
                    </a>
                    <a href={socials[3].url} style={{padding:'0px 10px'}} >
                        <FontAwesomeIcon icon={socials[3].icon} size="2x" />
                    </a>
                    <a href={socials[4].url} style={{padding:'0px 10px'}} >
                        <FontAwesomeIcon icon={socials[4].icon} size="2x" />
                    </a>
                    </HStack>
                </nav>
                <div
                  className='menu-icon'>
                  <LuMenu size={46}/>
                </div>

                <nav
                  className="nav-bar"
                  >
                    <Flex
                      alignItems={'center'}

                      >
                      <ColorModeButton/>
                      <div>
                        <a className="topmenu" href="#skills">Skills</a>
                        <a className="topmenu" href="#projects">Projects</a>
                        <a className="topmenu" href="#recommendations">Recommendations</a>
                      </div>
                    </Flex>

                </nav>

        </header>
    )
}

export default Header
