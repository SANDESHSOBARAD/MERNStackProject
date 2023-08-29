import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js';


const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

//mongodb for database - cloud atlas

const CONNECTION_URL = 'mongodb+srv://sobaradsandesh98:Sandesh1124@memories.yyy9u0l.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
.catch((error) => console.log(error.message))
