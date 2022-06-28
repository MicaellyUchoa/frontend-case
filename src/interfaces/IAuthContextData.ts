import { IUser } from './IUser';

export interface IAuthContextData {
    signed: boolean;
    user: object | null;
    MakeLogin(user: IUser): void;
    MakeLogout(): void;
}
