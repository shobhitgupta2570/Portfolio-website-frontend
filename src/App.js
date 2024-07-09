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
import Layout from './Layout'; 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><HomePage /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><AboutPage /></Layout>,
  },
  {
    path: "/projects",
    element: <Layout><ProjectsPage /></Layout>,
  },
  {
    path: "/experience",
    element: <Layout><ExperiencePage /></Layout>,
  },
  {
    path: "/skills",
    element: <Layout><SkillsPage /></Layout>,
  },
  {
    path: "/education",
    element: <Layout><EducationPage /></Layout>,
  },
  {
    path: "/certificates",
    element: <Layout><CertificatesPage /></Layout>,
  },
  {
    path: "/socialprofiles",
    element: <Layout><SocialProfilesPage /></Layout>,
  },
  {
    path: "*",
    element: <NotFoundPage />,
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
