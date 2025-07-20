import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from "next/cache";

{/** Demo
  export async function GET() {
  //   const res = await fetch('https://data.mongodb-api.com/...', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY,
  //     },
  //   })
  //   const data = await res.json()
    const data = {
      name:"Abdul Karim",
      id:"10023",
      status:200,
    }
   
    return Response.json({ data })
    //will be found data by visit the route(http://localhost:3000/api/items)
  }
*/}

export async function GET() {
  const data = await dbConnect("cart").find({}).toArray();
  return Response.json( data )
}

export async function POST(request) {
  const data = await request.json();
  
  const res = await dbConnect("cart").insertOne(data);
  revalidatePath("/carts");
  return Response.json( res )
}