"use server"

import dbConnect from "@/lib/dbConnect";

export const getProducts = async () => {
  try {
    const collection = dbConnect("bookingProduct");
    const data = await collection.find({}).toArray();

    const serialized = data.map(item => ({
    ...item,
    _id: item._id.toString(),
   // date: item.date?.toISOString?.() || null,
  }));

    return serialized;
  } catch (error) {
    console.log(error);
    return [];
  }
};
