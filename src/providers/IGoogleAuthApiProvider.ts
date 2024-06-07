export interface GoogleAuthResponse {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
    token_type: string;
    id_token: string;
}
export interface GoogleUserInfo {
    email: string;
    family_name: string;
    given_name: string;
    id: string;
    locale: string;
    name: string;
    picture: string;
    verified_email: boolean;
}
export interface IGoogleAuthApiProvider {
    getGoogleOauthToken: (code: string) => Promise<GoogleAuthResponse>
    getGoogleUser: (id_token: string, access_token: string) => Promise<GoogleUserInfo>
}