import Catchy from "../landing_parts/Catchy";
import Approach from "../landing_parts/Approach";
import Contact from '../landing_parts/Contact';
import Projects from "../landing_parts/Projects";


const Landing = (props) => {
  return (
    <div>
      <Catchy />
      <Approach />
      <Projects />
      <Contact />
    </div>
  );
}
export default Landing;