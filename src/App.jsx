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
            <label>Num... Caracteres</label><input value={rango} type="range" name='NumCaracteres' onChange={handleChangeRange} min='8' max='30'/><label>{rango}</label><br />
            <label>Incluir Numeros</label><input onChange={handleChangeCheck} className='check' name='Number' type="checkbox" /><br />
            <label>Incluir Mayusculas</label><input onChange={handleChangeCheck} name='CapitalLetters' type="checkbox" /><br />
            <label>Incluir caracter especiales</label><input onChange={handleChangeCheck} name='Special' type="checkbox" /><br />
            <input onClick={handleSubmit} type="submit" value="Generar" />
          </form>
      </div>
    </div>
  )
}

export default App
