import './App.css';
import NavbarComponent from './components/navbar/navbar';
import AboutSection from './pages/about/about';
import OurCoursesPage from './pages/courses/courses';
import FooterSection from './pages/footer/footer';
import HomePage from './pages/home/home';
function App() {
  return (
    <div style={{color:'white'}}>
      <NavbarComponent/>
      <HomePage/>
      <AboutSection/>
      <OurCoursesPage/>
      <div style={{minHeight:'30vh',width:'100vw',background:"rgb(230,230,230)"}}>
        Map Part
      </div>
      <FooterSection/>
    </div>
  );
}

export default App;
