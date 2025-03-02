import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import { createBrowserRouter ,Outlet} from "react-router-dom";

import Header from './Components/header';
import Main from "./Components/main";
import About from "./Components/about";
import AboutMore from "./Components/aboutMore";
import SkillsSection from "./Components/skills";
import FooterSection from "./Components/footer";
import ContactSection from "./Components/contact";
import ResumeSection from "./Components/resume";

function App() {
  return (
   <>
    {/* <Header/>
    <Main/>
    <About/>
    <SkillsSection/>
    <FooterSection/> */}
    <Outlet/>
   </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:[<Header/>,<Main/>,<About/>,<SkillsSection/>,<FooterSection/>]
      },
      {
        path:"/about",
        element:[<Header/>,<AboutMore/>,<FooterSection/>]
      },
      {
        path:"/skills",
        element:[<Header/>,<SkillsSection/>,<FooterSection/>]
      },
      {
        path:"/contact",
        element:[<Header/>,<ContactSection/>,<FooterSection/>]
      },
      {
        path:"/resume",
        element:[<Header/>,<ResumeSection/>,<FooterSection/>]
      },
    ]
  }
])

// export default App;
