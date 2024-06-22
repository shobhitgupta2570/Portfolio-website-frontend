import './App.css';
import AboutPage from './pages/AboutPage';
import CertificatesPage from './pages/CertificatesPage';
import ExperiencePage from './pages/ExperiencePage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectsPage from './pages/ProjectsPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SkillsPage from './pages/SkillsPage';
import EducationPage from './pages/EducationPage';
import SocialProfilesPage from './pages/SocialProfilesPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path:"/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path:"/projects",
    element: <ProjectsPage></ProjectsPage>,
  },
  {
    path:"/experience",
    element: <ExperiencePage></ExperiencePage>,
  },
  {
    path:"/skills",
    element: <SkillsPage></SkillsPage>,
  },
  {
    path:"/education",
    element: <EducationPage></EducationPage>,
  },
  {
    path:"/certificates",
    element: <CertificatesPage></CertificatesPage>,
  },
  {
    path:"/socialprofiles",
    element: <SocialProfilesPage></SocialProfilesPage>,
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },

]);
function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
