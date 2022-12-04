import {useState, useRef} from 'react';
import newPassword from './newPassword';
import './App.css';

const initial = {
  NumCaracteres: 8,
  Number: false,
  CapitalLetters: false,
  Special: false
}

function App() {

  const [config, setConfig] = useState(initial);
  const [rango, setRango] = useState(8);
  const [contraseña, setContraseña] = useState('');
  const pass = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
    const result = newPassword(config);
    setContraseña(result);
  }

  const handleChangeRange = (e) => {
    setRango(e.target.value)
    setConfig({...config, [e.target.name]: Number(e.target.value)})
  }

  const handleChangeCheck = (e) => {
    setConfig({...config, [e.target.name]: e.target.checked})
  }

  const copy = () => {
    navigator.clipboard.writeText(contraseña).then(()=>{
      navigator.clipboard.readText()
    })
  }

  console.timeStamp();
  return (
    <div className="App">
      <div className="container">
          <div className='contra'>
              <input className='PassGenerada' placeholder='Generar Nueva Contraseña' type="text" disabled ref={pass} value={contraseña} />  
            {contraseña.length 
            ? <div><button onClick={copy} className='Copy'>Copy</button><button className='Delete' onClick={()=>setContraseña('')}>Delete</button></div> : null}
          </div>
          <form>
            <div className="rangoC">
              <p className='numC'>Numero de Caracteres</p>
              <div>
                <input value={rango} type="range" name='NumCaracteres' onChange={handleChangeRange} min='8' max='30'/><p>{rango}</p>
              </div>
            </div>
            <div>
              <p>Incluir Numeros</p>
              <input id='includeNum' onChange={handleChangeCheck} className='check' name='Number' type="checkbox" />
              <label className='label' for='includeNum'>000</label>
            </div>
            <div>
              <p>Incluir Mayusculas</p>
              <input id='includeMayus' onChange={handleChangeCheck} name='CapitalLetters' type="checkbox" />
              <label className='label' for='includeMayus'>000</label>
            </div>
            <div>
              <p>Incluir C.Especial</p>
              <input id='includeSpecial' onChange={handleChangeCheck} name='Special' type="checkbox" />
              <label className='label' for='includeSpecial'>000</label>
            </div>
            <input className='Submitxd' onClick={handleSubmit} type="submit" value="Generar" />
          </form>
      </div>
    </div>
  )
}

export default App
