import { app } from "./app";
// import 'dotenv/config';
import { config } from 'dotenv';
import { Database } from "./config/DatabaseMongo";
config();




async function initModules() {
    console.log(" ~. Starting modules...");
    const database = Database.getInstance();
    await database.init();
    app.listen(process.env.PORT, () => console.log(" >. Server running in port "+process.env.PORT))
}

initModules()