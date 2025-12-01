

import { notFound } from "next/navigation";

// import { getUsers } from "@/app/actions/usersFromHappyShop/getUsers";

async function getUsers () {
   try {
    console.log("log from api", new Date().getSeconds());
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${baseUrl}/api/usersFromHappyShop`,{
        next:{tags:["users"]},
        cache: "force-cache"
    });

    if (!res.ok) {
       console.log("Fetch failed with status:", res.status);
       return []; 
     }
    const data = await res.json();
    return data;

   } catch (error) {
    notFound();
   }
}

const UsersFromHappyShop = async () => {
    const users = await getUsers();
    const somes = users?.splice(0,10);

    console.log(users?.length);

    return (
        <div>
         <h2 className="text-blue-500 font-semibold text-xs p-5">{JSON.stringify(somes)}</h2>
        </div>
    );
};

export default UsersFromHappyShop;