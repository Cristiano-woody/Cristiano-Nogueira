import './App.css';
import Presentation from './components/Presentation';
import Header from './components/Header'
import PopUpMenu from './components/PopUpMenu';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <PopUpMenu />
      </header>
      <section>
        <Presentation />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects/>
      </section>
    </div>
  );
}

export default App;
