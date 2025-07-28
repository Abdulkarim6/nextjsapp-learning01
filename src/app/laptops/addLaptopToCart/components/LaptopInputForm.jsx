"use client"
import { postLaptop } from "@/app/actions/laptops/postLaptop";
import { useRouter } from "next/navigation";

const LaptopInputForm = () => {
    const router = useRouter();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const Name = form?.laptop?.value;
        const payload = {Name};
        // console.log(payload);
        
        const res = await postLaptop(payload);

        // const res = await fetch("https://nextjsfirstappjuly25.vercel.app/api/laptops", {
        
        // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        // const res = await fetch(`${baseUrl}/api/laptops`, {
        //     method : "POST",
        //     body : JSON.stringify(payload),
        //     headers : {
        //         "Content-Type": "application/json"
        //     }
        // });
        
        form.reset();
        //alert("Laptop added");
        router.push("/laptops");

        // router.refresh(); for removing cache
        // const result = await res.json();
        
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

export default LaptopInputForm;