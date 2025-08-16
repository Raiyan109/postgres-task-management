export type IUser = {
    name: string;
    email?: string;
    password: string;
    phone: string;
    role: 'admin' | 'user';
    address?: string;
} 