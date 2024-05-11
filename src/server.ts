import { app } from "./app";
// import 'dotenv/config';
import { config } from 'dotenv';
import { Database } from "./config/DatabaseMongo";
config();




async function initModules() {
    console.log(" ~. Starting modules...");
    const database = Database.getInstance();
    await database.init();
    app.listen(3333, () => console.log(" >. Server running in port 3333"))
}

initModules()