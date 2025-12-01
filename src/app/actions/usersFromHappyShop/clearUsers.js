'use server'
import { revalidateTag } from "next/cache"

export const clearUsers = async() =>{
    try {
        revalidateTag("users");

        return {messeage : "Cleard users"};
    } catch (error) {
        
    }
};