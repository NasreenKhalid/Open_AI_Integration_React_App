const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios');
const path = require('path');
const app = express();
require('dotenv').config()
const port = process.env.PORT;


const OpenAIApi = require('openai');
// const { default: App } = require('../client/src/App');


const openai = new OpenAIApi({
    apiKey:process.env.OPEN_AI_API_KEY
})

// const openai = new OpenAIApi(config)

app.use(bodyParser.json());
app.use(cors())

app.post("/chat",async(req,res)=>{
    const {prompt} = req.body;


    // const completion = await openai.completions.create({
    //     model:'text-davinci-003',
    //     max_tokens:50,
    //     temperature:0,
    //     prompt:prompt
    // });

    const completion = await openai.completions.create({
        model: 'gpt-3.5-turbo',  // Switch to the `gpt-3.5-turbo` model
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' }, // System message to set context
          { role: 'user', content: prompt }  // Your prompt
        ],
        max_tokens:50
    });
    res.send(completion.data.choices[0].text)
})


// app.use(express.static(path.join(__dirname, '../client/public')));

// app.get('/generate-message' , async (req,res) => {
//     console.log("skjhajs")
//     try{
//         const response = await axios.post('https://api.openai.com/v1/completions', {
//             prompt: ' Generate a thank you message for a teacher',
//             model: ' text-davinci-003',
//             max_tokens:50
//     }, {
//         headers: {
//             'Authorization' : `Bearer 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`
//         }
//     })  
//     res.send(response.data.choices[0].text.trim());
//     console.log(response.data)
// } catch (error) {
//   res.status(500).send('Error generating message');
//   console.error(error)
// }
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/public/index.html'));
//   });

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})