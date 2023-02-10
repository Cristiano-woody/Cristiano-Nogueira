import './App.css';
import Presentation from './components/Presentation';
import Header from './components/Header'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
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
      <section>
        <Contacts/>
      </section>
    </div>
  );
}

export default App;
