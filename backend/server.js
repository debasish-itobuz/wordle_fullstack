import express from 'express';
import cors from 'cors';
import { generate} from "random-words";

console.log(generate({ minLength: 5, maxLength: 5 }));

const app = express()
const port = 8008
app.use(cors())

app.get('/getWord', (req, res)=>{

    res.send({
        data: generate({ minLength: 5, maxLength: 5 }),
        status: 200,
        message: "success"
    })
})

app.listen(port , ()=>{
    console.log(`Server running at port ${port}`)
})