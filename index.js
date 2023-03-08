import express, { Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./router/user.js";

const app = express();

const PORT = 3000

app.use(cors())
app.use(bodyParser.json({limit: '30mb'}))
app.use('/', router)


app.listen(PORT, () => console.log('Servidor funcionando ' + PORT))

