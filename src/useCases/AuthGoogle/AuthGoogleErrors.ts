export class AuthGoogleError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AuthGoogleError';
    }
}

export class GoogleUserNotEmailVerified extends AuthGoogleError {
    constructor() {
        super('Email user is not verified.');
        this.name = 'EmailuserNotVerified';
    }
}

// export class UserNotFoundError extends AuthGoogleError {
//     constructor() {
//         super('No user found with the provided Google credentials.');
//         this.name = 'UserNotFoundError';
//     }
// }

// export class GoogleAuthTimeoutError extends AuthGoogleError {
//     constructor() {
//         super('The request to Google authentication service timed out.');
//         this.name = 'GoogleAuthTimeoutError';
//     }
// }