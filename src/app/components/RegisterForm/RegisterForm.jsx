"use client";

import { postRegisterUser } from "@/app/actions/auth/postRegisterUser";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const router = useRouter();
    const handleSubmit = async(e)=>{
          e.preventDefault();
          const form = e.target;
          const name = form?.name?.value;
          const password = form?.password?.value;
        //   console.log(name, password);
        const payload = {name, password}
        const result = await postRegisterUser(payload);
        console.log(result);
        if(result?.acknowledged){
            alert("Account created successfully. Please Login !!!");
            router.push("/api/auth/signin")
        }
          
    }
  return (
    <form onSubmit={handleSubmit}>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="text" className="input" name="name" placeholder="text" />
          <label className="label">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" />
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </div>
    </div>
    </form>
  );
};

export default RegisterForm;
