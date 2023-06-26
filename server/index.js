import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import express from 'express';
import postRoutes from './routes/posts.js';


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());


app.use('/posts', postRoutes);


const CONNECTION_URI = 'mongodb://127.0.0.1:27017';
const PORT = 5000;

mongoose.connect(CONNECTION_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => app.listen(PORT, () =>console.log(`Server running on port ${PORT}`)))
.catch(err => console.log(err.message))

