"use server"

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postProduct = async (payload) =>{
    try {
        const collection = dbConnect("bookingProduct");
        const res = await collection.insertOne(payload);
        revalidatePath("products");
        
        res.insertedId = res.insertedId.toString();
        return res;
        
    } catch (error) {
        console.log(error);
        return null;
    }
};
