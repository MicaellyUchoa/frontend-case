import { IUser } from './IUser';

export interface IAuthContextData {
    signed: boolean;
    user: object | null;
    MakeLogin(user: IUser): Promise<void>;
    MakeLogout(): void;
}
