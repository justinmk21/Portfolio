import AboutMe from './AboutMe';
import Projects from './Projects';
import Recommendation from './Recommendations';
import IconButton from './IconButton';
import Footer from './Footer';
import WorkProcess from './WorkProcess';
import WorkSteps from './WorkSteps';
import ContactMe from './ContactMe';
import HeaderSection from './HeaderSection';
import SkillSection from './SkillSection';
import './css/App.css'

function App() {


  return (
    <>
    <HeaderSection/>
    <AboutMe />
    <WorkProcess/>
    <SkillSection/>
    <WorkSteps/>
    <Projects />
    <ContactMe/>
    <Recommendation />
    <IconButton />
    <Footer />
  </>
  )
}

export default App
