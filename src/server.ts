import 'dotenv/config';
import fs from 'fs';
import https from 'https';
import http from "http";

import { app } from "./app";
import path from 'path';

async function initModules() {
    console.log(" ~. Starting modules...");

    // Initialize Dbs
    // const database = Database.getInstance();
    // await database.init(process.env.MONGOURI);

    //Initialize App

    // const options = {
    //     key: fs.readFileSync(path.join(__dirname, '..', 'keys', 'key.pem')),    // Caminho para a chave privada
    //     cert: fs.readFileSync(path.join(__dirname, '..', 'keys', 'cert.pem')) // Caminho para o certificado SSL
    // };

    // console.log(options);
    

    http.createServer(app).listen(process.env.PORT, () => {
        console.log(" >. Server running in: http://localhost:" + process.env.PORT)
    });
}

initModules();