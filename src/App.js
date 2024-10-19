import React, {useState} from 'react'
import './App.css';
import Message from './components/Message';

function App() {

const [message,setMessage] = useState('')

const generateMessage = async () => {
  try{
    const response = await fetch('/generate-message')
    const data = await response.text();
    console.log("3533",data)
    setMessage(data)
  } catch(error){
    console.error('Error fetchong message', error)
  }
}


  return (
    <div className="App">
     <Message />
    </div>
  );
}

export default App;
