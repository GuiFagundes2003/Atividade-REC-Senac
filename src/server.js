import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import routes from "./routes/index.js";

dotenv.config();

const server = express();


server.use(cors());
server.use(express.json()); 
server.use(fileUpload());

server.use("/", routes);

server.listen(process.env.PORT, () => {
    console.log(`Rodando na porta: ${process.env.BASE}`);
});
