"use server";

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const deleteProduct = async (id) => {
  // TODO: Need validate
  
  console.log("deleteProduct", id);

  const res = await dbConnect("bookingProduct").deleteOne({
    _id: new ObjectId(id),
  });

  // const safeResult = JSON.parse(JSON.stringify(result)); // ✅ এটি sure করে plain object

  console.log(res);

  return {
    acknowledged: res.acknowledged,
    insertedId: res.deletedCount,
  };
};
