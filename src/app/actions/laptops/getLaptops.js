"use server"

import dbConnect from "@/lib/dbConnect";

export const getLaptops = async() => {
    try {
        const datas = await dbConnect("laptops").find({}).toArray();
        return datas;
    } catch (error) {
      console.log(error);
      return [];
    }
}