"use client"
import { signIn, signOut } from "next-auth/react"

const LoginButton = () => {
    return <button onClick={() => signIn()}>Sign-in</button>;
};

export default LoginButton;