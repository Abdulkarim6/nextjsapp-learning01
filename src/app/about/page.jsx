'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import style from "./about.module.css"


const aboutPage = () => {
    const router = useRouter();
    const isLoggedIn = true;

    //handle logically
    const handleNavigate = () =>{
         if(isLoggedIn)
            router.push("/about/address")
        else
            router.push("/")
    }
    return (
        <div>
           <h1 className={`${style?.headingStyle} ${style?.fontStyle}`}>About page</h1>

           <Link href="/about/address">
              <button className="btn btn-primary my-5">Address page</button> 
           </Link>

            <button className="btn btn-primary my-5 ml-3" onClick={handleNavigate}>Address page</button> 
           
        </div>
    );
};

export default aboutPage;