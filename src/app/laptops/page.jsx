import dbConnect from "@/lib/dbConnect";
import { redirect } from "next/navigation";
import { getLaptops } from "../actions/laptops/getLaptops";

// export const dynamic = "force-dynamic"; //পুরো কম্পোনেন্টকে সবসময় সার্ভার থেকে render করতে // don't need when data fetching using server action

const LaptopsPage = async () => {
    // const res = await fetch(`https://nextjsfirstappjuly25.vercel.app/api/laptops`,{ cache: "no-store" });
    // const res = await fetch(`http://localhost:3000/api/laptops`,{ cache: "no-store" });
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/laptops`, { cache: "force-cache" }); //শুধু নির্দিষ্ট fetch request রিয়েলটাইম করতে
    // const res = await fetch(`http://localhost:3000/api/laptops`);
 
    {/*
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(baseUrl);
    
    const res = await fetch(`${baseUrl}/api/laptops`,{ cache: "no-store" });

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

    const datas = await getLaptops(); // do only inside the server components the fetching way, not in client component

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

export default LaptopsPage;