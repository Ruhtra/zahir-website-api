import axios from "axios";
import { GoogleAuthResponse, GoogleUserInfo, IGoogleAuthApiProvider } from "../IGoogleAuthApiProvider";
import { stringify } from "querystring";

export class GoogleAuthApiProvider implements IGoogleAuthApiProvider {

    // async findByEmail(email: string): Promise<User> {
    async getGoogleOauthToken(code: string): Promise<GoogleAuthResponse> {
        const url = "https://oauth2.googleapis.com/token"

        const values = {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_REDIRECT_URL,
            grant_type: "authorization_code"
        };


        try {
            const res = await axios.post(url, stringify(values), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })


            return res.data
        } catch (err) {
            console.log("error in fetch Google oauth tokens ")
            throw new Error(err)
        }
    }
    async getGoogleUser(id_token: string, access_token: string): Promise<GoogleUserInfo> {
        try {
            const res = await axios.get<GoogleUserInfo>(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`, {
                headers: {
                    Authorization: `Bearer ${id_token}`
                }
            })
            return res.data
        } catch (error) {
            console.log(error, "Error ftchig Google user");
            throw new Error(error);
        }
    }

}