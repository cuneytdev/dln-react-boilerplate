export interface User {
    name: string;
    surname: string;
    mail: string;
}

export interface UserLoginRequest {
    username: string;
    password: string;
}
