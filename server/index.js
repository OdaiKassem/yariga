import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import userRouter from './routes/user.routes.js'
import propertyRouter from './routes/property.routes.js'

dotenv.config();
const app = express ();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get('/', (req, res) => {
    res.send({message:'Hello World'});
})
const CONNECTION_URL = 'mongodb+srv://engodaikassem:O2fykYnAfZPHIso8@cluster0.mqplnjb.mongodb.net/?retryWrites=true&w=majority';
const PORT =process.env.port || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true , useUnifiedTopology: true})
app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);
const startServer = async () => {
    try {
     connectDB(process.env.MONGODB_URL);
     app.listen(8080, () => console.log('server started at http://localhost:8080'));   
    } catch (error) {
      console.log(error);  
    }
}
startServer();