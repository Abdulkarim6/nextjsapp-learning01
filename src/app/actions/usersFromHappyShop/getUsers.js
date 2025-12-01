'use server';
import dbConnect from "@/lib/dbConnect";

export const getUsers = async() => {
   try {
    const collection = dbConnect("users");
    const data = await collection.find().toArray();
    console.log(data);

    const serialized = data.map((item) => ({
      ...item,
      _id: item._id.toString(),
      // date: item.date?.toISOString?.() || null,
    }));

     return serialized;

   } catch (error) {
    
   }
};
