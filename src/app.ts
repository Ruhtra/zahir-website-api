import express from "express";
import session from "express-session";
import { router } from "./router";

const app = express()

app.use(express.json())

app.set('trust proxy', 1) // trust first proxy
app.use(session({
    name: 'accessTokenSession',
        secret: process.env.SECRET,
        cookie: {
            maxAge: 15 * 60 * 1000, // 15 min
            httpOnly: true,
            // domain: process.env.production ? "https://zahir-website.onrender.com": "localhost",
            path: "/",
            sameSite: "none",
            secure: true
        },
        saveUninitialized: false,
        resave: true
}))

app.use((req, res, next) => {
    console.log(req.session);
    

    next()
})

app.use('/api', router)

export { app }