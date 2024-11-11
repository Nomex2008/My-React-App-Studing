import { ReactNode } from "react";

export interface AuthContextType {
    isLogIn: boolean;
    setIsLogIn: (value: boolean) => void; // Функція для зміни стану
}

export interface AuthProviderProps {
    children: ReactNode;
}

export type TType = 'bold' | 'italic' | 'underline'