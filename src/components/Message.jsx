import React,{useState} from 'react'
import axios from 'axios'
const HTTP="http://localhost:5000/chat"


const Message = () => {
const [prompt,setPrompt] = useState('')
const [response,setResponse] = useState('')


const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${HTTP}`, {prompt})
    .then(res=>setResponse(res.data))
    .catch(error=>console.log(error))
}

const handlePrompt = (e) => setPrompt(e.target.value)
  return (
    <div className='container container-sm p-1'>
        <h1 className='title text-center text-darkGreen'>
            Thank You Message
        </h1>
        <form className='form'
        onSubmit={handleSubmit}
        >
<div className='form-group'>
    <label htmlFor=''>Ask Questions</label>
    <input type='text'
    className='shadow-up'
    placeholder='Enter text'
    value={prompt}
    onChange={handlePrompt}
    />
</div>
        </form>
      
<div className='p-1 mt-2'>
    <p>{response ? response : "Ask me anything..."}</p>

</div>

    </div>
  )
}

export default Message
