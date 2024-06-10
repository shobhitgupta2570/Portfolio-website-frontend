import './App.css';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "*",
    element: <NotFoundPage></NotFoundPage>,
  },

]);
function App() {
  return (
    <div className="App">
      <Provider>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
