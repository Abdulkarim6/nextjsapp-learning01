"use server"

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postCart = async(data) =>{
    
    try {
        const res = await dbConnect("cart").insertOne(data);
        revalidatePath("/carts");
        console.log(res);
        
        return {
            acknowledged: res.acknowledged,
            insertedId: res.insertedId.toString(),  // Important!
        };
    } catch (error) {
        console.log(error);
        return null;
    }
}