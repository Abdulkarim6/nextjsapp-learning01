"use server"
import dbConnect from "@/lib/dbConnect"

export const postRegisterUser = async(payload) => {
    
    //------
     try {
        const res = await dbConnect("users").insertOne(payload);
        
        return {
            acknowledged: res.acknowledged,
            insertedId: res.insertedId.toString(),  // Important!
        };
     } catch (error) {
        console.log(error);
        return null;
     }
}
