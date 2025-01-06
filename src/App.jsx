import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import homeBg from './assets/home-bg.jpg';
import aboutBg from './assets/about-bg.jpg';
import projectsBg from './assets/projects-bg.jpg';
import hobbiesBg from './assets/hobbies-bg.jpg';
import workHistoryBg from './assets/work-history-bg.jpg';
import contactBg from './assets/contact-bg.jpg';

const App = () => {
  const location = useLocation();

  // Map routes to specific background images


const backgroundImages = {
  '/': homeBg,
  '/about': aboutBg,
  '/projects': projectsBg,
  '/hobbies': hobbiesBg,
  '/work-history': workHistoryBg,
  '/contact': contactBg,
};

  // Default to a generic background if route is not explicitly mapped
  const currentBackground = backgroundImages[location.pathname] || '/assets/default-bg.jpg';

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${currentBackground})` }}
    >
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
