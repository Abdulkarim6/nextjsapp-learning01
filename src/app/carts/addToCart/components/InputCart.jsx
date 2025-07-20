"use client"
import { postCart } from "@/app/actions/carts/postCarts";
import { useRouter } from "next/navigation";

const InputCart = () => {
    const router = useRouter();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const Name = form?.laptop?.value;
        const payload = {Name};
        console.log(payload);
        
        const res = await postCart(payload);

        // const res = await fetch("https://nextjsfirstappjuly25.vercel.app/api/carts", {
        
        // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        // const res = await fetch(`${baseUrl}/api/carts`, {
        //     method : "POST",
        //     body : JSON.stringify(payload),
        //     headers : {
        //         "Content-Type": "application/json"
        //     }
        // });
        
        form.reset();
        //alert("Laptop added");
        router.push("/carts");

        // router.refresh(); for removing cache
        // const result = await res.json();
        console.log(res);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                 <input type="text" name="laptop" placeholder='Laptop name'/>
                 <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
};

export default InputCart;