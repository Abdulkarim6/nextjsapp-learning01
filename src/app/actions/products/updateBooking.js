"use server"

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const updateBooking = async(updatedData) => {
    // TODO: Need validate
    const {_id, date, address, number} = await updatedData;
    const body = { date, address, number};

    const collection = dbConnect("bookingProduct");
    // const product = await collection.findOne({ _id: new ObjectId(_id) });
    // console.log("updateBooking", product);
    
    const query = { _id: new ObjectId(_id) };

    const filter = {
        $set : {...body}
    }

    const option = {
        upsert : true
    }

    const updatedRes = await collection.updateOne(query, filter, option);

    // console.log("updatedRes", updatedRes);
    return updatedRes;

    // const bookingCollection = dbConnect("bookingProduct");
    // const 
    // console.log("updatedData", _id, date, address, number);
    
}