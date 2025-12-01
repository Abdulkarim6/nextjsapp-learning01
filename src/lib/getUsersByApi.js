

export const getUsersByApi = async() => {
   try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    // console.log(baseUrl);
    
    const res = await fetch(`${baseUrl}/api/usersFromHappyShop`,{ cache: "no-store" });

    if (!res.ok) {
      console.log("Fetch failed with status:", res.status);
       return []; 
     }
    const datas = await res.json();
    
    console.log("datas",datas);
     return ;
   } catch (error) {
    
   }
}