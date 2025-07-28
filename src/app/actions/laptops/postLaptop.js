"use server"

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postLaptop = async(data) =>{
    
    try {
        const res = await dbConnect("laptops").insertOne(data);
        revalidatePath("/laptops");
        
        return {
            acknowledged: res.acknowledged,
            insertedId: res.insertedId.toString(),  // Important!
        };
    } catch (error) {
        console.log(error);
        return null;
    }
}