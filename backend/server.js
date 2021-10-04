import express from 'express';
import cors from 'cors';
import  mongoose from "mongoose";
import {} from 'dotenv/config'
import task from "./routes/task.js";

const app = express();


app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Hello to todo API');
})
app.use('/tasks',task);
const port = process.env.PORT || 5001;


mongoose.connect(process.env.ATLAS_URL,{useNewUrlParser:true, useUnifiedTopology:true}).then(app.listen(port,()=>{
    console.log(`Connected to server via port ${port}`);
    console.log(`Connected to mongodb database`);
})).catch((e)=>(console.log(e)))



