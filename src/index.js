const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const urlRoute=require('./routes/url')
const connectDB=require('./database/connect')
PORT=process.env.PORT;
url=process.env.URL
const app=express();
app.use(express.json())
app.use('/url',urlRoute)
app.listen(PORT,()=>{
    connectDB(url)
    .then(()=>console.log('mongoDB Connected'))

   console.log(`Surver is running on port ${PORT} `);
})