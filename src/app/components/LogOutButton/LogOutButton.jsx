"use client"

import { signOut } from "next-auth/react";

const LogOutButton = () => {
    return<button onClick={() => signOut()}>Sign-Out</button>;
};

export default LogOutButton;