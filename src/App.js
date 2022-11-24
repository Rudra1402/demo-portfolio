import '../src/css/home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <Home />
      <hr style={{ color: "white", border: "1px solid white", backgroundColor: "white" }} />
      <Projects />
      <hr style={{ color: "white", border: "1px solid white", backgroundColor: "white" }} />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
