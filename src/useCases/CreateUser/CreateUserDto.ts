export interface ICreateUserRequestDto {
    name: string
    email: string
    picture?: string
    role?: "admin" | "user"
}