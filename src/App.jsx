import './App.css';
import './components/header/index.jsx'
import Header from './components/header/index.jsx';
import Footer from './components/footer';
import Icon from './assets/cep.png';

function App() {

  return (
    <div className="container">
      <Header />

      <main className="main">
        <form className="form">

          <div className="icon">
            <img src={Icon} alt='logo' width='30%' />
          </div>

          <div className="field">
            <span>CEP</span>
            <input type="text" name='cep' className="input" placeholder="Digite o cep" />

          </div>
        </form>
      </main>

      <Footer />
    </div>
  )
}

export default App
