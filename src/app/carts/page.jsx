import dbConnect from "@/lib/dbConnect";
import { redirect } from "next/navigation";
import { getCarts } from "../actions/carts/getCarts";

export const dynamic = "force-dynamic"; //পুরো কম্পোনেন্টকে সবসময় সার্ভার থেকে render করতে

const CartsPage = async () => {
    // const res = await fetch(`https://nextjsfirstappjuly25.vercel.app/api/carts`,{ cache: "no-store" });
    // const res = await fetch(`http://localhost:3000/api/carts`,{ cache: "no-store" });
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/carts`, { cache: "force-cache" }); //শুধু নির্দিষ্ট fetch request রিয়েলটাইম করতে
    // const res = await fetch(`http://localhost:3000/api/carts`);
 
    {/*
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(baseUrl);
    
    const res = await fetch(`${baseUrl}/api/carts`,{ cache: "no-store" });

    if (!res.ok) {
      console.log("Fetch failed with status:", res.status);
       return []; 
     }
    const datas = await res.json();
    */}
    // console.log("datas",datas);
    
    {/** the redirect function worked in server component
        if(datas.length > 3){
            redirect("/")
        }
    **/}

    const datas = await getCarts(); // do only inside the server components the fetching way, not in client component

    return (
        <div className="px-10 pb-5">
            <h1 className="font-bold text-2xl">Laptop names : {datas?.length}</h1>
            {
                datas?.map(data =>
                    <p key={data?._id}>{data?.Name}</p>
                )
            }
        </div>
    );
};

export default CartsPage;