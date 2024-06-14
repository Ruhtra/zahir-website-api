import { User } from "./entities/GoogleUser";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            MONGOURI: string

            GOOGLE_CLIENT_ID: string
            GOOGLE_CLIENT_SECRET: string
            GOOGLE_REDIRECT_URL: string

            SECRET: string
        }
    }
}


// Augment express-session with a custom SessionData object
declare module "express-session" {
    interface SessionData {
        userId: User.id;
    }
}



// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }