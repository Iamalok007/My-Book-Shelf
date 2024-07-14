import express from 'express';
import {PORT,mongoDBURL} from './config.js';
import mongoose from 'mongoose';
//import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(200).json({message:'Hello World'});
        
})

app.use('/books',booksRoute);


mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
   
}).catch((error) => {
    console.log('Error:', error);
});
