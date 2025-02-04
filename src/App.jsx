//import AboutMe from './AboutMe';
import Projects from './Projects';
//import Recommendation from './Recommendations';
import IconButton from './IconButton';
import Footer from './Footer';
import WorkProcess from './WorkProcess';
import WorkSteps from './WorkSteps';
import ContactMe from './ContactMe';
import HeaderSection from './HeaderSection';
import SkillSection from './SkillSection';
import './css/App.css'
import ProfileCard from './ProfileCard';

function App() {


  return (
    <>
    <HeaderSection/>
    <ProfileCard />
    <WorkProcess/>
    <Projects />
    <SkillSection/>
    <WorkSteps/>
    <ContactMe/>
    <IconButton />
    <Footer />
  </>
  )
}

export default App
