"use server"

import dbConnect from "@/lib/dbConnect";

export const getCarts = async() => {
    try {
        const datas = await dbConnect("cart").find({}).toArray();
        return datas;
    } catch (error) {
      console.log(error);
      return [];
    }
}