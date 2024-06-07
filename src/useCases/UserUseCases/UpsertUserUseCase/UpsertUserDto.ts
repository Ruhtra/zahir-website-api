export interface IUpsertUserRequestDto {
    name: string
    email: string
    picture?: string
    role?: "admin" | "user"
}