const express = require("express")
const OpenAI = require("openai")
const app = express()
app.use(express.json())

const cors = require("cors"); // Import CORS module
// app.use(cors({
//     origin: 'http://127.0.0.1:5500'
// }));
app.use(cors()); // Enable CORS
const openai= new OpenAI(
    {
        apiKey:"YOUR API KEY"
    }
)
app.post('/getResponse',async(req,res)=>{
    const userPrompt = req.body.userPrompt;
    // console.log(userPrompt)
    const response = await openai.chat.completions.create({
        model:'gpt-3.5-turbo',
        messages:[{"role":"user","content":userPrompt}],
        max_tokens:10,  //change it(100) after finalizing everything

    })
    console.log(response.choices[0].message.content)
    res.json(response.choices[0].message.content)

})
app.listen(3000,()=>{
    console.log("server started")
})

