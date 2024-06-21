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
    path:"/certificates",
    element: <CertificatesPage></CertificatesPage>,
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
