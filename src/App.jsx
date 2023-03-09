import { useState } from 'react'
import { useForm } from 'react-hook-form'

import './App.css';
import './components/header/index.jsx'

import Header from './components/header/index.jsx';
import Footer from './components/footer';
import Icon from './assets/cep.png';

function App() {
  const { register, setValue, setFocus } = useForm()

  
  function checkCep(e) {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    
    if(cep.length !== 8){
      return
    }
  
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json()).
        then((data) => {
        setValue('rua', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('estado', data.uf);

        if (data.logradouro) {
          setFocus('numero');
        } else {
          setFocus('rua');
        }
      });
  }

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
            <input type="text"
              name='cep'
              className="input"
              placeholder="Digite o cep"
              {...register('cep')}
              onBlur={checkCep}
              maxLength={8}
            />

          </div>

          <div className="field">
            <span>Rua</span>
            <input type="text"
              name='rua'
              className="input"
              placeholder="Digite o logradouro"
              {...register('rua')} />
          </div>

          <div className="field">
            <span>Numero</span>
            <input type="number"
              name='numero'
              className="input"
              placeholder="Digite o numero"
              {...register('numero')} />
          </div>

          <div className="field">
            <span>Bairro</span>
            <input type="text"
              name='bairro'
              className="input"
              placeholder="Digite o logradouro"
              {...register('bairro')} />
          </div>

          <div className="field">
            <span>Cidade</span>
            <input type="text"
              name='cidade'
              className="input"
              placeholder="Digite o logradouro"
              {...register('cidade')} />
          </div>
          <div className="field">
            <span>Estado</span>
            <input type="text"
              name='estado'
              className="input"
              placeholder="Digite o logradouro"
              {...register('estado')} />
          </div>
        </form>
      </main>

      <Footer />
    </div>
  )
}

export default App
