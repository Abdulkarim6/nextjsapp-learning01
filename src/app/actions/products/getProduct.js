"use server"

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProduct = async(id) => {
  try {
    const collection = dbConnect("bookingProduct");
    const product = await collection.findOne({_id : new ObjectId(id)});
    product._id = product._id.toString(),
    console.log("getProduct", product);
    return product;
    
  } catch (error) {
    
  }
 
}