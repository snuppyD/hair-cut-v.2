import { useState } from 'react';
import { Calculation } from './components/Cat';
import { Calculate } from './components/Dog';
import './App.css';


function App() {
  // const [inputName, setInputName] = useState('')
  const [animal, setAnimal] = useState()
  if (animal === 'dog') {
  return (
    <Calculation setAnimal={setAnimal} />
  );
} else if (animal === 'cat') {
  return (
    <Calculate setAnimal={setAnimal} />
  )
}
}

export default App;
