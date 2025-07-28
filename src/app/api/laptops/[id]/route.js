import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";

export async function GET(req, {params}) {
    const p = await params;
    const data = await dbConnect("laptops").findOne({_id : new ObjectId(p?.id)});
    return Response.json( data )
}

export async function DELETE(req, {params}) {
    const p = await params;
    const data = await dbConnect("laptops").deleteOne({_id : new ObjectId(p?.id)});
    return Response.json( data )
}

export async function PATCH(req, {params}) {
    const p = await params;
    const updateData = await req.json();
    const filter = {_id : new ObjectId(p.id)}
    const res = await dbConnect("laptops").updateOne(filter, {$set:{...updateData}});
  return Response.json(res)
}